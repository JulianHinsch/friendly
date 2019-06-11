import { combineReducers } from 'redux';

import auth from './auth.reducer';
//import users from './users.reducer';
import posts from './posts.reducer';
import reactions from './reactions.reducer';
import comments from './comments.reducer';
// import follows from './follows.reducer';
// import conversations from './conversations.reducer';
// import messages from './messages.reducer';

const rootReducer = combineReducers({
    auth,
    //users,
    posts,
    reactions,
    comments,
    // follows,
    // conversations,
    // messages,
});

export default rootReducer;