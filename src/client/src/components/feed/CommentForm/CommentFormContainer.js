import { connect } from 'react-redux';

import * as actions from '../actions/comments.actions.js';
import CommentForm from './CommentForm';

const mapDispatchToProps = (dispatch, ownProps) => ({
    createComment: (comment) => dispatch(actions.createComment(comment)),
});

const CommentFormContainer = connect(null, mapDispatchToProps)(CommentForm);

export default CommentFormContainer;