import { SET_REACTIONS, DELETE_REACTION } from '../actions/reactions.actions';

const defaultState = {
    loading: false,
    collection: {}
}

export default (state = defaultState, action) => {
    switch(action.type) {
        case SET_REACTIONS:
            return Object.assign({}, state, { collection: { ...state.collection, ...action.payload}});
            //return { ...state, collection: { ...state.collection, ...action.payload }};        
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
