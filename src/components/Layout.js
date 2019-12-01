import React from 'react';
import Header from './Header/Header';

const Layout = props => {
  return (
    <div>      
      <Header 
        isInsidePage={props.isInsidePage}
      />
      <main>
        {props.content}
      </main>
    </div>
  )
}

export default Layout