import type { AppProps } from 'next/app';
import Script from 'next/script';

import { Provider } from 'mobx-react';

import { RootStore } from 'rootStore';

import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  const rootStore = new RootStore();

  return (
    <>
      <Script
        type='text/javascript'
        src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAOKEY}&libraries=services`}
      ></Script>
      <Provider {...rootStore}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp;
