import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './PostForm.module.scss';
import Avatar from '../../misc/Avatar/Avatar';

class PostForm extends Component {

    static propTypes = {
        createPost: PropTypes.func.isRequired,
    }

    state = {
        userInput: '',
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.createPost({
            userId: this.props.auth.userId,
            text: this.state.userInput,
        });
    }

    handleChange = (event) => {
        this.setState({userInput: event.target.value});
    }

    render() {
        const { auth } = this.props;
        return (
            <form className={styles.post_form} onSubmit={this.handleSubmit}>
                <label htmlFor='post'>Create Post</label>
                <Avatar id={auth.id} email={auth.email}/>
                <input
                    name='post'
                    id='post'
                    placeholder="What's on your mind?"
                    onChange={this.handleChange}
                    autoFocus/>
            </form>
        )
    }
}

export default PostForm;