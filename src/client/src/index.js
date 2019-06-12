import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/AppContainer';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import configureStore from './redux/store';
import { Router } from 'react-router-dom';
import history from './history';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <App />
        </Router>
    </Provider>, document.getElementById('root'));
serviceWorker.register();