import { connect } from 'react-redux';

import * as actions from '../../redux/actions/comments.actions';
import CommentForm from './CommentForm';

const mapStateToProps = (state, ownProps) => ({
    auth: state.auth,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    createComment: (comment) => dispatch(actions.createComment(comment)),
});

const CommentFormContainer = connect(mapStateToProps, mapDispatchToProps)(CommentForm);

export default CommentFormContainer;