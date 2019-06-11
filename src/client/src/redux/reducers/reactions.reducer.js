import { SET_REACTIONS } from '../actions/reactions.actions';

const defaultState = {
    error: null,
    loading: false,
    collection: {}
}

export default (state = defaultState, action) => {
    switch(action.type) {
        case SET_REACTIONS:
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
}
