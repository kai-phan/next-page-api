import React from 'react';

import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';

import { SWRConfig } from 'swr';

import { ClientAuth } from 'src/components/application';
import ThemeConfig from 'src/components/application/ThemeConfig';
import { SiderAndHeader } from 'src/components/layouts';
import { swrAuthError, swrErrorComposer } from 'src/libs/client/hoc';

import 'src/styles/globals.css';

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session} refetchOnWindowFocus={false}>
      <SWRConfig
        value={{
          onError: swrErrorComposer(swrAuthError),
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
