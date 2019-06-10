import { connect } from 'react-redux';
import * as actions from '../../../redux/actions/auth';

import Signup from './Signup';

const mapDispatchToProps = (dispatch, ownProps) => ({
    signUp: (user) => dispatch(actions.signUp(user)),
});

export default connect(null, mapDispatchToProps, null)(Signup);