import React, { Component } from 'react';
import styles from './PostForm.module.scss';
import Avatar from '../../misc/Avatar/Avatar';

class PostForm extends Component {

    state = {
        userInput: '',
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.createPost({
            
        });
    }

    handleChange = (event) => {
        this.setState({userInput: event.target.value});
    }

    render() {
        return (
            <form className={styles.post_form} onSubmit={this.handleSubmit}>
                <label htmlFor='post'>Create Post</label>
                <Avatar/>
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