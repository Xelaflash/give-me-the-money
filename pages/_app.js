import GlobalStyles from '../styles/GlobalStyles';
import { CartStateProvider } from '../utils/cartState';

function MyApp({ Component, pageProps }) {
  return (
    <CartStateProvider>
      <GlobalStyles />
      <Component {...pageProps} />
    </CartStateProvider>
  );
}

export default MyApp;
