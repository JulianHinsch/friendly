import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './PostForm.module.scss';
import Avatar from '../Avatar/Avatar';

class PostForm extends Component {

    static propTypes = {
        auth: PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            email: PropTypes.string.isRequired,
            isAuthenticated: PropTypes.bool.isRequired,
            loading: PropTypes.bool.isRequired,            
            message: PropTypes.string,
        }).isRequired,
        createPost: PropTypes.func.isRequired,
    }

    state = {
        userInput: '',
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.createPost({
            userId: this.props.auth.id,
            text: this.state.userInput,
        });
    }

    handleChange = (event) => {
        this.setState({userInput: event.target.value});
    }

    render() {
        const { auth } = this.props;
        const { id, email, name } = auth;
        return (
            <form className={styles.post_form} onSubmit={this.handleSubmit}>
                <label htmlFor='post'>Create Post</label>
                <div>
                    <Avatar id={id} email={email} diameter={50}/>
                    <input
                        name='post'
                        id='post'
                        placeholder={`What's on your mind, ${name.split(' ')[0]}?`}
                        maxLength={1120}
                        onChange={this.handleChange}
                        autoFocus/>
                </div>
            </form>
        )
    }
}

export default PostForm;