import { connect } from 'react-redux';

import Header from './Header';

const mapStateToProps = (state) => ({
    auth: state.auth,        
});


export const HeaderContainer = connect(mapStateToProps, null)(Header);

