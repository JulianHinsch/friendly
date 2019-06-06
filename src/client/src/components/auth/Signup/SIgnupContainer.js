import { connect } from 'react-redux';
import * as actions from '../../../redux/actions/auth';

import Signup from './Signup';

const mapStateToProps = (state, ownProps) => ({
    auth: state.auth,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    signup: (user) => dispatch(actions.signUp(user)),
});

export default connect(mapStateToProps, mapDispatchToProps, null)(Signup);