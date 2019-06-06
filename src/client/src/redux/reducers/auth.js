import { AUTH } from '../actions/auth';
import { API_START, API_SUCCESS, API_ERROR } from '../actions/api';

const defaultState = {
    id: null,
    isAuthenticated: false,
    name: null,
    email: null,
    loading: false,
    message: null,
};

export const authReducer = (state = defaultState, action) => {
    switch (action.type) {
        case `${AUTH} ${API_START}`:
            return Object.assign({}, state, action.payload);
        case `${AUTH} ${API_SUCCESS}`:
            return Object.assign({}, state, { 
                isAuthenticated: true,
                loading: false,
            });
        case `${AUTH} ${API_ERROR}`:
            //TODO improve this syntax, also this message thing might not be there
            return Object.assign({}, state, { 
                loading: false, 
                //message: action.payload.error.response.data.message,
            });
            
        
        //     return Object.assign(state, {
        //         isAuthenticated: true,
        //         message: null,
        //         ...action.payload
        //     })
        // case actions.AUTH_FAILURE:
        //     return Object.assign(state, action.payload);
        // case actions.GET_USER_INFO:
        //     return Object.assign(state, action.payload) 
        // case actions.LOG_OUT:
        //     return Object.assign(state, {
        //         isAuthenticated: false,
        //     })
        default:
            return state;
    }
}