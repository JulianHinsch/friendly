import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import displayDate from '../../../utils/displayDate';

import Avatar from '../Avatar/Avatar';
import Reactions from '../Reactions/ReactionsContainer';
import CommentList from '../CommentList/CommentList';
import CommentForm from '../CommentForm/CommentFormContainer';

import styles from './Post.module.scss';

const Post = ({
    auth,
    id,
    userId,
    user,
    updatedAt,
    text,
    comments,
    reactions,
    deletePost
}) => {
    const { emailHash, name } = user;

    return (
        <article className={styles.post}>
            <header className={styles.post_header}>
                <Avatar id={userId} emailHash={emailHash} diameter={40}/>
                <div>
                    <Link className={styles.name} to={`/profile/${userId}`}>{name}</Link>
                    <span className={styles.time}>{displayDate(updatedAt)}</span>
                </div>
                {auth.id === userId && (
                    <img
                        src={require('../../../assets/x_grey.svg')}
                        className={styles.delete}
                        alt='Delete'
                        onClick={() => deletePost(id)}/>
                )}
            </header>
            <p className={styles.post_body} dangerouslySetInnerHTML={{__html: text}}/>
            <Reactions postId={id} reactions={reactions}/>
            {comments.length > 0 && (
                <CommentList comments={comments}/>
            )}
            <CommentForm/>
        </article>
    )
}

Post.propTypes = {
    auth: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
    id: PropTypes.number.isRequired,
    userId: PropTypes.number.isRequired,
    createdAt: PropTypes.string.isRequired,
    updatedAt: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    comments: PropTypes.arrayOf(PropTypes.object).isRequired,
    reactions: PropTypes.arrayOf(PropTypes.object).isRequired,
    deletePost: PropTypes.func.isRequired,
}

export default Post;