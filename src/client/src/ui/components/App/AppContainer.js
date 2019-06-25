import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../../../redux/actions/auth.actions';

import App from './App';

const mapDispatchToProps = (dispatch, ownProps) => ({
    getAuth: () => dispatch(actions.getAuth()),
});

export default withRouter(connect(null, mapDispatchToProps, null)(App));
