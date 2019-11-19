import React, {useState, useEffect} from 'react';
import Prismic from 'prismic-javascript';
import Post from '../../components/Post/Post';

function Blog() {
  const [posts, setPosts] = useState();

  const apiEndpoint = process.env.REACT_APP_API

  useEffect(() => {
    Prismic.getApi(apiEndpoint)
      .then(api => api.query('')) 
      .then(resp => {
        setPosts(resp.results);
      });
  }, [])

  return (
    <main className="block" role="main">
      <div className="block__content">
        <h3>Journal</h3>
        {
          posts !== undefined && 
          posts.map((post, i) => <Post key={i} post={post}></Post> )
        }
      </div>
    </main>
  )
}

export default Blog;