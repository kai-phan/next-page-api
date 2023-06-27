import { getToken } from 'next-auth/jwt';
import { NextURL } from 'next/dist/server/web/next-url';
import { NextRequest, NextResponse } from 'next/server';

const getPathAndQuery = (url: NextURL) => {
  return `${url.pathname.substring(4)}${url.search}`;
};

export const config = {
  matcher: ['/api/:path*'],
};

const ignorePaths = ['/api/auth', '/api/users'];

export async function middleware(req: NextRequest) {
  const token = await getToken({ req });

  if (ignorePaths.some((path) => req.nextUrl.pathname.startsWith(path))) {
    return NextResponse.next();
  }

  if (!token) {
    return new NextResponse(
      JSON.stringify({ success: false, message: 'authentication failed' }),
      { status: 401, headers: { 'content-type': 'application/json' } },
    );
  }

  req.cookies.clear();
  // @ts-ignore
  req.headers.set('Authorization', `Bearer ${token.token.access_token}`);

  return NextResponse.rewrite(
    `${process.env.API_URL}/${getPathAndQuery(req.nextUrl)}`,
    {
      request: req,
    },
  );
}
