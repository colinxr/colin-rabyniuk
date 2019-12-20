import React, {useState, useEffect} from 'react';
import { getPosts } from '../api/posts';
import Post from './Post';
import Loading from './Loading'

const Blog = (props) => {
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState(null)
  const [showPagination, setShowPagination] = useState(true)

  useEffect(() => { fetchPosts(page) }, [page])

  const fetchPosts = async (page) => {
    const resp = await getPosts('post', page)
    const results = resp.results
    const newPosts = !posts ? results : [...posts, ...results]
    
    setPosts(newPosts)
    if (newPosts.length >= resp.total_results_size) {
      setShowPagination(false)
    }
  }

  return (
    <>
      <div className="wrapper">
        { !posts && <h4>You are what you think you are what you think you are what you think</h4> }
        {
          posts && <h3>Journal</h3>
        }
        { 
          posts && 
            posts.map((post, i) => <Post key={i} post={post}></Post> ) 
        }
        {
          posts && showPagination && (
            <button onClick={() => { setPage(page + 1) }}>
              Load More
            </button>
          )
        }
      </div>
      <style jsx>{`
        h3 { color: #666; }

        h4 { 
          font-weight: normal;
          color: #c1cdcd; 
        }

        button {
          background-color: #c1cdcd;;
          border: none;
          font-family: 'Apercu';
          color: #555;
          font-size: 1rem;
          font-style: italic;
          cursor: pointer;
          padding: 0;
          transition: .15s;
        }

        button:hover {
          background-color: #bbb;
        }

        button:focus{
          outline: 0;
          color: #4a4a4a;
          background-color: #a2a2a2;
        }
      `}</style>
    </>
  )
}

export default Blog;