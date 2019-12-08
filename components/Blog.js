import React, {useState, useEffect} from 'react';
import Post from './Post.js';
import { getPosts } from '../api/posts.js';

const Blog = (props) => {
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState([])

  useEffect(() => {
    (async function fetchPosts(page) {
      const resp = await getPosts('post', page)
      setPosts(resp)
    })()
  }, [])

  return (
    <main role="main">
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
        {/* <button onClick={() => { setPage(page + 1) }}>
          Next Page
        </button> */}
      </div>
      <style jsx>{`
        h3 { color: #4a4a4a; }
      `}</style>
    </main>
  )
}

export default Blog;