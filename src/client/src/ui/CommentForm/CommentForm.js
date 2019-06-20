import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './CommentForm.module.scss';

import Avatar from '../Avatar/Avatar';

class CommentForm extends Component {

    static propTypes = {
        createComment: PropTypes.func.isRequired,
        auth: PropTypes.shape({
            id: PropTypes.number.isRequired,
            emailHash: PropTypes.string.isRequired,
        }).isRequired,
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
        const { auth } = this.props;
        const { id, emailHash } = auth;
        return (
            <form
                className={styles.comment_form}
                onSubmit={this.handleSubmit}>
                <Avatar id={id} emailHash={emailHash}/>
                <input 
                    type='text' 
                    name='comment'
                    maxLength={1120}
                    onChange={this.handleChange}
                    placeholder='Write a comment...'/>
            </form>
        )
    }
}

export default CommentForm;