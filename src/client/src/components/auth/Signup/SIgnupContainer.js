import { connect } from 'react-redux';
import * as actions from '../../../redux/actions/auth.actions';

import Signup from './Signup';

const mapStateToProps = (state, ownProps) => ({
    message: state.auth.message,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    signUp: (user) => dispatch(actions.signUp(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);