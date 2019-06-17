import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './CommentForm.module.scss';

import Avatar from '../Avatar/Avatar';

class CommentForm extends Component {

    static propTypes = {
        createComment: PropTypes.func.isRequired,
        auth: PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            email: PropTypes.string.isRequired,
            isAuthenticated: PropTypes.bool.isRequired,
            loading: PropTypes.bool.isRequired,
            message: PropTypes.string,
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
        const { id, email } = auth;
        return (
            <form
                className={styles.comment_form}
                onSubmit={this.handleSubmit}>
                <Avatar id={id} email={email}/>
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