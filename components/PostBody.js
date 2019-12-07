import React, {useEffect, useState, setState} from 'react';
import { RichText } from 'prismic-reactjs';
import './prism.css';

const PostBody = (props) => {
  const { title, published, body } = props.data

  const propsWithUniqueKey = (props, key) => Object.assign(props || {}, { key })

  const htmlSerializer = (type, element, content, children, key) => {
    var props = {};

    if (element.type === 'preformatted') {
      props = { className: 'language-*' }
      return React.createElement('pre', propsWithUniqueKey(props, key), children);
    }

    switch(element.type) {
      case 'preformatted': 
        props = { className: 'language-*' }
        return React.createElement('pre', propsWithUniqueKey(props, key), children);

      // case 'heading1':
      //   props = { className: 'ease' }
      //   return React.createElement('h1', propsWithUniqueKey(props, key), children);
    }
  };


  return ( 
    <div className="cr-post">
      {
        props && (
          <>
            { <RichText render={title} htmlSerializer={htmlSerializer} /> }
            <span className="cr-post-item__meta ">{ published }</span>
            <div className="cr-post__body">
              { <RichText render={body} htmlSerializer={htmlSerializer} /> }
            </div>
          </>
        )
      }
    <style jsx>{`
      .cr-post { min-height: 500px }

      h1 {
        line-height: 1.2;
        margin-bottom: .75rem;
      }

      // .loading {
      //   background-color: #eaeaea;
      //   height: 1.5rem;
      //   padding-top: 1.5rem;

      //   & + .loading { margin-top: .75rem; }

      //   &--small { height: .5rem; }
      // }
    `}</style>
    </div>
  )
}

export default PostBody
