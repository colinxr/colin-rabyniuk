import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import Prismic from 'prismic-javascript';
import Layout from '../../components/Layout';
import PostBody from '../../components/PostBody';

function PostPage(props) {
  const [post, setPost] = useState();
  // const [isLoading, setIsLoading] = useState(true);
  // const apiEndpoint = process.env.REACT_APP_API
  const endpoint = 'https://colin-rabyniuk.cdn.prismic.io/api/v2'
  useEffect(() => { fetchPost(post) }, [])

  const fetchPost = () => {
    Prismic.getApi(endpoint)
      .then(api => api.getByUID('post', props.id))
      .then(resp => {
        setPost(resp)
        // setIsLoading(false)
      })
  }

  return (
    <>
      <Layout
        content={
          <>
          <Head>
            <title>{ post !== undefined ? `Colin Rabyniuk | ${post.data.title[0].text}` : 'Colin Rabyniuk | Post Loading' }</title>
          </Head>
          <div className="PostPage">
            <div className="block">
              <div className="wrapper">
                {
                  post !== undefined &&
                  <PostBody data={post.data} />
                }
              </div>
            </div>
          </div>
          </>
        }
        isInsidePage={true}
      ></Layout>
    </>
  )
}
PostPage.getInitialProps = ({ query }) => {
  const { id } = query 

  return { id }
}

export default PostPage;