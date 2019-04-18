import React, { Component } from 'react';

//server side validation
//username
//password

class Login extends Component {

    state = {

    }

    handleSubmit = (event) => {
        event.preventDefault();
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    render() {
        return (
            <main>
                <form>
                    <input name='username' type='text'/>
                    <label for='username'>Username</label>
                    <input name='password' type='password'/>
                    <label for='password'>Password</label>
                    <button type='submit'>Log In</button>
                </form>
            </main>
        );
    }
}

export default Login;