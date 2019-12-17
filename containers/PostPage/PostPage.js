import React, { useState, useEffect } from 'react';
import Prismic from 'prismic-javascript';
import Layout from '../components/Layout';
import Loading from '../components/Loading';
import PostBody from '../components/PostBody/PostBody';

function PostPage(props) {
  const { params } = props.match
  const [post, setPost] = useState(null);
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
      <Layout
        content={
          <div className="PostPage">
            <div className="block">
              <div className="wrapper">
                {
                  !post &&
                    <Loading />
                }
                {
                  post &&
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