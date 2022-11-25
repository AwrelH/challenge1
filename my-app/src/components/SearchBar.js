import React, { Component } from 'react'

export class SearchBar extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         //
      }
    }
  render() {
    return (
      <div>
        <h1>Name Search</h1>
        <form>
            <input type='text' placeholder='Search Names'/>
        </form>
        <div>We will render names here</div>
      </div>
    )
  }
}

export default SearchBar