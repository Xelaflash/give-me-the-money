import Head from 'next/head';
import PropTypes from 'prop-types';
// libs
import { CartProvider } from 'use-shopping-cart';

// utils
import { CartStateProvider } from '../utils/cartState';
// styles
import GlobalStyle from '../styles/GlobalStyles';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <CartProvider
        mode='payment'
        cartMode='checkout-session'
        stripe={process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}
        success_url='{process.env.SITE_URL}/success'
        cancel_url={process.env.SITE_URL}
        currency='USD'
        billingAddressCollection
      >
        <Head>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
        </Head>
        <CartStateProvider>
          <Component {...pageProps} />
        </CartStateProvider>
      </CartProvider>
    </>
  );
}

MyApp.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.any,
};

export default MyApp;
