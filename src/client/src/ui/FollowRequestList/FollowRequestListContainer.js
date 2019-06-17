import { connect } from 'react-redux';
import FollowRequestList from '../FollowRequestList/FollowRequestList';

const mapStateToProps = (state, ownProps) => ({
    follows: state.follows,
});

export default connect(mapStateToProps, null)(FollowRequestList);