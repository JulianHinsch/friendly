import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

import styles from './CommentList.module.scss';

export default class CommentList extends Component {

    state = {
        expanded: false,
    }

    toggleComments = () => {

    }

    render() {
        const { comments } = this.props;
        return (
            <div className={classNames('comment-list', styles.comment_list)}>
                {comments.map(comment => (
                    <Comment/>
                ))}
                <CommentForm/>
            </div>
        )
    }
}