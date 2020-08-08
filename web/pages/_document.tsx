import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.12.0/css/all.css"></link>
          {/* <link rel="shortcut icon" href="/favicon.png" key="shortcutIcon" /> */}
          {/* <link rel="manifest" href="/manifest.json" /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument