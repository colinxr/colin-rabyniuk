import React, { useState, useEffect } from 'react';
import { Helmet } from "react-helmet";
import Prismic from 'prismic-javascript';
import Prism from 'prismjs'
import { Link, RichText } from 'prismic-reactjs';
import Layout from '../../components/Layout'
import './PostPage.scss';
import './prism.css'

function PostPage(props) {
  const { params } = props.match
  const [post, setPost] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const apiEndpoint = process.env.REACT_APP_API

  useEffect(() => { fetchPost(post) }, [])  

  useEffect(() => {
    setTimeout(() => Prism.highlightAll(), 0)
  }, [])

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
    // const bodyHTML = PrismicDOM.RichText.asHtml(body);

    return (
      <div className="cr-post">
        { RichText.render(post.data.title) }
        <span className="cr-post-item__meta">{published}</span>
        <div className="cr-post__body">
          {
            RichText.render(post.data.body)
          }
        </div>
      </div>
    )
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
                  renderPost()
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