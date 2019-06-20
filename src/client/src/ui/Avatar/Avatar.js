import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './Avatar.module.scss';

const Avatar = ({ id, emailHash, diameter }) => (
     <Link 
        style={{
            backgroundImage: `url(https://www.gravatar.com/avatar/${emailHash})`,
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
    emailHash: PropTypes.string.isRequired,
    diameter: PropTypes.number,
}

export default Avatar;
