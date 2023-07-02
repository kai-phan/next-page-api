import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';

import 'src/styles/globals.css';

import { SWRConfig } from 'swr';

import { ClientAuth } from 'src/components/application';
import ThemeConfig from 'src/components/application/ThemeConfig';
import { SiderAndHeader } from 'src/components/layouts';

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <SWRConfig
        value={{
          onError: (err) => {
            console.log(err);
          },
          shouldRetryOnError: false,
        }}
      >
        <ThemeConfig>
          <SiderAndHeader>
            <ClientAuth component={Component} pageProps={pageProps} />
          </SiderAndHeader>
        </ThemeConfig>
      </SWRConfig>
    </SessionProvider>
  );
}
