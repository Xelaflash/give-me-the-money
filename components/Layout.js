import Head from 'next/head';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export default function Layout({ children }) {
  return (
    <LayoutStyles>
      <Head>
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
      </Head>
      {children}
    </LayoutStyles>
  );
}

const LayoutStyles = styled.div`
  min-height: 100vh;
  width: 100%;
`;

Layout.propTypes = {
  children: PropTypes.any,
};
