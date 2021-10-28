import Head from 'next/head';
import Image from 'next/image';
import styled from 'styled-components';
import { COLORS, WEIGHTS } from '../styles/constants';

export default function Home() {
  return (
    <HomeStyles>
      <Head>
        <title>Give me the Money</title>
        <meta name="description" content="Give me the Money Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>
          <h1>
            Give me the <span>Money</span>
          </h1>
          <h2>You want to donate I collect</h2>
        </div>
      </main>
      {/* <footer>Footer here</footer> */}
    </HomeStyles>
  );
}
const HomeStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 250px;
  text-align: center;

  h1 {
    padding-top: 50px;
    font-size: 3.5rem;
    font-weight: ${WEIGHTS.bold};
    margin: 0;
    padding-bottom: 20px;
  }

  h1 span {
    color: ${COLORS.primary};
    font-weight: ${WEIGHTS.bold};
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
