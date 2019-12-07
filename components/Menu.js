import React from 'react';

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

  <style jsx>{`
    .nav {
      display: flex;
      list-style-type: none;
      padding: 0;
    }

    .nav__item + .nav__item { margin-left: 28px; }
    
    a {
      background-color: var(--link);
      transition: all linear .2s;
      color: var(--body);
    }

    a:hover {
      background-color: var(--linkHover);
      text-decoration: none;
    }

    a .nav--secondary { background-color: transparent; }
    a .nav--secondary:hover { background-color: transparent; }
  `}</style>
    </ul>
  )
}

export default Menu