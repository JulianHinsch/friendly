import React from 'react';
import PropTypes from 'prop-types';

import styles from './Reactions.module.scss';

const Reactions = ({ postId, auth, reactions, createReaction, deleteReaction }) => {
    const ownReaction = reactions.find(reaction => reaction.userId === auth.id);
    return (
        <div className={styles.reactions}>
            <img
                src={ownReaction ? 
                    require('../../assets/thumbs_up_fill.svg') 
                    :
                    require('../../assets/thumbs_up.svg'
                )} 
                alt={'Thumbs Up'}
                onClick={() => {
                    if(ownReaction) {
                        deleteReaction(ownReaction.id);                     
                    } else {
                        createReaction({ 
                            userId: auth.id,
                            type: 'LIKE',
                            postId
                        });
                    }    
                }}/>
            {reactions.length > 0 && (
                <p>
                    {ownReaction ? (
                        reactions.length > 1 ? (
                            `You and ${reactions.length-1} ${reactions.length-1 > 1 ? 'others': 'other'}`
                        ) : (
                            'You like this'
                        )
                    ) : (
                        `${reactions.length} ${reactions.length > 1 ? 'likes' : 'like'}`
                    )}
                </p>
            )}
        </div>
    )
}

Reactions.propTypes = {
    postId: PropTypes.number.isRequired,
    auth: PropTypes.shape({
        id: PropTypes.number.isRequired,
    }).isRequired,
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