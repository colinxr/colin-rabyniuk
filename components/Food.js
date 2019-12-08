import React, { useState, useEffect } from 'react';
import Prismic from 'prismic-javascript';
import Post from './Post';

const Food = (props) => {
  const [posts, setPosts] = useState();
  const [page, setPage] = useState(1);

  const apiEndpoint = process.env.REACT_APP_API

  // useEffect(() => { fetchPosts() }, [])

  const fetchPosts = () => {
    Prismic.getApi(apiEndpoint)
      .then(api => api.query(
        Prismic.Predicates.at('document.type', 'recipe'),
        { pageSize: 10, page: page }
      ))
      .then(resp => { setPosts(resp.results) });
  }

  return (
    <div className="block">
      <div className="wrapper">
        <h3>Yumm</h3>
        {
          posts !== undefined &&
          posts.map((post, i) => <Post key={i} post={post}></Post>)
        }
      </div>
    </div>
  )
}

export default Food;