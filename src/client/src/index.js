import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
// import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
// import configureStore from './store';
import { BrowserRouter } from 'react-router-dom';

// const store = configureStore();

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>, document.getElementById('root'));
serviceWorker.register();

// ReactDOM.render(
//     <Provider>
//         <BrowserRouter>
//             <App />
//         </BrowserRouter>
//     </Provider>, document.getElementById('root'));
// serviceWorker.register();