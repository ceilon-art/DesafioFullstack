import { Provider } from 'next-auth/client';
import { AppProps } from 'next/app';
import { GlobalStyles } from '../styles/global-styles';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider session={pageProps.session}>
      <Component {...pageProps} />
      <GlobalStyles />
    </Provider>
  );
}

export default MyApp;
