import React from 'react';
import { Link } from 'react-router-dom'
import './Post.scss';

function Post(props) {
  const { uid } = props.post;
  const { title, published, excerpt } = props.post.data

  // format published into [Mon, Day, Year]
  // add excerpt
  const text = excerpt[0] ? excerpt[0]['text'] : null

  return (
    <article className="cr-post-item">
      <h2><Link to={`/posts/${uid}`}>{ title[0].text }</Link></h2>
      <span className="cr-post-item__meta">{ published }</span>
        { text && <p>{ text }</p> }
    </article>
  )
}

export default Post;