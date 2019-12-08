import React, { useEffect } from 'react'
import Prism from 'prismjs'

const Codeblock = (props) => {

  useEffect(() => {setTimeout(() => Prism.highlightAll())}, [])

  return (
    <pre>
      <code className={props.class}>
        {props.content}
      </code>
      <style jsx>{`
        pre,
        code {
          font-size: .75rem;
          tab-size: 2
        }

        pre {
          background-color: #2d2d2d;
          padding: 1.3rem;
          margin: 1.5rem 0;
        }
      `}</style>

    </pre>
  )

}

export default Codeblock