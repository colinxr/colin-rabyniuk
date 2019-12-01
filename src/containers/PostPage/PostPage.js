import React, { useState, useEffect } from 'react';
import Prismic from 'prismic-javascript';
import PrismicDOM from 'prismic-dom';
import Layout from '../../components/Layout'
import './PostPage.scss';

function PostPage(props) {
  const { params } = props.match
  const [post, setPost] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const apiEndpoint = process.env.REACT_APP_API

  useEffect(() => { fetchPost(post) }, [])  

  const fetchPost = () => {
    Prismic.getApi(apiEndpoint)
      .then(api => api.getByUID('post', params.slug))
      .then(resp => {
        setPost(resp)
        setIsLoading(false)
      })
  }

  const renderPost = () => {
    const { title, published, body } = post.data
    const bodyHTML = PrismicDOM.RichText.asHtml(body);

    return (
      <div className="cr-post">
        <h1>{title[0].text}</h1>
        <span className="cr-post-item__meta">{published}</span>
        <div className="cr-post__body">
          {bodyHTML}
        </div>
      </div>
    )
  }

  const content = (  
    <div className="PostPage">
      <div className="block">
        <div className="block__content">
        {
          post !== undefined && 
          renderPost()
        }
        </div>
      </div>
    </div>
  );

  return (
    <Layout
      content={content}
      isInsidePage={true}
    ></Layout>
  )
}

export default PostPage;