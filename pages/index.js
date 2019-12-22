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
  
Index.getInitialProps = async () => {
  // const resp = await getPosts('post', 1)
  // const posts = resp.results
  
  // store.dispatch.posts.setPosts(posts)
  // console.log(store.getState().posts)
  return { }
}

export default Index
