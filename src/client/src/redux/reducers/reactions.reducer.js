import { SET_REACTIONS, DELETE_REACTION } from '../actions/reactions.actions';

const defaultState = {
    error: null,
    loading: false,
    collection: {}
}

export default (state = defaultState, action) => {
    switch(action.type) {
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
