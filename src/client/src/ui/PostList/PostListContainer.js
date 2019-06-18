import { connect } from 'react-redux';
import PostList from './PostList';
import denormalizePosts from '../../redux/selectors/denormalizePosts.selector';
import * as actions from '../../redux/actions/posts.actions';

const mapStateToProps = (state, ownProps) => ({
    posts: denormalizePosts(state),
});

export default connect(mapStateToProps, null)(PostList);