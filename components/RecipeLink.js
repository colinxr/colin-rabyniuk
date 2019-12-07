import React from 'react';
import { Link } from 'react-router-dom'

function RecipeLink(props) {
  // const { uid } = props.post;
  // const { title, published, body, excerpt } = props.post.data

  // format published into [Mon, Day, Year]
  // add excerpt
  // const text = excerpt[0] ? excerpt[0]['text'] : null

  return (
    <Link to="">
      <article className="cr-recipe">
        <img src="" alt="" />
        <h3>Recipe Title</h3>
      </article>
    </Link>
  )
}

export default RecipeLink;