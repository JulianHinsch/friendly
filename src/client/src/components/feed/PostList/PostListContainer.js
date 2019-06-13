import { connect } from 'react-redux';
import PostList from './PostList';
import { getPostsArray } from '../../../redux/selectors/posts.selector';
import * as actions from '../../../redux/actions/posts.actions';

const mapStateToProps = (state, ownProps) => ({
    loading: state.posts.loading,
    posts: getPostsArray(state),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchPosts: (query) => dispatch(actions.fetchPosts({ query })),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostList);