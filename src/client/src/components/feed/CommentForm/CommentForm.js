import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import styles from './CommentForm.module.scss';

import Avatar from '../../misc/Avatar/Avatar';

class CommentForm extends Component {

    state = {
        userInput: '',
    }

    handleSubmit = (event) => {
        event.preventDefault();
    }

    handleChange = (event) => {
        this.setState({userInput: event.target.value});
    }

    render() {
        return (
            <form
                className={styles.comment_form}
                onSubmit={this.handleSubmit}>
                <Avatar id={1}/>
                <input 
                    type='text' 
                    name='comment' 
                    onChange={this.handleChange}
                    placeholder='Write a comment...'/>
            </form>
        )
    }
}

// CommentForm.propTypes = {

// }

export default CommentForm;