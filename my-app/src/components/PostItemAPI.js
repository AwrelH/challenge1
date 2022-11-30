import React from 'react'
import css from './css/PostItem.module.css'

function PostItemAPI(props) {
    const savedPosts = props.savedPosts
    
  return (
    props.savedPosts.map(post => {
      const {id, user, webformatURL, tags} = post
      
        return <div className={css.SearchItem} key={id}>
            
            
            <img className={css.img} src={webformatURL} alt={'random'} />
            <p>By: {user}</p>
            <span className={css.tags}>{tags} </span>
            
            <hr />
            </div>
     } 

     )
  )
}

export default PostItemAPI