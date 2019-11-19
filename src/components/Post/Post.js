import React from 'react';
import { Link } from 'react-router-dom'

function Post(props) {
  console.log(props.post)
  const { uid } = props.post;
  const { title, published, body  } = props.post.data
  return (
    <article>
      <h2><Link to={`/posts/${uid}`}>{ title[0].text }</Link></h2>
      <p>{ published }</p>

    </article>
  )
}

export default Post;