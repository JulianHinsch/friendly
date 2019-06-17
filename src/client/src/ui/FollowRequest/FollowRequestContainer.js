import { connect } from 'react-redux';
import * as actions from '../../redux/actions/follows.actions';

import FollowRequest from '../FollowRequest/FollowRequest';

const mapStateToProps = (state, ownProps) => ({
    auth: state.auth,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    updateFollowRequest: (followRequest) => dispatch(actions.updateFollowRequest({ id })),
    deleteFollowRequest: (id) => dispatch(actions.deleteFollowRequest({ id })),
})

export default connect(mapStateToProps, mapDispatchToProps)(FollowRequest);