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

export default function Home({ productPriceData }) {
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
          <HeroWrapper>
            <h1>
              Give me the <span>Money</span>
            </h1>
            <h2>
              You want to donate? I <span>collect?</span>
            </h2>
          </HeroWrapper>
          <PaymentWrapper>
            <a href="https://www.buymeacoffee.com/givemethe.money" target="_blank" rel="noreferrer">
              <Image
                src="/images/bmc-button.png"
                alt="Buy me a coffee button"
                quality={75}
                width={200}
                height={56}
                placeholder="blur"
                blurDataURL
              />
            </a>
          </PaymentWrapper>
          <div>
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

const HeroWrapper = styled.section`
  width: max-content;
  margin: auto;
  text-align: center;

  h1 {
    padding-top: 50px;
    font-size: 3.5rem;
    font-weight: ${WEIGHTS.bold};
    margin: 0;
  }

  h1 span,
  h2 span {
    color: ${COLORS.primary};
    font-weight: ${WEIGHTS.bold};
    text-transform: uppercase;
  }

  h2 {
    font-size: 1.5rem;
    margin: 0;
    margin-bottom: 10px;
    font-style: italic;
  }
`;

const PaymentWrapper = styled.section``;
