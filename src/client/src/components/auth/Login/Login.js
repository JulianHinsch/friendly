import React, { Component } from 'react';
import styles from '../AuthForm.module.scss';
import PropTypes from 'prop-types';

class Login extends Component {

    static propTypes = {
        logIn: PropTypes.func.isRequired,
        message: PropTypes.string,
    }

    componentWillMount() {
        document.title='Friendly | Log In';
    }

    componentWillUnmount() {
        document.title='Friendly';
    }

    state = {
        email: '',
        password: '',
        canSubmit: false,
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { email, password } = this.state;
        this.props.logIn({ email, password });
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value}, () => {
            this.setState({canSubmit: this.state.email !== '' && this.state.password !== ''})
        });
    }

    render() {
        return (
            <main className={styles.auth_form}>
                <h1>Log In</h1>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor='email'>Email</label>
                        <input name='email' type='text' required onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label htmlFor='password' required>Password</label>
                        <input name='password' type='password' onChange={this.handleChange}/>
                    </div>
                    <button type='submit' disabled={!this.state.canSubmit}>Log In</button>
                </form>
                {this.props.message && (
                    <div className={styles.message}>
                        {this.props.message}
                    </div>
                )}
            </main>
        );
    }
}

export default Login;