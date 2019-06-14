import { connect } from 'react-redux';
import PostList from './PostList';
import denormalizePosts from '../../../redux/selectors/denormalizePosts.selector';
import * as actions from '../../../redux/actions/posts.actions';

const mapStateToProps = (state, ownProps) => ({
    loading: state.posts.loading,
    posts: denormalizePosts(state),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchPosts: (query) => dispatch(actions.fetchPosts({ query })),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostList);