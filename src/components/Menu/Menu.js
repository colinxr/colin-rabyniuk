import React from 'react';
import './Menu.scss'

const Menu = (props) => {
  const classes = props.isSecondary ? 'nav nav--secondary' : 'nav'
  return (
    <ul className={ classes } role="navigation">
      <li className="nav__item">
        <a href="mailto:colinxr@gmail.com">Email</a>
      </li>
      <li className="nav__item">
        <a href="github.com/colinxr" target="_blank">GitHub</a>
      </li>
      <li className="nav__item">
        <a href="medium.com/colinxr" target="_blank">Medium</a>
      </li>
      <li className="nav__item">
        <a href="linkedIn.com/colinxr" target="_blank">LinkedIn</a>
      </li>
      <li className="nav__item">#COYG</li>
    </ul>
  )
}

export default Menu