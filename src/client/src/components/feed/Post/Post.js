import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Avatar from '../../misc/Avatar/Avatar';
import CommentList from '../CommentList/CommentList';
import CommentForm from '../CommentForm/CommentFormContainer';

import styles from './Post.module.scss';

const Post = ({ id, user, createdAt, updatedAt, text, comments, reactions }) => (
    <article className={styles.post}>
        <header className={styles.post_header}>
            <Avatar/>
            <Link to={`/profile/${user.id}`}>{user.name}</Link>
            <span className={styles.time}>{createdAt}</span>
        </header>
        <div className={styles.post_body}>
            {text}
        </div>
        {comments.length > 0 && (
            <CommentList comments={comments}/>    
        )}
        <CommentForm/>
    </article>
);

Post.propTypes = {
    id: PropTypes.number.isRequired,
    user: PropTypes.object.isRequired,
    createdAt: PropTypes.string.isRequired,
    updatedAt: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    comments: PropTypes.array.isRequired,
    reactions: PropTypes.array.isRequired,
}

export default Post;