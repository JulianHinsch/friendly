import { AUTH, LOG_IN, SIGN_UP, LOG_OUT, setAuth } from '../../actions/auth.actions';
import { API_SUCCESS, API_ERROR, apiRequest } from '../../actions/api.actions';
import apiRoot from '../../../utils/apiRoot';

export default () => (next) => (action) => {
    
    next(action);

    switch(action.type) {
        case LOG_IN:
            next(apiRequest({ 
                data: action.payload, 
                method: 'POST', 
                url: '/login', 
                feature: AUTH 
            }));
            break;
        case SIGN_UP:
            next(apiRequest({ 
                data: action.payload, 
                method: 'POST', 
                url: '/signup', 
                feature: AUTH 
            }));
            break;
        case LOG_OUT:
            next(apiRequest({ 
                data: null, 
                method: 'POST',
                url: '/logout', 
                feature: AUTH 
            }));
            break;
        case `${AUTH} API_SUCCESS`:
            //TODO we'll need to differentiate between logging in and out here...
            next(setAuth({
                isAuthenticated: action.payload,
                //books: action.payload.items, normalizeKey: 'id'
            }));
            break; 
        case `${AUTH} API_ERROR`:
            //safe getter function, since we don't know if these properties will exist
            const get = (obj, path) => path.reduce((xs, x) => (xs && xs[x]) ? xs[x] : null, obj);            
            next(setAuth({
                message: get(action, ['payload','response','data','message']),
            }));
            break;
        default:
            break;
    }
}
    