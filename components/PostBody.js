import React, { useEffect } from 'react';
import { RichText } from 'prismic-reactjs';
import Prism from 'prismjs'
import Codeblock from './Codeblock'
// import Prism from '../api/prism'
// import './prism.css';

const PostBody = (props) => {
  const { title, published, body } = props.data
  useEffect(() => {
    setTimeout(() => Prism.highlightAll(), 0)
  } , [])
  const propsWithUniqueKey = (props, key) => Object.assign(props || {}, { key })

  const htmlSerializer = (type, element, content, children, key) => {
    switch(element.type) {
      case 'preformatted': 
        props = { 
          className: element.label || 'language-*',
          content: element.text
        }
        return <Codeblock class={props.className} content={props.content} />

      case 'heading1':
        props = { 
          className: 'cr-post__title', 
          styles: {
            lineHeight: '1.2',
            marginBottom: '.75rem',
          }
        }
        return React.createElement('h1',
          propsWithUniqueKey(props, key), 
          children);

      default:
        return null
    }
  };

  return ( 
    <div className="cr-post">
      {
        props && (
          <>
            {<RichText key="title" render={title} htmlSerializer={htmlSerializer} /> }
            <span className="cr-post__meta">{ published }</span>
            <div className="cr-post__body">
              { <RichText key="body" render={body} htmlSerializer={htmlSerializer} /> }
            </div>
          </>
        )
      }
    <style jsx>{`
      .cr-post { min-height: 500px }

      .cr-post__meta {
        font-family: var(--metaFamily); 
        font-size: .75rem;
        margin: 0;
      }
    `}</style>
    </div>
  )
}

export default PostBody
