import { connect } from 'react-redux';
import * as actions from '../../redux/actions/follows.actions';

import ProfileHeader from './ProfileHeader';

const mapStateToProps = (state, ownProps) => ({
    auth: state.auth,
    follows: state.follows,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    createFollow: (follow) => dispatch(actions.createFollow({ follow })),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileHeader);