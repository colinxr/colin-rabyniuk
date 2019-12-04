import React, {useState, useEffect} from 'react';
import Prismic from 'prismic-javascript';
import Post from '../../components/Post/Post';
import './Blog.scss';

function Blog() {
  const [posts, setPosts] = useState();
  const [page, setPage] = useState(1);

  const apiEndpoint = process.env.REACT_APP_API

  useEffect(() => { fetchPosts() }, [])

  const fetchPosts = () => {
    Prismic.getApi(apiEndpoint)
      .then(api => api.query(
        Prismic.Predicates.at('document.type', 'post'),
        { pageSize: 10, page: page }
      ))
      .then(resp => { setPosts(resp.results) });
  }

  return (
    <main className="block" role="main">
      <div className="block__content">
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
    </main>
  )
}

export default Blog;