import { SET_COMMENTS, DELETE_COMMENT } from '../actions/comments.actions';

const defaultState = {
    selectedCommentId: null,
    loading: false,
    collection: {},
}

export default (state = defaultState, action) => {
    switch(action.type) {
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

