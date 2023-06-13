import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta
            content="width=device-width, initial-scale=1, maximum-scale=1"
          />
          <meta name="theme-color" content="#3300cc" />
          <meta
            name="description"
            content="Beam helps you manage spend your money wisely "
          />
          <meta name="keywords" content="Finance, Wallet, Budget, Savings" />
        </Head>
        <body className="font-vietnam">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
