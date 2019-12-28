import React from 'react'
import fetch from 'isomorphic-unfetch'
import { useStoreActions } from 'easy-peasy'
import { getPosts } from '../api/posts'
import Layout from '../components/Layout'
import Blog from '../components/Blog';
import store from '../store'

const Index = ({ posts }) => {
  return (
    <Layout
      content={
        <Blog contentType='post'/>
      }
    />
  )
}

export default Index
