import React, { useState, useEffect } from 'react';
import { Helmet } from "react-helmet";
import Prismic from 'prismic-javascript';
import Layout from '../../components/Layout';
import PostBody from '../../components/PostBody/PostBody';

function PostPage(props) {
  const { params } = props.match
  const [post, setPost] = useState();
  // const [isLoading, setIsLoading] = useState(true);
  const apiEndpoint = process.env.REACT_APP_API

  useEffect(() => { fetchPost(post) }, [])  

  const fetchPost = () => {
    Prismic.getApi(apiEndpoint)
      .then(api => api.getByUID('post', params.slug))
      .then(resp => {
        setPost(resp)
        // setIsLoading(false)
      })
  }

  return (
    <>
      <Helmet>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Colin Rabyniuk | </title>
        <link rel="canonical" href={`http://www.colinrabyniuk.com/${params.slug}`} />
      </Helmet>
      <Layout
        content={
          <div className="PostPage">
            <div className="block">
              <div className="block__content">
                {
                  post !== undefined &&
                   <PostBody data={post.data} />
                }
              </div>
            </div>
          </div>
        }
        isInsidePage={true}
      ></Layout>
    </>
  )
}

export default PostPage;