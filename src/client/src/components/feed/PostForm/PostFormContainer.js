import { connect } from 'react-redux'

import * as actions from '../actions/api.js';
import PostForm from './PostForm';

const mapDispatchToProps = (dispatch, ownProps) => ({
    createPost: (post) => {
        dispatch(actions.apiRequest({
            body: post,
            method: 'POST',
            url: '/posts',
            feature: 'posts',
        }));
    }
})   

const PostFormContainer = connect(null, mapDispatchToProps)(PostForm);

export default PostFormContainer;