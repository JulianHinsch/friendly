import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './CommentForm.module.scss';

import Avatar from '../../misc/Avatar/Avatar';

class CommentForm extends Component {

    static propTypes = {
        createComment: PropTypes.func.isRequired,
    }

    state = {
        userInput: '',
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.createComment(this.state.userInput);
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
                <textarea 
                    type='text' 
                    name='comment'
                    rows={4}
                    maxLength={1120}
                    onChange={this.handleChange}
                    placeholder='Write a comment...'/>
            </form>
        )
    }
}

export default CommentForm;