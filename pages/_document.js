import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <meta charset='utf-8' />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <meta name='theme-color' content='#050c1f' />
          <meta name='title' content='Give me the MONEY' />
          <meta name='description' content='Want to donate? I COLLECT. Give the MONEY frees you from your money' />

          <meta property='og:type' content='website' />
          <meta property='og:url' content='https://www.givemethe.money/' />
          <meta property='og:title' content='Give me the MONEY' />
          <meta
            property='og:description'
            content='Want to donate? I COLLECT. Give the MONEY frees you from your money'
          />
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

          <link rel='preconnect' href='https://fonts.gstatic.com' />
          <link
            href='https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;700;900&display=swap'
            rel='stylesheet'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
