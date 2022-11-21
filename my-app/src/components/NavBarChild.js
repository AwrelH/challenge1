import React from "react"

function NavBarChild(props) {
    return (
      
           props.isLoggedIn ? (
                   <button onClick={props.handleClick}>Login</button>
                ): (
                    <form>
                    <label for="username">username:</label>
                        <input type="text" id="name" name="name" />

                        <label for="password">password:</label>
                        <input type="password" id="password" name="password" />

                        <button onClick={props.handleClick}>Submit</button>
                    </form>
                )
       
    )
  }
  
  export default NavBarChild