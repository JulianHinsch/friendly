import React, { Component } from 'react';

/**
 * validate server side
 * 
 * 
 * first name
 * last name
 * email
 * phone
 * company (optional)
 * birthday
 * bio
 * password
 * 
 */


class Signup extends Component {
    
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
            <div/>
        )
    }
}

export default Signup;