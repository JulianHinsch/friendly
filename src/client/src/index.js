import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import configureStore from './redux/store';
import { BrowserRouter } from 'react-router-dom';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>, document.getElementById('root'));
serviceWorker.register();