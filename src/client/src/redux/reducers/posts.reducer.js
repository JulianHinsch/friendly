import { POSTS, SET_POSTS, DELETE_POST } from '../actions/posts.actions';
import { SET_LOADER } from '../actions/loaders.actions';

const defaultState = {
    loading: false,
    collection: {},
}

export default (state = defaultState, action) => {
    switch(action.type) {
        case `${POSTS} ${SET_LOADER}`:
            const loading = action.payload;
            return Object.assign({}, state, { loading });
        case SET_POSTS:
            const posts = action.payload;
            return Object.assign({}, state, { collection: posts });
        case DELETE_POST:
            //TODO get the id from the api call...
            const id = action.payload;
            const nextState = Object.assign({}, state.collection);
            delete nextState[id];
            return Object.assign({}, state, nextState)
        default:
            return state;
    }
}
