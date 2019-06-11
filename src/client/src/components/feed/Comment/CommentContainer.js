import { connect } from 'react-redux';

import * as actions from '../actions/comments.actions.js';
import _Comment from './Comment';

const mapDispatchToProps = (dispatch, ownProps) => ({
    deleteComment: (id) => dispatch(actions.deleteComment(id)),
});

const CommentContainer = connect(null, mapDispatchToProps)(_Comment);

export default CommentContainer;