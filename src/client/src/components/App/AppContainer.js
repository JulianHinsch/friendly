import { connect } from 'react-redux';

import App from './App';

const mapStateToProps = (state, ownProps) => {
    console.log(ownProps);
    return {
        auth: state.auth,                
    }
}

export const AppContainer = connect(mapStateToProps, null, null)(App);

