import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import Comment from '../Comment/CommentContainer';

import styles from './CommentList.module.scss';

class CommentList extends Component {

    state = {
        expanded: false,
    }

    render() {
        const { comments } = this.props;
        return (
            <div className={styles.comment_list}>
                <div className={styles.comment_list_toggle}>
                    <span onClick={() => this.setState(prevState => ({ 
                        expanded: !prevState.expanded 
                    }))}>
                        {comments.length} comment{comments.length === 1 ? '' : 's'}
                    </span>
                </div>
                {this.state.expanded && comments.sort((c1,c2) => {
                    return moment(c1.updatedAt) - moment(c2.updatedAt);
                }).map(comment => <Comment key={comment.id} {...comment}/>)}
            </div>
        )
    }
}

CommentList.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
        createdAt: PropTypes.string.isRequired,
        updatedAt: PropTypes.string.isRequired,
        user: PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            emailHash: PropTypes.string.isRequired,
        }).isRequired,
    }))
}

export default CommentList;