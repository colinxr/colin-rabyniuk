import React from 'react';
import Link from 'next/link'

const Post = (props) => {
  const { uid } = props.post;
  const { title, published, excerpt } = props.post.data

  // format published into [Mon, Day, Year]
  // add excerpt
  const text = excerpt[0] ? excerpt[0]['text'] : null

  return (
    <article className="cr-post-item">
      <h2>
        <Link href={`/post/${uid}`} as={`/post/${uid}`}>
          <a>{title[0].text}</a>
        </Link>
      </h2>
      <span className="cr-post-item__meta">{ published }</span>
        { text && <p>{ text }</p> }

    <style jsx>{`
      .cr-post-item { border-radius: 10px; }

      .cr-post-item + .cr-post-item { margin-top: 2.25rem; }

      .cr-post-item__meta { 
        font-family: var(--metaFamily); 
        font-size: .75rem;
        margin: 0;
      }

      h2 { 
        margin-bottom: .5rem; 
        line-height: 1.2;
      }

      a {
        color: var(--body);
        text-decoration: underline;
        transition: 15s;
      }

      a:hover { color: #666 }

      a:visited { color: #333 }
    `}</style>
    </article>
  )
}

export default Post;