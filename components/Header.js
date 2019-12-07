import React from 'react';
import Menu from './Menu'

function Header(props) {
	const classes = props.isInsidePage ? 'header block block--header header--inside' : 'header block block--header';

	const renderSmall = () => {
		return (
			<>
				<h6>Hey!</h6>
				<h2>I&rsquo;m Colin. Let&rsquo;s build</h2>
				<Menu />
			</>
		)
	}

	const renderLarge = () => {
		return  (
			<>
				<h6 className="ease">Hey!</h6>
				<h1 className="ease">My name is Colin Rabyniuk,</h1>
				<h1 className="ease">I&rsquo;m a full-stack dev who loves all things digital.</h1>
				<h1 className="ease">Let&rsquo;s build</h1>
				<Menu />
			</>
		)
	}

	return (
		<div className={ classes } role="banner">
			<div className="wrapper">
				{
					props.isInsidePage ? 
						renderSmall() : 
						renderLarge()
				}
			</div>

		<style jsx>{`
			.header {
				background-color: var(--lightBlue);
				text-align: left;
				border-bottom: 1px solid #edefee;
			}

			.header--inside { padding: 26px 0; }

			h1 {
				font-family: var(--headFamily);
				font-size: 2.6111111rem;
				line-height: 3.1111111rem;
			}
			
			h6 {
				font-size: 1rem;
				font-weight: 600;
				line-height: 1.5555556rem;
				margin-bottom: 1.5555556rem;
			}

  		.nav { margin-top: 56px; }
			
			.header--inside .nav { margin-top: 26px;}

			.ease:nth-child(1) { animation-delay: 100ms * 1; }
			.ease:nth-child(2) { animation-delay: 100ms * 2; }
			.ease:nth-child(3) { animation-delay: 100ms * 3; }
			.ease:nth-child(4) { animation-delay: 100ms * 4; }
			.ease:nth-child(5) { animation-delay: 100ms * 5; }
		`}</style>
		</div>
	)
}

export default Header;