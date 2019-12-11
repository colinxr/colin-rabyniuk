import React from 'react'
import Layout from '../components/Layout'
import Blog from '../components/Blog';

const Journal = () => (
  <Layout
    content={
      <Blog type='journal' />
    }
  />
)

export default Journal
