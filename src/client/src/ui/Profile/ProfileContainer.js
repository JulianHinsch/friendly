import { connect } from 'react-redux';
import Profile from './Profile';
import { fetchUsers } from '../../redux/actions/users.actions';
import { createPost, deletePost } from '../../redux/actions/posts.actions';

const mapStateToProps = (state, ownProps) => ({
    auth: state.auth,
    //user
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchUsers: (query) => dispatch(fetchUsers({ query })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);