import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="description" content=" Doação de Computadores in Next.js ! :), JSX and JavaScrip"/>
          <meta name="keywords" content="JSX,CSS,TypeScript,Doação,Doar,Computador"/>
          <meta name="author" content="https://github.com/REFSZIN/"/>
        </Head>
          <Main />
          <NextScript />
      </Html>
    );
  }
}

export default MyDocument;
