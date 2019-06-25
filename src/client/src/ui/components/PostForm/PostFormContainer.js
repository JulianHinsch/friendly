import { connect } from 'react-redux';

import * as actions from '../../../redux/actions/posts.actions';
import PostForm from './PostForm';

const mapStateToProps = (state, ownProps) => ({
    auth: state.auth,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    createPost: (post) => dispatch(actions.createPost({ post })),
});

const PostFormContainer = connect(mapStateToProps, mapDispatchToProps)(PostForm);

export default PostFormContainer;