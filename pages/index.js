import React from 'react'
import fetch from 'isomorphic-unfetch'
import Layout from '../components/Layout'
import Blog from '../components/Blog';
import Food from '../components/Food';

const Index = () => (
  <Layout 
    content= {
      <>
        <Blog />
        <Food />
      </>
    }
  />
)

export default Index
