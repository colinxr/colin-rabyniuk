import React from 'react';
import Menu from '../Menu/Menu'
import './Header.scss';

function Header(props) {
    const classes = props.isInsidePage ? 'header block block--header header--inside' : 'header block block--header';

    const renderSmall = () => {
        return (
            <React.Fragment>
                <h6>Hey!</h6>
                <h2>I&rsquo;m Colin. Let&rsquo;s build</h2>
                <Menu />
            </React.Fragment>
        )
    }

    const renderLarge = () => {
        return  (
            <React.Fragment>
                <h6 class="ease">Hey!</h6>
                <h1 class="ease">My name is Colin Rabyniuk,</h1>
                <h1 class="ease">I&rsquo;m a full-stack dev who loves all things digital.</h1>
                <h1 class="ease">Let&rsquo;s build</h1>
                <Menu />
            </React.Fragment>
        )
    }

    return (
        <div className={ classes } role="banner">
            <div className="block__content">
                {
                    props.isInsidePage ? 
                        renderSmall() : 
                        renderLarge()
                }
            </div>
        </div>
    )
}

export default Header;