import React from 'react';
import Header from './components/Header/Header';
import Blog from './containers/Blog/Blog';
import './App.scss';

function App() {
  return (
		<div className="App">
			<Header></Header>
			
			<Blog></Blog>
			
			<div className="block projects">
				<h2>Projects</h2>
			</div>
			
			<div className="block resume">
				<h2>Jobs</h2>
			</div>
			
			<div className="block journal">
				<h2>Journals</h2>
			</div>
		</div>
  );
}

export default App;
