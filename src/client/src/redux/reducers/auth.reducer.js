import { SET_AUTH } from '../actions/auth.actions';

const defaultState = {
    id: null,
    isAuthenticated: false,
    name: null,
    email: null,
    loading: false,
    message: null,
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case SET_AUTH:
            const auth = action.payload;
            return Object.assign({}, state, auth);
        default:
            return state;
    }
}