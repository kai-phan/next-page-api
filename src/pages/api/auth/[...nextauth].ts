import NextAuth, { AuthOptions, User } from 'next-auth';
import { JWT } from 'next-auth/jwt';
import CredentialsProvider from 'next-auth/providers/credentials';

import jwtDecode from 'jwt-decode';

const refreshAccessToken = (token): JWT => {
  console.log('refreshAccessToken', token);

  return token;
};

export const options = {
  providers: [
    CredentialsProvider({
      id: 'alumni-credentials',
      name: 'Login Manually',
      type: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email', placeholder: 'Email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        const res = await fetch(`${process.env.API_URL}/auth/authenticate`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: credentials?.email,
            password: credentials?.password,
            platform: 'alumni',
          }),
        });

        return await res.json();
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    signIn({ user }) {
      console.log('Signin', { user });
      return user.status === 'success';
    },
    jwt({ token, user, account, profile }) {
      //USER object is the response returned from the authorize callback
      //PROFILE object is the raw body of the HTTP POST submission.
      //ACCOUNT is the token information returned from the provider.
      //TOKEN is the current JSON Web Token created for the session.

      if (user) {
        token = {
          ...token,
          ...user.data,
        };
      }

      const accessToken = token?.token.access_token || '';
      const expiresAt = jwtDecode<{ exp: number }>(accessToken).exp;

      if (expiresAt && expiresAt * 1000 < Date.now()) {
        // If the access token has expired, try to refresh it
        return refreshAccessToken(token);
      }

      return token;
    },
    session({ session, user, token }) {
      if (token) {
        session.user = token.user as User['data']['user'];
        session.token = token.token as User['data']['token'];
      }

      return session;
    },
  },
} satisfies AuthOptions;

export default NextAuth(options);
