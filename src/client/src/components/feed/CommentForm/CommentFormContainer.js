import { connect } from 'react-redux';

import * as actions from '../../../redux/actions/comments.actions';
import CommentForm from './CommentForm';

const mapDispatchToProps = (dispatch, ownProps) => ({
    createComment: (comment) => dispatch(actions.createComment(comment)),
});

const CommentFormContainer = connect(null, mapDispatchToProps)(CommentForm);

export default CommentFormContainer;