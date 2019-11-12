import React from 'react';
import Header from './components/Header/Header';
import Blog from './containers/Blog/Blog';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Blog></Blog>
    </div>
  );
}

export default App;
