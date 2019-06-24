import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/rootReducer.js';
import { createLogger } from 'redux-logger';

import authMiddleware from './middleware/feature/auth.middleware';
import commentsMiddleware from './middleware/feature/comments.middleware';
import followsMiddleware from './middleware/feature/follows.middleware';
import postsMiddleware from './middleware/feature/posts.middleware';
import reactionsMiddleware from './middleware/feature/reactions.middleware';
import usersMiddleware from './middleware/feature/users.middleware';
import searchMiddleware from './middleware/feature/search.middleware';
import feedMiddleware from './middleware/feature/feed.middleware';
import profileMiddleware from './middleware/feature/profile.middleware';

import actionSplitterMiddleware from './middleware/core/actionSplitter.middleware';
import apiMiddleware from './middleware/core/api.middleware';
import normalizeMiddleware from './middleware/core/normalize.middleware';
import redirectMiddleware from './middleware/core/redirect.middleware';

const featureMiddleware = [
    authMiddleware,
    commentsMiddleware,
    followsMiddleware,
    postsMiddleware,
    reactionsMiddleware,
    usersMiddleware,
    searchMiddleware,
    feedMiddleware,
    profileMiddleware,
]

const coreMiddleware = [
    apiMiddleware,
    normalizeMiddleware,
    redirectMiddleware,
    actionSplitterMiddleware, //this should really be first core but it throws errors  
    createLogger({ collapsed: true }),
]

export default () => {
    return createStore(rootReducer, applyMiddleware(...featureMiddleware, ...coreMiddleware));
}
