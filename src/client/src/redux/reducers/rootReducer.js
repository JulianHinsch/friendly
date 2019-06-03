import { combineReducers } from 'redux';

//import auth from './auth';
import { commentsReducer as comments } from './comments';
// import { conversations } from './conversations';
// import { follows } from './follows';
// import { likes } from './likes';
// import { messages } from './messages';
import { postsReducer as posts } from './posts';

const rootReducer = combineReducers({
    // auth,
    comments,
    // conversations,
    // follows,
    // likes,
    // messages,
    posts
});

export default rootReducer;