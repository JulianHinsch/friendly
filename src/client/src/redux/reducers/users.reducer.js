import { SET_USERS } from '../actions/users.actions';

const defaultState = {
    selectedUserId: null,
    loading: false,
    collection: {}
}

export default (state = defaultState, action) => {
    switch(action.type) {
        case SET_USERS:
            const users = action.payload;
            return Object.assign({}, state, { collection: users });
        default:
            return state;
    }
}



