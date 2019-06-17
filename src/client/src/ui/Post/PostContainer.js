import { connect } from 'react-redux';
import Post from './Post';

import * as actions from '../../redux/actions/posts.actions';

const mapDispatchToProps = (dispatch, ownProps) => ({
    deletePost: (id) => dispatch(actions.deletePost(id)),
})

export default connect(null, mapDispatchToProps)(Post);