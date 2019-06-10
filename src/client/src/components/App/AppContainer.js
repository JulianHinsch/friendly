import { connect } from 'react-redux';

import App from './App';

const mapStateToProps = (state, ownProps) => {
    return {
        auth: state.auth,                
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        setAuth: () => {

        }
    }
}

export const AppContainer = connect(mapStateToProps, null, null)(App);

