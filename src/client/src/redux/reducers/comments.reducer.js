import { SET_COMMENTS, DELETE_COMMENT } from '../actions/comments.actions';

const defaultState = {
    loading: false,
    collection: {},
}

export default (state = defaultState, action) => {
    switch(action.type) {
        case SET_COMMENTS:
            return { ...state, collection: { ...state.collection, ...action.payload }};
        case DELETE_COMMENT:
            // TODO get the id
            const id = action.payload;
            const nextCollection = { ...state.collection };
            delete nextCollection[id];
            return { ...state, collection: { ...nextCollection }};
        default:
            return state;
    }
}

