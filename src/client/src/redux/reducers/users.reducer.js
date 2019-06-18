import { USERS, SET_USERS } from '../actions/users.actions';
import { SET_LOADER } from '../actions/loaders.actions';

const defaultState = {
    loading: false,
    collection: {}
}

export default (state = defaultState, action) => {
    switch(action.type) {
        case `${USERS} ${SET_LOADER}`:
            const loading = action.payload;
            return Object.assign({}, state, { loading });
        case SET_USERS:
            const users = action.payload;
            return Object.assign({}, state, { collection: users });
        default:
            return state;
    }
}



