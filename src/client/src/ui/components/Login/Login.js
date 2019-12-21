import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './Login.module.scss';

class Login extends Component {

    static propTypes = {
        logIn: PropTypes.func.isRequired,
        setAuth: PropTypes.func.isRequired,
        message: PropTypes.string,
    }

    componentWillMount() {
        document.title='Friendly | Log In';
        this.props.setAuth({ message: null });
    }

    state = {
        email: '',
        password: '',
        canSubmit: false,
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { email, password } = this.state;
        const get = (obj, path) => path.reduce((xs, x) => (xs && xs[x]) ? xs[x] : null, obj);
        const redirectTo = get(this.props, ['location','state','from','pathname']);
        this.props.logIn({ email, password }, redirectTo);
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value }, () => {
            const { email, password } = this.state;
            this.setState({ canSubmit: [ email, password ].every(val => val !== '') })
        });
    }

    render() {
        return (
            <main className={styles.login_form}>
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