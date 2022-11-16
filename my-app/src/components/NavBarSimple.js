import React from 'react';
import css from './css/NavBarSimple.module.css';


class NavBarSimple extends React.Component {

    constructor(props) {
        super();
        this.state = {
            message:'Hello guest!',
            text: 'Login'
        }

    }
    handleClick() {
        this.setState((prevState) => {
            console.log('prev', prevState)
            return {
                message: prevState.message === 'Hello guest!'? 'Welcome back, user!': 'Hello guest!',
                text: prevState.text === 'Login'? 'Logout': 'Login'
            }
        })
    }


    render() {
        return (
            <div className={css.NavBar}>
                <h1>My Gallery</h1>

                <span>{this.state.message}</span> <button onClick={()=> {this.handleClick()}}>{this.state.text}</button>
            </div>
        )
    }
}

export default NavBarSimple