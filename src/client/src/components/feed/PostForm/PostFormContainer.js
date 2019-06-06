import { connect } from 'react-redux'

import * as actions from '../../../redux/actions/api.js';
import PostForm from './PostForm';

const mapStateToProps = (state, ownProps) => ({
    auth: state.auth,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    createPost: (post) => {
        // dispatch(actions.apiRequest({
        //     body: post,
        //     method: 'POST',
        //     url: '/posts',
        //     feature: 'posts',
        // }));
    }
})   

const PostFormContainer = connect(mapStateToProps, mapDispatchToProps)(PostForm);

export default PostFormContainer;