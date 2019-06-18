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
            return Object.assign({}, state, { loading });
        case SET_FOLLOWS:
            const follows = action.payload;
            return Object.assign({}, state, { collection: follows });
        case DELETE_FOLLOW:
            //TODO
            return state;
        case UPDATE_FOLLOW:
            //TODO
            return state;
        default:
            return state;
    }
}

