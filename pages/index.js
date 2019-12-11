import React from 'react'
import Layout from '../components/Layout'
import Blog from '../components/Blog';

const Index = () => (
  <Layout 
    content={
      <Blog type='post' />
    }
  />
)

export default Index
