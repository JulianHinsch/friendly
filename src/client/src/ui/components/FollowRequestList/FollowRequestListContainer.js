import { connect } from 'react-redux';
import FollowRequestList from '../FollowRequestList/FollowRequestList';
import getFollowRequests from '../../../redux/selectors/getFollowRequests.selector';

const mapStateToProps = (state, ownProps) => ({
    followRequests: getFollowRequests(state),
});

export default connect(mapStateToProps, null)(FollowRequestList);