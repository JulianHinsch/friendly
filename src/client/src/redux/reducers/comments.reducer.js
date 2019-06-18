import { COMMENTS, SET_COMMENTS, DELETE_COMMENT } from '../actions/comments.actions';
import { SET_LOADER } from '../actions/loaders.actions';

const defaultState = {
    loading: false,
    collection: {},
}

export default (state = defaultState, action) => {
    switch(action.type) {
        case `${COMMENTS} ${SET_LOADER}`:
            const loading = action.payload;
            return Object.assign({}, state, { loading });
        case SET_COMMENTS:
            const comments = action.payload;
            return Object.assign({}, state, { collection: comments });
        case DELETE_COMMENT:
            //TODO
            return state;
        default:
            return state;
    }
}

