import React, {Component} from "react";

class Login extends Component {
    state = {
        isLoggedIn: false
    }

    generateLogin = () => {
        return <button onClick={this.handleClick}>Login</button>
    }

    generateLogout = () => {
        return <button onClick={this.handleClick}>Logout</button>
    }

    handleClick = () => {
        this.setState({
            isLoggedIn: !this.state.isLoggedIn
        })
    }


    render() {
        const {isLoggedIn} = this.state

        let button;

        if(!isLoggedIn) {
            button = this.generateLogin()
        } else {
            button = this.generateLogout()
        }

        return(
            button
        )
    }
}

export default Login