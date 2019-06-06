import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/rootReducer.js';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import redirectMiddleware from './middleware/redirectMiddleware';

const middleware = [
    thunk,
    redirectMiddleware,
    logger,
]

export default () => {
    return createStore(rootReducer, applyMiddleware(...middleware));
}