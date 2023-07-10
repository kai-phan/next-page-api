import { signOut } from 'next-auth/react';
import Router from 'next/router';

export const swrErrorComposer = (...handlers) => {
  return (err: any) => {
    handlers.forEach((handler) => handler(err));
  };
};

export const swrAuthError = async (err) => {
  if (err.status === 401) {
    if (err instanceof Response) {
      const res = await err.json();

      console.log(res);

      const data = await signOut({
        redirect: false,
        callbackUrl: '/api/auth/signin',
      });

      Router.push(data.url);
    }
  }
};
