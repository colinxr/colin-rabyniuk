import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = props => {
  return (
    <>      
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

        html {
          font-size: 18px;
          line-height: 28px;
        }

        body {
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
      `}</style>
    </>
  )
}

export default Layout