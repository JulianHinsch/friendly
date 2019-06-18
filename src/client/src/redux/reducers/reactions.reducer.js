import { REACTIONS, SET_REACTIONS, DELETE_REACTION } from '../actions/reactions.actions';
import { SET_LOADER } from '../actions/loaders.actions';

const defaultState = {
    error: null,
    loading: false,
    collection: {}
}

export default (state = defaultState, action) => {
    switch(action.type) {
        case `${REACTIONS} ${SET_LOADER}`:
            const loading = action.payload;
            return Object.assign({}, state, { loading });
        case SET_REACTIONS:
            const reactions = action.payload;
            return Object.assign({}, state, { collection: reactions});
        case DELETE_REACTION:
            //TODO
            return state;
        default:
            return state;
    }
}
