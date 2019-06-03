import { connect } from 'react-redux'

import * as actions from '../actions/api.js';
import CommentForm from './CommentForm';

const mapDispatchToProps = (dispatch, ownProps) => ({
    createPost: (comment) => {
        dispatch(actions.apiRequest({
            body: comment,
            method: 'POST',
            url: '/comments',
            feature: 'comments',
        }));
    }
})   

const CommentFormContainer = connect(null, mapDispatchToProps)(CommentForm);

export default CommentFormContainer;