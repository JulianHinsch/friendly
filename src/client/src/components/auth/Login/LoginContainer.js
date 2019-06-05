import { connect } from 'react-redux';
import * as actions from '../../../redux/actions/auth';

import Login from './Login';

const mapStateToProps = (state, ownProps) => ({
    auth: state.auth,
});

const mapDispatchToProps = (state, ownProps) => ({
    login: (user) => dispatch(actions.login(user)),
});

export default connect(mapStateToProps, mapDispatchToProps, null)(Login);