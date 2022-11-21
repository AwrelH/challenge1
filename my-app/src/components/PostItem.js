import React from 'react'
import css from './css/PostItem.module.css'

function PostItem(props) {
    const savedPosts = props.savedPosts
    
  return (
    props.savedPosts.map(post => {
        return <div className={css.SearchItem} key={post.title}>
            <h2>{post.title}</h2>
            <p>{post.name}</p>
            <img className={css.img} src={post.image} alt={post.image.alt} />
            <p>{post.description}</p>
            <hr />
            </div>
     })
  )
}

export default PostItem