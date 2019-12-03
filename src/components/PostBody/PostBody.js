import React from 'react';
import { Link, RichText, Date, linkResolver } from 'prismic-reactjs';
import PrismicDOM from 'prismic-dom';
import Prism from 'prismjs';
import './prism.css';

const PostBody = (props) => {
  const { title, published, body, excerpt } = props.data

  const propsWithUniqueKey = (props, key) => {
    return Object.assign(props || {}, { key });
  };


  const htmlSerializer = (type, element, content, children, key) => {
    var props = {};

    if (element.type === 'preformatted') {
      props = { className: 'language-*' }
      return React.createElement('pre', propsWithUniqueKey(props, key), children);
    }

  };

  return ( 
    <div className="cr-post">
      {
        props && (
          <>
            { RichText.render(title) }
            <span className="cr-post-item__meta">{published}</span>
            <div className="cr-post__body">
              {
                <RichText render={body} htmlSerializer={htmlSerializer} />
              }
            </div>
          </>
        )
      }
    </div>
  )
}

export default PostBody
