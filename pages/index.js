// next imports
import Head from 'next/head';
import Image from 'next/image';

// styles imports
import styled from 'styled-components';
// import { loadStripe } from '@stripe/stripe-js';
import Stripe from 'stripe';
import { COLORS, WEIGHTS } from '../styles/constants';
import Layout from '../components/Layout';
import Cart from '../components/Cart';
import Hero from '../components/Hero';

export default function Home() {
  async function fetchProducts() {
    const response = await fetch('https://api.stripe.com/v1/products');
    // waits until the request completes...
    console.log(response);
  }

  return (
    <Layout>
      <>
        <Head>
          <title>Give me the Money</title>
          <meta name="description" content="Give me the Money Website" />
          <link rel="icon" href="/favicon.ico" />;
        </Head>
        <main>
          <Cart />
          <Hero />
          <PaymentWrapper />
          <div>
            {/* Direct Checkout link => no Cart */}
            Stripe product:
            <ul>
              <li>
                <a href="https://buy.stripe.com/test_bIY00uacadbi2g8eUU">test produit 1</a>
              </li>
            </ul>
          </div>
        </main>
      </>
    </Layout>
  );
}

// export async function getServerSideProps() {
//   const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

//   const productPriceData = await stripe.prices.list({
//     expand: ['data.product'], // 🎉 Give me the product data too
//   });
//   console.log(JSON.stringify(productPriceData, null, 2));

//   return {
//     props: { productPriceData },
//   };
// }

const PaymentWrapper = styled.section``;

// TODO: To put in Footer
// <a
//   href="https://www.buymeacoffee.com/givemethe.money"
//   target="_blank"
//   rel="noreferrer"
// >
//   <Image
//     src="/images/bmc-button.png"
//     alt="Buy me a coffee button"
//     quality={75}
//     width={200}
//     height={56}
//     placeholder="blur"
//     blurDataURL
//   />
// </a>;
