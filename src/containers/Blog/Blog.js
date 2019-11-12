import React, {useState, useEffect} from 'react';
import Prismic from 'prismic-javascript';
import Post from '../../components/Post/Post';

function Blog() {
  const [posts, setPosts] = useState();

  const apiEndpoint = 'https://colin-rabyniuk.cdn.prismic.io/api/v2'

  console.log(apiEndpoint)

  useEffect(() => {
    Prismic.getApi(apiEndpoint)
      .then(api => api.query('')) 
      .then(resp => console.log(resp));
  }, [])

  return (
    <main className="block" role="main">
      <div className="block__content">
        {
          // map over items
        }
      </div>
    </main>
  )
}

export default Blog;