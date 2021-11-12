// next imports
import Head from 'next/head';
import Image from 'next/image';

// styles imports
import styled from 'styled-components';
import { COLORS, WEIGHTS } from '../styles/constants';

// components
import Layout from '../components/Layout';

import Hero from '../components/Hero';
import Products from '../components/Products';

export default function Home() {
  return (
    <Layout>
      <div>
        <Head>
          <title>Give me the Money</title>
          <meta name="description" content="Give me the Money Website" />
          <link rel="icon" href="/favicon.ico" />;
        </Head>
        <main>
          {/* put cart here */}
          
          <Hero />
          <PaymentWrapper />
          <Products />
          </main>
      </div>
    </Layout>
  );
}


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
