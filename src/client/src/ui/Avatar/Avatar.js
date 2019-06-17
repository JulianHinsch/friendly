import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import md5 from 'md5';
import styles from './Avatar.module.scss';

const Avatar = ({ id, email, diameter }) => (
     <Link 
        style={{
            backgroundImage: `url(https://www.gravatar.com/avatar/${md5(email.toLowerCase())})`,
            backgroundSize: 'cover',
            height: diameter ? `${diameter}px` : '30px',
            width: diameter ? `${diameter}px` : '30px', 
            borderRadius: diameter ? `${diameter/2}px` : '15px',         
        }}
        className={styles.avatar}
        to={`/profile/${id}`}/>
)

Avatar.propTypes = {
    id: PropTypes.number.isRequired,
    email: PropTypes.string.isRequired,
    diameter: PropTypes.number,
}

export default Avatar;
