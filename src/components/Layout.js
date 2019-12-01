import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';

const Layout = props => {
  return (
    <>      
      <Header 
        isInsidePage={props.isInsidePage}
      />
      <main>
        {props.content}
      </main>
      <Footer />
    </>
  )
}

export default Layout