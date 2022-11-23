import React, { Component } from 'react'
import {savedPosts} from '../posts.json'
import css from './css/Content.module.css'
import Loader from './Loader'
import PostItem from './PostItem'

 class Content extends React.Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoaded: false,
      }
    }
    getLoaded() {
      console.log('getData() called')
      setTimeout(() => {
          console.log('data fetched')
          this.setState({
              isLoaded:true
          })
      }, 2000)
    }

    componentDidMount() {
      console.log('getLoaded mount')
      this.getLoaded()
    }


  render() {
    return (
      <div className={css.Content}>
        <div className={css.TitleBar}>
            <h1>My Photos</h1></div>

            <div className={css.SearchResults}>
            {
                        this.state.isLoaded ?
                        <PostItem savedPosts={savedPosts} />
                        : <Loader />
                    }
            
            </div>
        

      </div>
    )
  }
}

export default Content