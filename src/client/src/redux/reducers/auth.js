import * as actions from '../actions/auth';

const defaultState = {
    isAuthenticated: false,
    name: null,
    email: null,
    loading: false,
    message: null,
};

export const authReducer = (state = defaultState, action) => {
    switch (action.type) {
        case actions.LOG_IN:
           return Object.assign(state, action.payload)    
        case actions.SIGN_UP:
            return Object.assign(state, action.payload)
        case actions.GET_USER_INFO:
            return Object.assign(state, action.payload) 
        case actions.LOG_OUT:
            return Object.assign(state, action.payload)
        default:
            return state;
    }
}