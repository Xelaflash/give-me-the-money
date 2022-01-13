import PropTypes from 'prop-types';
// libs
import { CartProvider } from 'use-shopping-cart';
// styles
import Head from 'next/head';
import GlobalStyles from '../styles/GlobalStyles';
// utils
import { CartStateProvider } from '../utils/cartState';

function MyApp({ Component, pageProps }) {
  return (
    <CartProvider
      mode='payment'
      cartMode='checkout-session'
      stripe={process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}
      success_url='{process.env.SITE_URL}/success'
      cancel_url={process.env.SITE_URL}
      currency='USD'
      billingAddressCollection
    >
      {/* <Head>
        <meta charset='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='theme-color' content='#050c1f' />
        <meta name='title' content='Give me the MONEY' />
        <meta name='description' content='Want to donate? I COLLECT. Give the MONEY frees you from your money' />

        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://www.givemethe.money/' />
        <meta property='og:title' content='Give me the MONEY' />
        <meta property='og:description' content='Want to donate? I COLLECT. Give the MONEY frees you from your money' />
        <meta property='og:image' content='/images/meta-img.png' />
        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content='https://www.givemethe.money/' />
        <meta property='twitter:title' content='Give me the MONEY' />
        <meta
          property='twitter:description'
          content='Want to donate? I COLLECT. Give the MONEY frees you from your money'
        />
        <meta property='twitter:image' content='/images/meta-img.png' />
        <link rel='icon' href='/favicon.ico' />
      </Head> */}
      <CartStateProvider>
        <GlobalStyles />
        <Component {...pageProps} />
      </CartStateProvider>
    </CartProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.any,
};

export default MyApp;
