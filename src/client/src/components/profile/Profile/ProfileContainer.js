import { connect } from 'react-redux';
import Profile from './Profile';
import { createPost, deletePost } from './../../../redux/actions/posts';

const mapStateToProps = (state, ownProps) => ({
    auth: state.auth,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    createPost: (post) => dispatch(createPost(post)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);