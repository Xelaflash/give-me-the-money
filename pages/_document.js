import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <meta charset='utf-8' />
          <meta name='theme-color' content='#050c1f' />
          <meta name='title' content='Give me the MONEY' />
          <meta name='description' content='Want to donate? I COLLECT. Give the MONEY frees you from your money' />
          {/* <!-- Google / Search Engine Tags --> */}
          <meta itemProp='name' content='Give me the MONEY' />
          <meta itemProp='description' content='Want to donate? I COLLECT. Give the MONEY frees you from your money' />
          <meta itemProp='image' content='https://www.givemethe.money/images/meta-img.png' />

          {/* <!-- Facebook Meta Tags --> */}
          <meta property='og:title' content='Give me the MONEY' />
          <meta
            property='og:description'
            content='Want to donate? I COLLECT. Give the MONEY frees you from your money'
          />
          <meta property='og:image' content='https://www.givemethe.money/images/meta-img.png' />
          <meta property='og:url' content='https://www.givemethe.money' />
          <meta property='og:type' content='website' />
          {/* <!-- Twitter Meta Tags --> */}
          <meta name='twitter:title' content='Give me the MONEY' />
          <meta
            name='twitter:description'
            content='Want to donate? I COLLECT. Give the MONEY frees you from your money'
          />
          <meta name='twitter:image' content='https://www.givemethe.money/images/meta-img.png' />
          <meta name='twitter:card' content='summary_large_image' />
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
