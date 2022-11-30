import React from 'react'
import css from './css/PostItem.module.css'

function PostItemAPI(props) {
    const savedPosts = props.savedPosts
    
  return (
    props.savedPosts.map(post => {
      const {id, type, user, webformatURL, tags} = post
        return <div className={css.SearchItem} key={id}>
            <h2>{type}</h2>
            <p>{user}</p>
            <img className={css.img} src={webformatURL} alt={'random'} />
            <span className={css.tags}>{tags}</span>
            <hr />
            </div>
     })
  )
}

export default PostItemAPI