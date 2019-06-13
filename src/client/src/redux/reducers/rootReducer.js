import { combineReducers } from 'redux';
import { CLEAR_STORE } from '../actions/data.actions';

import authReducer from './auth.reducer';
//import usersReducer from './users.reducer';
import postsReducer from './posts.reducer';
import reactionsReducer from './reactions.reducer';
import commentsReducer from './comments.reducer';
// import followsReducer from './follows.reducer';
// import conversationsReducer from './conversations.reducer';
// import messagesReducer from './messages.reducer';


const rootReducer = (state, action) => {

    //clear the store when the user logs out
    if (action.type === CLEAR_STORE) {
        state = undefined;
    }

    return combineReducers({
        auth: authReducer,
        //users: usersReducer,
        posts: postsReducer,
        reactions: reactionsReducer,
        comments: commentsReducer,
        // follows: followsReducer,
        // conversations: conversationsReducer,
        // messages: messagesReducer,
    })(state, action);
}

export default rootReducer;