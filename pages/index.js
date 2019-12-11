import React from 'react'
import Layout from '../components/Layout'
import Blog from '../components/Blog';
// import Food from '../components/Food';

const Index = () => (
  <Layout 
    content= {
      <Blog type='post' />
    }
  />
)

export default Index
