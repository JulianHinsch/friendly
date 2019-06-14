import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Comment from '../Comment/Comment';

import styles from './CommentList.module.scss';

class CommentList extends Component {

    state = {
        expanded: false,
    }

    render() {
        const { comments } = this.props;
        return (
            <div className={styles.comment_list}>
                {this.state.expanded ? comments.map(comment => {
                    const { id, user, createdAt, updatedAt, text } = comment;
                    return (
                        <Comment 
                            id={id}
                            user={user}
                            createdAt={createdAt}
                            updatedAt={updatedAt}
                            text={text}
                            key={id}/>
                    )
                }) : (
                    <div className={styles.comment_list_placeholder} onClick={() => this.setState({ expanded: true })}>
                        {comments.length} comment{comments.length === 1 ? '' : 's'}
                    </div>
                )}
            </div>
        )
    }
}

CommentList.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.shape({
        user: PropTypes.object,
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
        createdAt: PropTypes.string.isRequired,
        updatedAt: PropTypes.string.isRequired,
    }))
}

export default CommentList;