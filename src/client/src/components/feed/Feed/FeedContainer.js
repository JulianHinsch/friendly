import { connect } from 'react-redux'

import * as actions from '../actions/api.js';
import Feed from './Feed';

const mapDispatchToProps = (dispatch, ownProps) => ({
    loadPosts: () => {
        dispatch(actions.loadPosts);
    }
});

const mapStateToProps = (state, ownProps) => ({
    posts: state.posts.posts,
    error: state.posts.error,
});

const FeedContainer = connect(null, mapDispatchToProps)(Feed);

export default FeedContainer;