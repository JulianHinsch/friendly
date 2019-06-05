import { connect } from 'react-redux';
import * as actions from '../../../redux/actions/auth';

import Header from './Header';

const mapStateToProps = (state, ownProps) => ({
    auth: state.auth,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    logIn: (user) => {
        dispatch(actions.logIn(user))
    },
    signUp: (user) => {
        dispatch(actions.signUp(user))
    },
    logOut: (user) => {
        dispatch(actions.logOut());
    }
})


export const HeaderContainer = connect(mapStateToProps, null)(Header);

