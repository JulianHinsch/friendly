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
            return { loading, ...state };
        case SET_COMMENTS:
            return { ...state, collection: { ...state.collection, ...action.payload }};
        case DELETE_COMMENT:
            //TODO get the id
            const id = action.payload;
            const nextCollection = { ...state.collection };
            delete nextCollection[id];
            return { ...state, collection: { ...nextCollection }};
        default:
            return state;
    }
}

