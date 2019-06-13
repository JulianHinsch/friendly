import cookies from 'js-cookie';
import { AUTH, LOG_IN, SIGN_UP, LOG_OUT, GET_AUTH, setAuth } from '../../actions/auth.actions';
import { API_SUCCESS, API_ERROR, apiRequest } from '../../actions/api.actions';

export default () => (next) => (action) => {
    
    next(action);

    switch(action.type) {
        case LOG_IN:
            const credentials = action.payload;
            next(apiRequest({
                data: credentials, 
                method: 'POST', 
                url: '/login',
                timeout: 3000,
                feature: AUTH,
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
            }));
            break;
        case LOG_OUT:
            next(apiRequest({ 
                data: null, 
                method: 'POST',
                url: '/logout', 
                timeout: 3000,
                feature: AUTH 
            }));
            break;
        case `${AUTH} ${API_ERROR}`:
            //safe getter function, since we don't know if these properties will exist
            const get = (obj, path) => path.reduce((xs, x) => (xs && xs[x]) ? xs[x] : null, obj);            
            next(setAuth({
                message: get(action, ['payload','message']),
            }));
            break;
        case `${AUTH} ${API_SUCCESS}`:    
        case GET_AUTH:
            const jwtPayload = cookies.get('jwt_payload');        
            if(jwtPayload) {
                const { id, name, email, exp } = JSON.parse(window.atob(jwtPayload));
                //exp is in seconds not milliseconds
                if(exp*1000 > new Date().getTime()) {
                    next(setAuth({ 
                        id,
                        name,
                        email,
                        isAuthenticated: true,
                        message: null,
                    }));
                    break;
                }
            }
            next(setAuth({
                id: null,
                name: null,
                email: null,
                isAuthenticated: false 
            }));
            break;
        default:
            break;
    }
}
    