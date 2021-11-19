import GlobalStyles from '../styles/GlobalStyles';
import { CartStateProvider } from '../utils/cartState';
import getStripe from '../utils/get-stripe';

// libs
import { CartProvider } from 'use-shopping-cart'

function MyApp({ Component, pageProps }) {
  return (
    <CartProvider
      mode="payment"
      cartMode="client-only"
      stripe={getStripe()}
      currency='usd'
      successUrl="/"
      cancelUrl="/"
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
