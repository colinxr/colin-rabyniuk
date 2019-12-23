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
    const resp = await getPosts(props.contentType, page)
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
        { !posts && <Loading /> }
        {
          posts && <h3>Journal</h3>
        }
        { 
          posts && 
            posts.map((post, i) => <Post key={i} post={post} contentType={props.contentType}></Post> ) 
        }
        {
          posts && showPagination && (
            <button className="cr-btn cr-btn--secondary" onClick={() => { setPage(page + 1) }}>
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
      `}</style>
    </>
  )
}

export default Blog;