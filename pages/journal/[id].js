import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import { getPostBySlug } from '../../api/posts'
import JournalLayout from '../../components/JournalLayout';
import PostBody from '../../components/PostBody';

function PostPage({ post }) {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <>
      <JournalLayout
        content={
          <>
            <Head>
              <title>{post !== undefined ? `Colin Rabyniuk | ${post.data.title[0].text}` : 'Colin Rabyniuk | Post Loading'}</title>
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
  const post = await getPostBySlug('journal', query.id)

  return { post }
}

export default PostPage;