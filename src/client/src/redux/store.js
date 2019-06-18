import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/rootReducer.js';
import logger from 'redux-logger';

import authMiddleware from './middleware/feature/auth.middleware';
import commentsMiddleware from './middleware/feature/comments.middleware';
import followsMiddleware from './middleware/feature/follows.middleware';
import postsMiddleware from './middleware/feature/posts.middleware';
import reactionsMiddleware from './middleware/feature/reactions.middleware';
import usersMiddleware from './middleware/feature/users.middleware';

import actionSplitterMiddleware from './middleware/core/actionSplitter.middleware';
import apiMiddleware from './middleware/core/api.middleware';
import normalizrMiddleware from './middleware/core/normalizr.middleware';
import redirectMiddleware from './middleware/core/redirect.middleware';

const featureMiddleware = [
    authMiddleware,
    commentsMiddleware,
    followsMiddleware,
    postsMiddleware,    
    reactionsMiddleware,
    usersMiddleware,
]

const coreMiddleware = [
    apiMiddleware,
    normalizrMiddleware,
    redirectMiddleware,
    actionSplitterMiddleware,     //- nir recommends this one goes first, but it throws errors    
    logger, //must be last
]

export default () => {
    return createStore(rootReducer, applyMiddleware(...featureMiddleware, ...coreMiddleware));
}

/*
export default () => {
    return createStore(rootReducer, applyMiddleware(
        actionSplitterMiddleware,
        apiMiddleware,
        normalizrMiddleware,
        redirectMiddleware,
        authMiddleware,
        commentsMiddleware,
        followsMiddleware,
        postsMiddleware,    
        reactionsMiddleware,
        usersMiddleware,
        logger,
    ));
}*/