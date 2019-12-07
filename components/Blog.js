import React, {useState, useEffect} from 'react';
import Prismic from 'prismic-javascript';
import Post from './Post.js';

function Blog() {
  const [posts, setPosts] = useState();
  const [page, setPage] = useState(1);

  // const apiEndpoint = process.env.REACT_APP_API
  const endpoint = 'https://colin-rabyniuk.cdn.prismic.io/api/v2'

  useEffect(() => { fetchPosts() }, [])

  const fetchPosts = () => {
    Prismic.getApi(endpoint)
      .then(api => api.query(
        Prismic.Predicates.at('document.type', 'post'),
        { pageSize: 10, page: page }
      ))
      .then(resp => { 
        console.log(resp)
        setPosts(resp.results) 
      });
  }

  return (
    <main className="block" role="main">
      <div className="wrapper">
        <h3>Journal</h3>
        {
          posts !== undefined && 
            posts.map((post, i) => <Post key={i} post={post}></Post> )
        }
        {
          page > 1 &&
            <button onCLick={() => { setPage(page - 1)}}>
              Previous Page
            </button>
        }
        <button onClick={() => { setPage(page + 1) }}>
          Next Page
        </button>
      </div>
      <style jsx>{`
        h3 { color: #4a4a4a; }
      `}</style>
    </main>
  )
}

export default Blog;