import React from 'react';
import { Helmet } from "react-helmet";
import Layout from './components/Layout'
import Blog from './containers/Blog/Blog';
import './App.scss';
import './Typography.scss';

function App() {
  return (
		<div className="App">
			<Helmet>
				<meta charSet="utf-8" />
				<title>Colin Rabyniuk</title>
				<link rel="canonical" href="http://mysite.com/example" />
			</Helmet>
			<Layout
				content={
					<Blog></Blog>
				}
				></Layout>
			{/* <div className="block projects">
				<h2>Projects</h2>
			</div>
			
			<div className="block resume">
				<h2>Jobs</h2>
			</div>
			
			<div className="block journal">
				<h2>Journals</h2>
			</div> */}
		</div>
  );
}

export default App;
