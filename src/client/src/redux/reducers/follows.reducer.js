import { FOLLOWS, SET_FOLLOWS, UPDATE_FOLLOW, DELETE_FOLLOW } from '../actions/follows.actions';
import { SET_LOADER } from '../actions/loaders.actions';

const defaultState = {
    loading: false,
    collection: {},
}

export default (state = defaultState, action) => {
    switch(action.type) {
        case `${FOLLOWS} ${SET_LOADER}`:
            const loading = action.payload;
            return { loading, ...state };
        case SET_FOLLOWS:
            return { ...state, collection: { ...state.collection, ...action.payload }}; 
        case DELETE_FOLLOW:
            //TODO get the id
            const id = action.payload;
            const nextCollection = { ...state.collection };
            delete nextCollection[id];
            return { ...state, collection: { ...nextCollection }};
        case UPDATE_FOLLOW:
            //TODO
            return state;
        default:
            return state;
    }
}

