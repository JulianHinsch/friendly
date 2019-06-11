import { SET_COMMENTS } from '../actions/comments.actions';

const defaultState = {
    error: null,
    loading: false,
    collection: {},
}

export default (state = defaultState, action) => {
    switch(action.type) {

        case SET_COMMENTS:
            return Object.assign({}, state, action.payload);
        
        default:
            return state;
    }
}

