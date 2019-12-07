import React from 'react';
import { Helmet } from "react-helmet";
import Layout from './components/Layout'
import Blog from '../containers/Blog/Blog';
import Food from '../containers/Food/Food';
import './App.scss';
import './Typography.scss';

function App() {
  return (
		<>
			<Helmet>
				<meta charset="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<title>Colin Rabyniuk</title>
				<link rel="canonical" href="http://mysite.com/example" />
			</Helmet>
			<Layout
				content={
					<>
						<Blog />
						<Food />
					</>

				}
				></Layout>
		</>
  );
}

export default App;
