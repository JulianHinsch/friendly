import React, { Component } from 'react';

import styles from '../AuthForm.module.scss';

class Signup extends Component {
    
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
        hideSubmitErrMsg: true,
        submitErrMsg: '',
    }

    handleSubmit = (event) => {
        event.preventDefault();
    }

    validateField = () => {

    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value}, () => {
            this.validateField(event.target.name, event.target.value);
        });
    }
    
    render() {
        return (
            <main className={styles.auth_form}>
                <h1>Sign Up</h1>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor='firstname'>First Name</label>
                        <input name='firstname' type='text' required onChange={this.handleChange}/>
                        <span className={styles.validation_err_msg}>
                            {this.state.firstNameErrMsg}
                        </span>
                    </div>
                    <div>
                        <label htmlFor='lastname'>Last Name</label>
                        <input name='lastname' type='text' required onChange={this.handleChange}/>
                        <span className={styles.validation_err_msg}>
                            {this.state.lastNameErrMsg}
                        </span>
                    </div>
                    <div>
                        <label htmlFor='email'>Email</label>
                        <input name='email' type='text' required onChange={this.handleChange}/>
                        <span className={styles.validation_err_msg}>
                            {this.state.emailErrMsg}
                        </span>
                    </div>
                    <div>
                        <label htmlFor='phone'>Phone</label>
                        <input name='phone' type='text' required onChange={this.handleChange}/>
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