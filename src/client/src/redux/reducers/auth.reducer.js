import { AUTH, SET_AUTH } from '../actions/auth.actions';
import { SET_LOADER } from '../actions/loaders.actions';

const defaultState = {
    id: null,
    isAuthenticated: false,
    name: null,
    emailHash: null,
    loading: false,
    message: null,
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case `${AUTH} ${SET_LOADER}`:
            const nextState = { ...state }
            nextState.loading = action.payload;
            return { ...nextState };
        case SET_AUTH:
            const auth = action.payload;
            return { ...state, ...auth };            
        default:
            return state;
    }
}