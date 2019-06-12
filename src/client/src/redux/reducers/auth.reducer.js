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
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
}