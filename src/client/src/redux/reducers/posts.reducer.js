import { POSTS, SET_POSTS, DELETE_POST } from '../actions/posts.actions';
import { SET_LOADER } from '../actions/loaders.actions';
import { SET_SELECTED_DATA } from '../actions/data.actions';

const defaultState = {
    selectedPostArray: [],
    loading: false,
    collection: {},
}

export default (state = defaultState, action) => {
    switch(action.type) {
        case `${POSTS} ${SET_LOADER}`:
            return Object.assign({}, state, { loading: action.payload });
        case SET_POSTS:
            return { ...state, collection: { ...state.collection, ...action.payload }};
        case `${POSTS} ${SET_SELECTED_DATA}`:
            return Object.assign({}, state, { selectedPostArray: action.payload });
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
