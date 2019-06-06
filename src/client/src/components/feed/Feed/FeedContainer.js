import { connect } from 'react-redux'

import Feed from './Feed';

const mapDispatchToProps = (dispatch, ownProps) => ({
    // loadPosts: () => {
    //     dispatch(actions.apiRequest({
    //         method: 'GET',
    //         url: '/api/posts',
    //         feature: 'posts',
    //     }));
    // }
});

const mapStateToProps = (state, ownProps) => ({
    posts: state.posts.posts,
    error: state.posts.error,
});

const FeedContainer = connect(mapStateToProps, mapDispatchToProps)(Feed);

export default FeedContainer;