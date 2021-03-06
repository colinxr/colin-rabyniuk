import React from 'react';
import Link from 'next/link'
import Menu from './Menu'

const Header = (props) => {
	const classes = props.isInsidePage ? 'header block block--header header--inside' : 'header block block--header';
	
	return (
		<div className={ classes } role="banner">
			<div className="wrapper">
				{
					props.isInsidePage ? 
						<>
							<h6>
								<Link href="/"><a>Back</a></Link>
							</h6>
							<h2>I&rsquo;m Colin. Let&rsquo;s build</h2>
							<Menu />
						</> : 
						<>
							<h6 className="ease">Hey!</h6>
							<h1 className="ease">My name is Colin Rabyniuk,</h1>
							<h1 className="ease">I&rsquo;m a full-stack dev who loves all things digital.</h1>
							<h1 className="ease">Let&rsquo;s build</h1>
							<Menu />
						</>
				}
			</div>

		<style jsx>{`
			.header {
				// background-color: var(--lightBlue);
				text-align: left;
				border-bottom: 1px solid #edefee;
				font-family: var(--headFamily);
				margin-bottom: 56px;
			}

			.header--inside { padding: 26px 0; }

			h1 {
				font-size: 2.6111111rem;
				line-height: 3.1111111rem;
			}
			
			h6  {
				font-size: 1rem;
				font-weight: 600;
				line-height: 1.5555556rem;
				margin-bottom: 1.5555556rem;
			}
			
			h6 a { text-decoration: none; }

			.ease {
				opacity: 0;
				animation: slideUp .75s;
				animation-iteration-count: 1;
				transform-origin: 50% 50%;
				animation-fill-mode: forwards;
			 }

			.ease:nth-child(1) { animation-delay: 125ms; }
			.ease:nth-child(2) { animation-delay: 250ms; }
			.ease:nth-child(3) { animation-delay: 375ms; }
			.ease:nth-child(4) { animation-delay: 500ms; }
			.ease:nth-child(5) { animation-delay: 525ms; }

			@keyframes slideUp {
			0%,100% {
				transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
				/* easeOutCirc */ }
			0% {
				opacity: 0;
				transform: translateY(35px); }
			100% {
				opacity: 1;
				transform: translateY(0); } }
		`}</style>
		</div>
	)
}

export default Header;