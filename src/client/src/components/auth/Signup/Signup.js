import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as validators from '../../../utils/validators';

import styles from '../AuthForm.module.scss';

class Signup extends Component {

    static propTypes = {
        signUp: PropTypes.func.isRequired,
        message: PropTypes.string,
    }

    componentWillMount() {
        document.title='Friendly | Sign Up';
    }
    
    state = {
        firstName: '',
        firstNameErrMsg: '',
        lastName: '',
        lastNameErrMsg: '',
        email: '',
        emailErrMsg: '',
        phone: '',
        phoneErrMsg: '',
        password: '',
        passwordErrMsg: '',
        canSubmit: false,
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { firstName, lastName, email, phone, password } = this.state;
        this.props.signUp({
            name: this.state.firstName + this.state.lastName,
            email,
            phone,
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
            phone: validators.validatePhone,
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
            <main className={styles.auth_form}>
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
                        <label htmlFor='phone'>Phone (###-###-####)</label>
                        <input name='phone' type='tel' required onChange={this.handleChange}/>
                        <span className={styles.validation_err_msg}>
                            {this.state.phoneErrMsg}
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
                {!this.state.hideSubmitErrMsg && (
                    <div className={styles.submit_err_msg}>
                        {this.state.submitErrMsg}
                        <img 
                            src={require('../../../assets/x.svg')} 
                            alt='close' 
                            onClick={()=>this.setState({hideSubmitErrMsg: true})}/>
                    </div>
                )}
            </main>
        )
    }
}

export default Signup;