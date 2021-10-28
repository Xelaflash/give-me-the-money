import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import { COLORS, WEIGHTS } from '../styles/constants';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <HomeStyles>
        <Head>
          <title>Give me the Money</title>
          <meta name="description" content="Give me the Money Website" />
          <link rel="icon" href="/favicon.ico" />;
        </Head>
        <main>
          <div>
            <h1>
              Give me the <span>Money</span>
            </h1>
            <h2>
              You want to donate I <span>collect</span>
            </h2>
          </div>

          <a href="https://www.buymeacoffee.com/givemethe.money" target="_blank" rel="noreferrer">
            <Image
              src="/images/bmc-button.png"
              alt="Buy me a cofee button"
              quality={75}
              width={200}
              height={56}
              placeholder="blur"
              blurDataURL
            />
          </a>
        </main>
        {/* <footer>Footer here</footer> */}
      </HomeStyles>
    </Layout>
  );
}

const HomeStyles = styled.div`
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
    /* color: ${COLORS.vividGreen}; */
    font-style: italic;
  }

  /* responsive styles */
  @media screen and (max-width: 600px) {
    .container h2 {
      font-size: 2.2rem;
    }
  }
`;
