import React from 'react'
import { getPosts } from '../api/posts'
import Layout from '../components/Layout'
import Blog from '../components/Blog';
// import Food from '../components/Food';

const Index = (props) => (
  <Layout 
    content= {
      <Blog posts={props.posts} />
    }
  />
)

export default Index
