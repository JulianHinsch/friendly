import { USERS, SET_USERS, DELETE_USER } from '../actions/users.actions';
import { SET_LOADER } from '../actions/loaders.actions';

const defaultState = {
    loading: false,
    collection: {}
}

export default (state = defaultState, action) => {
    switch(action.type) {
        case `${USERS} ${SET_LOADER}`:
            const nextState = { ...state }
            nextState.loading = action.payload;
            return { ...nextState };
        case SET_USERS:
            return { ...state, collection: { ...state.collection, ...action.payload }};
        case DELETE_USER:
            //TODO get the id from the api call?
            const id = action.payload;
            const nextCollection = { ...state.collection };
            delete nextCollection[id];
            return { ...state, collection: { ...nextCollection }};
        default:
            return state;
    }
}



