import App, { Container } from 'next/app'
import Router from 'next/router'
import withGA from 'next-ga'
import React from 'react'
// import { PageTransition } from 'next-page-transitions'

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <PageTransition timeout={300} classNames="page-transition"> */}
        <Component {...pageProps} />
      {/* </PageTransition> */}
      <style jsx global>{`
        .page-transition-enter .cr-post { opacity: 0; transform: translateY(100px) }
        .page-transition-enter-active .cr-post {
          opacity: 1;
          transform: translateY(0px)
        }

        .page-transition-leave .cr-post {
          opacity: 1
        }

        .page-transition-leave .cr-post {
          opacity: 1
          transform: translateY(0px)
        }

    `}</style>
    </>
  )
}

export default withGA('UA-31138805-3', Router)(MyApp);