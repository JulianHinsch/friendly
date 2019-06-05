import { combineReducers } from 'redux';

import { authReducer as auth } from './auth';
import { usersReducer as users } from './users';
import { postsReducer as posts } from './posts';
import { reactionsReducer as reactions } from './reactions';
import { commentsReducer as comments } from './comments';
// import { followsReducer from './follows';
// import { conversationsReducer from './conversations';
// import { messagesReducer from './messages';

const rootReducer = combineReducers({
    auth,
    users,
    posts,
    reactions,
    comments,
    // follows,
    // conversations,
    // messages,
});

export default rootReducer;