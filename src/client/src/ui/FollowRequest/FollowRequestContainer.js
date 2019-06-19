import { connect } from 'react-redux';
import * as actions from '../../redux/actions/follows.actions';

import FollowRequest from '../FollowRequest/FollowRequest';

const mapStateToProps = (state, ownProps) => ({
    auth: state.auth,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    updateFollow: (follow) => dispatch(actions.updateFollow({ follow })),
    deleteFollow: (id) => dispatch(actions.deleteFollow({ id })),
})

export default connect(mapStateToProps, mapDispatchToProps)(FollowRequest);