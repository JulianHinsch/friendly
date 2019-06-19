import { REACTIONS, SET_REACTIONS, DELETE_REACTION } from '../actions/reactions.actions';
import { SET_LOADER } from '../actions/loaders.actions';

const defaultState = {
    loading: false,
    collection: {}
}

export default (state = defaultState, action) => {
    switch(action.type) {
        case `${REACTIONS} ${SET_LOADER}`:
            const nextState = { ...state }
            nextState.loading = action.payload;
            return { ...nextState };
        case SET_REACTIONS:
            return { ...state, collection: { ...state.collection, ...action.payload }};        
        case DELETE_REACTION:
            //TODO get the id
            const id = action.payload;
            const nextCollection = { ...state.collection };
            delete nextCollection[id];
            return { ...state, collection: { ...nextCollection }};
        default:
            return state;
    }
}
