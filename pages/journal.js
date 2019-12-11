import React from 'react'
import Layout from '../components/Layout'
import Blog from '../components/Blog';
import { arrowFunctionExpression } from '@babel/types';

const Journal = () => (
  <Layout
    content={
      <Blog type='journal' />
    }
  />
)

export default Journal