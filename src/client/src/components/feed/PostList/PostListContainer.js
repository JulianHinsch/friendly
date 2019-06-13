import { connect } from 'react-redux';
import PostList from './PostList';

import * as actions from '../../../redux/actions/posts.actions';

const mapStateToProps = (state, ownProps) => ({
    posts: state.posts,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchPosts: (query) => dispatch(actions.fetchPosts({ query })),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostList);