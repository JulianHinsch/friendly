import { connect } from 'react-redux';
import * as actions from '../../../redux/actions/auth';

import Header from './Header';

const mapStateToProps = (state, ownProps) => ({
    auth: state.auth,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    logOut: (user) => {
        dispatch(actions.logOut());
    }
})


export const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);

