import { connect } from 'react-redux';

import * as actions from '../../../redux/actions/comments.actions.js';
import _Comment from './Comment';

const mapStateToProps = (state, ownProps) => ({
    auth: state.auth,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    deleteComment: (id) => dispatch(actions.deleteComment({ id })),
});

const CommentContainer = connect(mapStateToProps, mapDispatchToProps)(_Comment);

export default CommentContainer;