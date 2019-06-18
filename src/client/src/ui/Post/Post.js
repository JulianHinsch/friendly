import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import displayDate from '../../utils/displayDate';

import Avatar from '../Avatar/Avatar';
import Reactions from '../Reactions/ReactionsContainer';
import CommentList from '../CommentList/CommentList';
import CommentForm from '../CommentForm/CommentFormContainer';

import styles from './Post.module.scss';

const Post = ({ id, userId, user, createdAt, updatedAt, text, comments, reactions }) => {
    const { email, name } = user;
    return (
        <article className={styles.post}>
            <header className={styles.post_header}>
                <Avatar id={userId} email={email} diameter={40}/>
                <div>
                    <Link className={styles.name} to={`/profile/${userId}`}>{name}</Link>
                    <span className={styles.time}>{displayDate(updatedAt)}</span>
                </div>
            </header>
            <p className={styles.post_body} dangerouslySetInnerHTML={{__html: text}}/>
            <Reactions reactions={reactions}/>
            {comments.length > 0 && (
                <CommentList comments={comments}/>    
            )}
            <CommentForm/>
        </article>
    )
}

Post.propTypes = {
    id: PropTypes.number.isRequired,
    userId: PropTypes.number.isRequired,
    user: PropTypes.shape({
        id: PropTypes.number.isRequired,
        email: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    }).isRequired,
    createdAt: PropTypes.string,
    updatedAt: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    comments: PropTypes.array.isRequired,
    reactions: PropTypes.array.isRequired,
}

export default Post;