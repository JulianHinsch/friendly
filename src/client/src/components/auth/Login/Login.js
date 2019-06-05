import React, { Component } from 'react';
import styles from '../AuthForm.module.scss';

class Login extends Component {

    state = {
        email: '',
        password: '',
        canSubmit: false,
        submitErrMsg: 'Something is wrong',
        hideSubmitErrMsg: false,
    }

    handleSubmit = (event) => {
        event.preventDefault();
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value}, () => {
            this.validateField(event.target.name);
        });
    }

    render() {
        return (
            <main className={styles.auth_form}>
                <h1>Log In</h1>
                <form>
                    <div>
                        <label htmlFor='email'>Email</label>
                        <input name='email' type='text' required/>
                    </div>
                    <div>
                        <label htmlFor='password' required>Password</label>
                        <input name='password' type='password'/>
                    </div>
                    <button type='submit' disabled={!this.state.canSubmit}>Log In</button>
                </form>
                {this.state.submitErrMsg && (
                    <div className={styles.submit_err_msg}>
                        {this.state.submitErrMsg}
                        <img 
                            src={require('../../../assets/x.svg')} 
                            alt='close' 
                            onClick={()=>this.setState({hideSubmitErrMsg: true})}/>
                    </div>
                )}
            </main>
        );
    }
}

export default Login;