import cookies from 'js-cookie';
import { AUTH, LOG_IN, SIGN_UP, LOG_OUT, GET_AUTH, setAuth } from '../../actions/auth.actions';
import { API_SUCCESS, API_ERROR, apiRequest } from '../../actions/api.actions';
import { clearStore } from '../../actions/data.actions';

export default ({ dispatch }) => (next) => (action) => {
    
    next(action);

    switch(action.type) {
        case LOG_IN:
            const credentials = action.payload;
            const { redirectTo } = action.meta;
            next(apiRequest({
                data: credentials, 
                method: 'POST',
                url: '/login',
                timeout: 3000,
                feature: AUTH,
                redirectTo
            }));
            break;
        case SIGN_UP:
            const user = action.payload;
            next(apiRequest({ 
                    data: user, 
                    method: 'POST', 
                    url: '/signup', 
                    timeout: 3000,
                    feature: AUTH,
                    redirectTo: null,                    
            }));
            break;
        case LOG_OUT:
            next(apiRequest({ 
                    data: null, 
                    method: 'POST',
                    url: '/logout', 
                    timeout: 3000,
                    feature: AUTH,
                    redirectTo: null,                    
            }));
            break;
        case `${AUTH} ${API_ERROR}`:
            //safe getter function, since we don't know if these properties will exist
            const get = (obj, path) => path.reduce((xs, x) => (xs && xs[x]) ? xs[x] : null, obj);
            const message = get(action, ['payload','response', 'data', 'message']);   
            next(setAuth({ auth: { message }}));
            break;
        case `${AUTH} ${API_SUCCESS}`:
        case GET_AUTH:
            //read the cookie
            const jwtPayload = cookies.get('jwt_payload');        
            if(jwtPayload) {
                const { id, name, emailHash, exp } = JSON.parse(window.atob(jwtPayload));
                //exp is in seconds not milliseconds
                if(exp*1000 > new Date().getTime()) {
                    const auth = {
                        id,
                        name,
                        emailHash,
                        isAuthenticated: true,
                        message: null,
                    }
                    next(setAuth({ auth }));
                    break;
                }
            }
            //clear the store when the user logs out
            next(clearStore());            
            break;
        default:
            break;
    }
}
    