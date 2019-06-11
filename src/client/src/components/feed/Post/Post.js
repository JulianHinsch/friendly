import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Post.module.scss';
import Avatar from '../../misc/Avatar/Avatar';
import CommentList from '../CommentList/CommentList';
import CommentForm from '../CommentForm/CommentFormContainer';

const Post = ({ author, authorId, time, text, comments }) => (
    <article className={styles.post}>
        <header className={styles.post_header}>
            <Avatar/>
            <Link to={`/profile?id=${authorId}`}>{author}</Link>
            <span className={styles.time}>{time}</span>
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

export default Post;