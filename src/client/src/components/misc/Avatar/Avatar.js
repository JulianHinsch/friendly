import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Avatar.module.scss';

const Avatar = ({ id }) => {
    return <Link 
        className={styles.avatar}
        to={`/profile?id=${id}`}/>
}

export default Avatar;

//style={{backgroundImage: `src(${imgUrl})`}}