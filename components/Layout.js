import React, { useEffect } from 'react';
import { initAnalytics, logPageView } from '../utils/analytics';
import Head from 'next/head'
import Header from './Header';
import Newsletter from './Newsletter';
import Footer from './Footer';

const Layout = (props) => {
  useEffect(() => {
    // if (!window.GA_INITIALIZED) {
    //   initAnalytics()
    //   window.GA_INITIALIZED = true
    // }

    // logPageView()
  }, [])
  return (
    <>    
      <Head>
        <title>Colin Rabyniuk</title>
        <meta key="carset" charSet="utf-8"/>
        <meta key="http-equiv" httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta key="viewport" name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta key="author" name="author" content="Colin Rabyniuk" />
        <meta key="description" description="Colin Rabyniuk full stack developer – Javascript, PHP, Python, Wordpress" />
        <meta key="og:title" name="og:title" content="Colin Rabyniuk" />
        <meta key="og:description" name="og:description" content="Colin Rabyniuk | Full Stack Deve | Javascript, Express, WP, Laravel, Python" />
        <meta key="og:image" name="og:image" content="" />
        <meta key="og:url" content="https://colinrabyniuk.com" />
        <meta key="og:site_name" name="og:site_name" content="Colin Rabyniuk" />
        <meta key="og:type" name="og:type" content="website" />
        {/* { favicon } */}
      </Head>  
      
      <Header isInsidePage={ props.isInsidePage } />
  
      <main role="main"> { props.content } </main>
      
      <Footer />

      <style jsx global>{`
        :root {
          --lightBlue: #e8f4f8;
          --darkBlue: #add8e6;
          --green: rgba(240, 250, 239, 100);
          --link: rgba(245, 215, 110, 0.5);
          --linkHover: rgba(245, 215, 110, 0.8);
          --body: #4a4a4a;
          --hedFamily:'Apercu', Helvetica, Arial, sans-serif;
          --metaFamily:'Apercu Mono', Monaco, Menlo, Courier, Sans-serif;
        }

        @font-face {
          font-family: Apercu;
          src: url('/fonts/apercu-regular.eot');
          src: url('/fonts/apercu-regular.eot?#iefix') format("embedded-opentype"),
            url('/fonts/apercu-regular.woff2') format("woff2"),
            url('/fonts/apercu-regular.woff') format("woff"),
            url('/fonts/apercu-regular.ttf') format("truetype");
          font-weight: 400;
          font-style: normal
        }

        @font-face {
          font-family: Apercu;
          src: url('/fonts/apercu-regular.eot');
          src: url('/fonts/apercu-regular.eot?#iefix') format("embedded-opentype"),
            url('/fonts/apercu-regular.woff2') format("woff2"),
            url('/fonts/apercu-regular.woff') format("woff"),
            url('/fonts/apercu-regular.ttf') format("truetype");
          font-weight: 400;
          font-style: normal
        }

        @font-face {
          font-family: Apercu;
          src: url('/fonts/apercu-bold.eot');
          src: url('/fonts/apercu-bold.eot?#iefix') format("embedded-opentype"),
            url('/fonts/apercu-bold.woff2') format("woff2"),
            url('/fonts/apercu-bold.woff') format("woff"),
            url('/fonts/apercu-bold.ttf') format("truetype");
          font-weight: 600;
          font-style: normal
        }

        @font-face {
          font-family: Apercu Mono;
          src: url('/fonts/ApercuPro-Mono.ttf') format("truetype");
          font-weight: 400;
          font-style: normal
        }

        html {
          font-size: 18px;
          line-height: 28px;
          margin: 0;
        }

        body {
          margin: 0 !important;
          color: var(--body);
          font-family: var(--hedFamily);
          // background-color: #add8e6;
        }

        .block {
          padding: 56px 0;
          // background-color: lighten(#e8f4f8, 2%);
          // background-color: #e8f4f8;
        }
        
        .block--header {
          background-color: white;
          border-bottom: 1px solid #eaeaea;
        }

        .wrapper {
          width: 90%;
          max-width: 728px;
          margin: 0 auto
        }

        main {
          margin-bottom: 56px;
        }

        .text {
          background-color: #eaeaea;
          font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
        }
      `}</style>
    </>
  )
}

export default Layout