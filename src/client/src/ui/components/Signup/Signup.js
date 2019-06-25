import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as validators from '../../../utils/validators';

import styles from './Signup.module.scss';

class Signup extends Component {

    static propTypes = {
        signUp: PropTypes.func.isRequired,
        setAuth: PropTypes.func.isRequired,
        message: PropTypes.string,
    }

    componentWillMount() {
        document.title='Friendly | Sign Up';
        this.props.setAuth({ message: null });        
    }
    
    state = {
        firstName: '',
        firstNameErrMsg: '',
        lastName: '',
        lastNameErrMsg: '',
        email: '',
        emailErrMsg: '',
        password: '',
        passwordErrMsg: '',
        canSubmit: false,
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { firstName, lastName, email, password } = this.state;
        this.props.signUp({
            name: `${firstName} ${lastName}`,
            email,
            password
        });
    }

    handleChange = (event) => {
        const field = event.target.name;
        const value = event.target.value;
        this.setState({
            [field]: value,
            [`${field}ErrMsg`]: this.getErrMsg(field, value),
        }, () => {  
            this.setState({ canSubmit: this.validateForm() });
        });
    }

    getErrMsg = (field, userInput) => {
        const validatorMap = {
            email: validators.validateEmail,
            firstName: validators.validateName,
            lastName: validators.validateName,
            password: validators.validatePassword,
        }
        const validator = validatorMap[field];
        if(validator) {
            return validator(userInput);
        }
        return '';
    }

    validateForm = () => {
        return Object.keys(this.state).every(key => {
            //check all error messages are empty and all fields are not empty
            return key.includes('ErrMsg') ? this.state[key] === '' : this.state[key] !== '';
        })
    }

    render() {
        return (
            <main className={styles.signup_form}>
                <h1>Sign Up</h1>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor='firstName'>First Name</label>
                        <input name='firstName' type='text' required onChange={this.handleChange}/>
                        <span className={styles.validation_err_msg}>
                            {this.state.firstNameErrMsg}
                        </span>
                    </div>
                    <div>
                        <label htmlFor='lastName'>Last Name</label>
                        <input name='lastName' type='text' required onChange={this.handleChange}/>
                        <span className={styles.validation_err_msg}>
                            {this.state.lastNameErrMsg}
                        </span>
                    </div>
                    <div>
                        <label htmlFor='email'>Email</label>
                        <input name='email' type='email' required onChange={this.handleChange}/>
                        <span className={styles.validation_err_msg}>
                            {this.state.emailErrMsg}
                        </span>
                    </div>
                    <div>
                        <label htmlFor='password'>Password</label>
                        <input name='password' type='password' required onChange={this.handleChange}/>
                        <span className={styles.validation_err_msg}>
                            {this.state.passwordErrMsg}
                        </span>
                    </div>
                    <button type='submit' disabled={!this.state.canSubmit}>Sign Up</button>
                </form>
                {this.props.message && (
                    <div className={styles.message}>
                        {this.props.message}
                    </div>
                )}
            </main>
        )
    }
}

export default Signup;