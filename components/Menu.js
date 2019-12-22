import React from 'react';

const Menu = (props) => {
  const classes = props.isSecondary ? 'nav nav--secondary' : 'nav'
  return (
    <ul className={ classes } role="navigation">
      <li className="nav__item">
        <a className="cr-btn" href="http://mailto:colinxr@gmail.com">Email</a>
      </li>
      <li className="nav__item">
        <a className="cr-btn" href="http://github.com/colinxr" target="_blank">GitHub</a>
      </li>
      <li className="nav__item">
        <a className="cr-btn" href="http://linkedIn.com/colinxr" target="_blank">LinkedIn</a>
      </li>
      {
        !props.isSecondary && 
          <li className="nav__item">#COYG</li>
      }

    <style jsx>{`
      .nav {
        display: flex;
        list-style-type: none;
        padding: 0;
        margin-top: 26px; 
        font-size: 1rem;
      }

      .nav__item + .nav__item { margin-left: 28px; }

      .nav--secondary { 
        margin: 0; 
        font-size: .75rem;
      }

      .nav--secondary .cr-btn { background-color: transparent; }
      .nav--secondary .cr-btn:hover { background-color: transparent; }
    `}</style>
    </ul>
  )
}

export default Menu