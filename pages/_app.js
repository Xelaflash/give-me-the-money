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
      //!! to change
      successUrl="https://localhost:3000"
      cancelUrl="https://localhost:3000"
      currency="USD"
      allowedCountries={['US', 'GB', 'CA', 'FR']}
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
