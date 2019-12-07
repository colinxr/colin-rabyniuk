import React from 'react'
import Menu from './Menu'

const Footer = () => {
  const date = new Date()
  return (
    <footer className="footer">
      <div className="footer__content">
        <span>Colin Rabyniuk, { date.getFullYear() }</span>
        <Menu isSecondary={true}/>
      </div>

  <style jsx>{`
    .footer { border-top: 1px solid #edefee; }

    .footer__content {
      display: flex;
      justify-content: space-between;
      max-width: 728px;
      margin: 0 auto;
      width: 90%;
      padding: 13px 0;
      align-items: center;
    }

    .nav { font-size: .75rem; }
  `}</style>
   </footer>
  )
}

export default Footer