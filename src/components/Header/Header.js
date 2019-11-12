import React from 'react';
import './Header.scss';

function Header() {
    return (
        <div className="block block--header" role="banner">
            <div className="block__content">
                <h6>Hey!</h6>
                <h1>My name is Colin Rabyniuk,</h1>
                <h1>I&rsquo;m a full-stack dev who loves all things digital.</h1>
                <h1>Let&rsquo;s build</h1>
                <ul className="header__nav" role="navigation">
                    <li className="header__item">
                        <a href="mailto:colinxr@gmail.com">Email</a>
                    </li>
                    <li className="header__item">
                        <a href="github.com/colinxr" target="_blank">GitHub</a>
                        </li>
                    <li className="header__item">
                        <a href="medium.com/colinxr" target="_blank">Medium</a>
                        </li>
                    <li className="header__item">
                        <a href="linkedIn.com/colinxr" target="_blank">LinkedIn</a>
                    </li>
                    <li className="header__item">#COYG</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;