import App, { Container } from 'next/app'
import Router from 'next/router'
import withGA from 'next-ga'
import React from 'react'
import { PageTransition } from 'next-page-transitions'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <PageTransition timeout={300} classNames="page-transition">
        <Component {...pageProps} />
      </PageTransition>
      <style jsx global>{`
        .page-transition-enter { opacity: 0; }
        .page-transition-enter-active {
          opacity: 1;
          transition: opacity 300ms;
        }
        .page-transition-exit { opacity: 1; }
        .page-transition-exit-active {
          opacity: 0;
          transition: opacity 300ms;
        }
    `}</style>
    </>
  )
}

export default withGA('UA-31138805-3', Router)(MyApp);