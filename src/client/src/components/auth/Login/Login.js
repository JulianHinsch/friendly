import React, { Component } from 'react';

//server side validation
//username
//password

class Login extends Component {

    state = {

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