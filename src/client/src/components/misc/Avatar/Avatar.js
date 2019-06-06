import React from 'react';
import { Link } from 'react-router-dom';
import md5 from 'md5';
import styles from './Avatar.module.scss';

const Avatar = ({ id, email }) => {
    return <Link 
        style={email && {
            backgroundImage: `src: www.gravatar.com/avatar/${md5(email.toLowerCase())}`
        }}
        className={styles.avatar}
        to={`/profile?id=${id}`}/>
}

export default Avatar;
