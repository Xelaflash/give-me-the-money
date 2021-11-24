// libs
import { CartProvider } from 'use-shopping-cart';
// styles
import GlobalStyles from '../styles/GlobalStyles';
// utils
import { CartStateProvider } from '../utils/cartState';

function MyApp({ Component, pageProps }) {
  return (
    <CartProvider
      mode="payment"
      cartMode="checkout-session"
      stripe={process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}
      success_url="{process.env.SITE_URL}/success.html"
      cancel_url={process.env.SITE_URL}
      currency="USD"
      billingAddressCollection
    >
      <CartStateProvider>
        <GlobalStyles />
        <Component {...pageProps} />
      </CartStateProvider>
    </CartProvider>
  );
}

export default MyApp;
