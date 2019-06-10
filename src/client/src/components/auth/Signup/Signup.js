import React, { Component } from 'react';
import PropTypes from 'prop-types';
import validator from '../../../utils/validator';

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
    }

    //this is terrible

    checkForm = () => {
        const { firstNameErrMsg, lastNameErrMsg, emailErrMsg, phoneErrMsg, passwordErrMsg } = this.state;
        const { firstName, lastName, email, phone, password } = this.state;        
        return ([ firstName, lastName, email, phone, password ].every(val => val !== '') 
            && 
        [ firstNameErrMsg, lastNameErrMsg, emailErrMsg, phoneErrMsg, passwordErrMsg ].every(val => val === ''));
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value}, () => {
            this.setState({ canSubmit: this.checkForm() });
        });
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
                        <label htmlFor='phone'>Phone</label>
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