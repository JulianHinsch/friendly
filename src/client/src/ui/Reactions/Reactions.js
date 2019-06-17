import React from 'react';
import PropTypes from 'prop-types';

import styles from './Reactions.module.scss';

//TODO add the ability to choose reaction type and delete reaction
const Reactions = ({ reactions, createReaction, deleteReaction }) => (
    <div className={styles.reactions}>
        <img
            src={require('../../assets/thumbs_up.svg')} 
            alt={'Thumbs Up'}
            onClick={createReaction}/>
        {reactions.length > 0 && (
            <p>{reactions.length} {reactions.length > 1 ? 'likes' : 'like'}</p>
        )}
    </div>
)

Reactions.propTypes = {
    reactions: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        user: PropTypes.object.isRequired,
        createdAt: PropTypes.string.isRequired,
        updatedAt: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
    })),
    createReaction: PropTypes.func.isRequired,
    deleteReaction: PropTypes.func.isRequired,
}

export default Reactions;