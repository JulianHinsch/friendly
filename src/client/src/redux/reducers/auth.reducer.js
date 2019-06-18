import { AUTH, SET_AUTH } from '../actions/auth.actions';
import { SET_LOADER } from '../actions/loaders.actions';

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
        case `${AUTH} ${SET_LOADER}`:
            const loading = action.payload;
            return Object.assign({}, state, { loading });
        case SET_AUTH:
            const auth = action.payload;
            return Object.assign({}, state, auth);
        default:
            return state;
    }
}