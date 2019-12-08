import React, { useEffect } from 'react'
import Prism from 'prismjs'
import styles from './prism'

const Codeblock = (props) => {

  useEffect(() => {setTimeout(() => Prism.highlightAll())}, [])

  return (
    <pre>
      <code className={props.class}>
        {props.content}
      </code>
      <style jsx>{`
        {styles}
      `}</style>
    </pre>
  )

}

export default Codeblock