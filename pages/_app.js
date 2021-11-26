import GlobalStyles from '../styles/GlobalStyles';
import { CartStateProvider } from '../utils/cartState';

// libs
import { CartProvider } from 'use-shopping-cart'

function MyApp({ Component, pageProps }) {
  return (
    <CartProvider
      mode="payment"
      cartMode="checkout-session"
      stripe={process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}
      success_url='{process.env.SITE_URL}/success'
      cancel_url= {process.env.SITE_URL}
      currency="USD"
      billingAddressCollection={true}
    >
      <CartStateProvider>
        <GlobalStyles />
        <Component {...pageProps} />
      </CartStateProvider>
    </CartProvider>
  );
}

export default MyApp;
