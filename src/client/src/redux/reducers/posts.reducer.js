import { SET_POSTS, DELETE_POST } from '../actions/posts.actions';

const defaultState = {
    selectedPostId: null,
    loading: false,
    collection: {},
}

export default (state = defaultState, action) => {
    switch(action.type) {
        case SET_POSTS:
            const posts = action.payload;
            return Object.assign({}, state, { collection: posts });
        case DELETE_POST:
            //TODO get the id from the api call...
            const id = action.payload;
            const newObj = Object.assign({}, state.collection);
            delete newObj[id];
            return Object.assign({}, state, newObj)
        default:
            return state;
    }
}
