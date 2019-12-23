import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import { getPostBySlug } from '../../api/posts'
import Layout from '../../components/Layout';
import PostBody from '../../components/PostBody';
import store from '../../store';

function PostPage({ post }) {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <>
      <Layout
        isInsidePage={true}
        content={
          <>
            <Head>
              <title>{ post !== undefined ? `Colin Rabyniuk | ${post.data.title[0].text}` : 'Colin Rabyniuk | Post Loading' }</title>
            </Head>
            <div className="wrapper">
              {
                post !== undefined &&
                <PostBody data={post.data} />
              }
            </div>
          </>
        }
      />
    </>
  )
}

PostPage.getInitialProps = async ({ query }) => {
  const storePost = await store.getState().post
  const post = await getPostBySlug('post', query.id)

  return { post }
}

export default PostPage;