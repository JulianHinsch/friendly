import { AUTH } from '../actions/auth.actions';
import { API_SUCCESS, API_ERROR } from '../actions/api.actions';

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
        case `${AUTH} ${API_SUCCESS}`:
            return Object.assign({}, state, {
                loading: false,
                //...action.payload,                
            });
        case `${AUTH} ${API_ERROR}`:
            //safe getter function, since we don't know if all properties will exist
            const get = (obj, path) => path.reduce((xs, x) => (xs && xs[x]) ? xs[x] : null, obj);      
            return Object.assign({}, state, { 
                loading: false, 
                message: get(action, ['payload','error','response','data','message']),
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