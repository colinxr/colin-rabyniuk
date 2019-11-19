import React from 'react';
import Header from '../../components/Header/Header';
import './PostPage.scss';

function PostPage(props) {
  const { params } = props.match
  
  const apiEndpoint = process.env.REACT_APP_API

  useEffect(() => {
    Prismic.getApi(apiEndpoint)
      .then(api => api.query(''))
      .then(resp => {
        setPosts(resp.results);
      });
  }, [])

  return (
    <div className="PostPage">
      <Header isPost="true"></Header>

      <div className="block projects">
        <h2>Post</h2>
      </div>
    </div>
  );
}

export default PostPage;