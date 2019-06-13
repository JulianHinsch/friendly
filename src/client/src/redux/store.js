import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/rootReducer.js';
import logger from 'redux-logger';

import authMiddleware from './middleware/feature/auth.middleware';
import commentsMiddleware from './middleware/feature/comments.middleware';
import postsMiddleware from './middleware/feature/posts.middleware';
import reactionsMiddleware from './middleware/feature/reactions.middleware';

import actionSplitterMiddleware from './middleware/core/actionSplitter.middleware';
import apiMiddleware from './middleware/core/api.middleware';
import normalizeMiddleware from './middleware/core/normalize.middleware';
import redirectMiddleware from './middleware/core/redirect.middleware';

const featureMiddleware = [
    authMiddleware,
    commentsMiddleware,
    postsMiddleware,
    reactionsMiddleware,
]

const coreMiddleware = [
    actionSplitterMiddleware,
    apiMiddleware,
    normalizeMiddleware,
    redirectMiddleware,
    logger,
]

export default () => {
    return createStore(rootReducer, applyMiddleware(...featureMiddleware, ...coreMiddleware));
}