import type { AppProps } from 'next/app';
import Script from 'next/script';

import { Provider } from 'mobx-react';

import { RootStore } from 'rootStore';

import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  const rootStore = new RootStore();

  return (
    <Provider {...rootStore}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
