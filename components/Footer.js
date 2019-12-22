import React from 'react'
import Menu from './Menu'

const Footer = () => {
  const date = new Date()
  return (
    <>
      <div className="footer-item">
        <div className="wrap inline">
          <p>I'm a self-taught dev based out of Toronto. I work a lot with Javascript and PHP. My work has me focused on front-end projects, but I'm quite comfortable working on the back-end when needed. Taking on freelance projects for 2020.</p>

          <a href="mailto:colinxr@gmail.com" target="_blank" className="cr-btn">Get in Touch</a>
        </div>
      </div>
      <div className="footer-item">
        <div className="wrap">
          <span>Colin Rabyniuk, { date.getFullYear() }</span>
          <Menu isSecondary={true}/>
        </div>
      </div>

  <style jsx>{`
    .footer-item { 
      border-top: 1px solid #edefee; 
      font-size: .75rem;  
    }

    .footer-item p {
      width: 70%;
      font-size: .85rem;
      line-height: 1.4;
    }

    .cr-btn { align-self: flex-start } 

    .wrap {
      display: flex;
      justify-content: space-between;
      max-width: 728px;
      margin: 0 auto;
      width: 90%;
      padding: 13px 0;
      align-items: center;
    }

    .wrap.inline {
      display: block;
    }

    {/* .nav { font-size: .75rem; } */}
  `}</style>
   </>
  )
}

export default Footer