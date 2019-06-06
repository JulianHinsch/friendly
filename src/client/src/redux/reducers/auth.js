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
            console.log('you got to API start reducer in authReducer')
            return Object.assign(state, { loading: true });
        case `${AUTH} ${API_SUCCESS}`:
            //this does not necessarily mean auth was successful
            console.log('you got to API success reducer in authReducer')
            console.log(action);
            return Object.assign(state, { loading: false });
            
        case `${AUTH} ${API_ERROR}`:
            console.log('you got to API error reducer in authReducer')

            return Object.assign(state, { loading: false });
            
        
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