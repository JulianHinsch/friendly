import { SET_AUTH } from '../actions/auth.actions';
import {  } from '../actions/api.actions';

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
        //THIS SHOULD REALLY BE ALL WE NEED HERE

        /*

        case `${AUTH} ${API_SUCCESS}`:
            //we will need to differentiate here between login, logout, signup
            return Object.assign({}, state, {
                //...action.payload, 
                //id:
                isAuthenticated: true,                
                // name:
                // email:       
            });
        case `${AUTH} ${API_ERROR}`:
            //safe getter function, since we don't know if all properties will exist
            const get = (obj, path) => path.reduce((xs, x) => (xs && xs[x]) ? xs[x] : null, obj);      
            return Object.assign({}, state, { 
                message: get(action, ['payload','response','data','message']),
            });
        */
        default:
            return state;
    }
}