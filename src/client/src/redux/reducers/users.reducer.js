import { SET_USERS } from '../actions/users.actions';

const defaultState = {
    selectedUserId: null,
    error: null,
    loading: false,
    collection: {}
}

export default (state = defaultState, action) => {
    switch(action.type) {
        case SET_USERS:
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
}



