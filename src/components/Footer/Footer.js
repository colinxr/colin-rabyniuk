import React from 'react'
import Menu from '../Menu/Menu'
import './Footer.scss'

const Footer = () => {
  const date = new Date()
  return (
    <footer class="footer">
      <div className="footer__content">
        <span>Colin Rabyniuk, { date.getFullYear() }</span>
        <Menu isSecondary={true}/>
      </div>
   </footer>
  )
}

export default Footer