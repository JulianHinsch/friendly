import { connect } from 'react-redux';
import PostList from './PostList';
import denormalizePosts from '../../redux/selectors/denormalizePosts.selector';

const mapStateToProps = (state, ownProps) => ({
    loading: state.posts.loading,
    //posts: denormalizePosts(state, state.selectedPostArray),
    posts: [],
});

export default connect(mapStateToProps,null)(PostList);