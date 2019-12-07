import React from 'react'
import App from 'next/app'

function Site({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default Site