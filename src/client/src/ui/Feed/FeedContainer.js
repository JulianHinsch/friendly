import { connect } from 'react-redux';
import * as actions from '../../redux/actions/posts.actions';

import Feed from './Feed';

const mapStateToProps = (state, ownProps) => ({
    auth: state.auth,
    loading: state.posts.loading,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchPosts: (query) => dispatch(actions.fetchPosts({ query })),
});

export default connect(null, mapDispatchToProps)(Feed);