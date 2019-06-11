import { combineReducers } from 'redux';

import authReducer from './auth.reducer';
//import usersReducer from './users.reducer';
import postsReducer from './posts.reducer';
import reactionsReducer from './reactions.reducer';
import commentsReducer from './comments.reducer';
// import followsReducer from './follows.reducer';
// import conversationsReducer from './conversations.reducer';
// import messagesReducer from './messages.reducer';

const rootReducer = combineReducers({
    authReducer,
    //usersReducer,
    postsReducer,
    reactionsReducer,
    commentsReducer,
    // followsReducer,
    // conversationsReducer,
    // messagesReducer,
});

export default rootReducer;