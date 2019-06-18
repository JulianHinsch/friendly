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
            return { loading, ...state };
        case SET_POSTS:
            return { ...state, collection: { ...state.collection, ...action.payload }};
        case DELETE_POST:
            //TODO get the id
            const id = action.payload;
            const nextCollection = { ...state.collection };
            delete nextCollection[id];
            return { ...state, collection: { ...nextCollection }};
        default:
            return state;
    }
}
