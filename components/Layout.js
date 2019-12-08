import React from 'react';
import Head from 'next/head'
import Header from './Header';
import Footer from './Footer';

const Layout = props => {
  return (
    <>    
      <Head>
        <title>Colin Rabyniuk</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>  
      <Header 
        isInsidePage={ props.isInsidePage }
      />
      <main>
        { props.content }
      </main>
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