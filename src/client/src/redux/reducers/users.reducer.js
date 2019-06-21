import { USERS, SET_USERS, DELETE_USER } from '../actions/users.actions';
import { SET_LOADER } from '../actions/loaders.actions';
import { SET_SELECTED_DATA } from '../actions/data.actions';

const defaultState = {
    selectedUserArray: [],
    loading: false,
    collection: {}
}

export default (state = defaultState, action) => {
    switch(action.type) {
        case `${USERS} ${SET_LOADER}`:
            return Object.assign({}, state, { loading: action.payload });
        case SET_USERS:
            return { ...state, collection: { ...state.collection, ...action.payload }};
        case `${USERS} ${SET_SELECTED_DATA}`:
            return Object.assign({}, state, { selectedUserArray: action.payload });
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



