import React from 'react';
import './Header.scss';

function Header(props) {
    const classes = props.isInsidePage ? 'header block block--header header--inside' : 'header block block--header';

    const renderSmall = () => {
        return (
            <React.Fragment>
                <h6>Hey!</h6>
                <h2>I&rsquo;m Colin. Let&rsquo;s build</h2>
                { renderMenu() }
            </React.Fragment>
        )
    }

    const renderLarge = () => {
        return  (
            <React.Fragment>
                <h6>Hey!</h6>
                <h1>My name is Colin Rabyniuk,</h1>
                <h1>I&rsquo;m a full-stack dev who loves all things digital.</h1>
                <h1>Let&rsquo;s build</h1>
                { renderMenu() }
            </React.Fragment>
        )
    }

    const renderMenu = () => {
        return (
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
        )
    }

    return (
        <div className={ classes } role="banner">
            <div className="block__content">
                {
                    props.isInsidePage ? renderSmall() : renderLarge()
                }
            </div>
        </div>
    )
}

export default Header;