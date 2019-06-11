import { AUTH, LOG_IN, SIGN_UP, LOG_OUT, setAuth } from '../../actions/auth.actions';
import { API_SUCCESS, API_ERROR, apiRequest } from '../../actions/api.actions';
import apiRoot from '../../../utils/apiRoot';

export default () => (next) => (action) => {
    
    next(action);

    switch(action.type) {
        case LOG_IN: 
            next(apiRequest({ body: action.payload, method: 'POST', url: '/login', feature: AUTH }));
            break;
        case SIGN_UP:
            next(apiRequest({ body: action.payload, method: 'POST', url: '/login', feature: AUTH }));
            break;            
        case LOG_OUT:
            next(apiRequest({ body: null, method: 'POST', url: '/login', feature: AUTH }));
            break;     
        case `${AUTH} API_SUCCESS`:
            next(setAuth({
                //books: action.payload.items, normalizeKey: 'id'
            }))
            break; 
        case `${AUTH} API_ERROR`:
            next(setAuth({

            }))
            break;
        default:
            break;
    }
}
    