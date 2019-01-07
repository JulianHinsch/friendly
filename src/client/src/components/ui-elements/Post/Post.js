import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

import styles from './Post.module.scss';

const Post = ({ userid, name, date, text, likes, comments }) => {
    return (
        <div className={classNames('post', styles.post)}>
            <p>{name}</p>
            <p>{moment(date).fromNow()}</p>
            <p>{text}</p>
            <div>
                <p>Like</p>
                <p>Comment</p>
            </div>
            <LikeList likes={likes}/>
            <CommentList comments={comments}/>
        </div>
    )
}

Post.propTypes = {

}

export default Post;