import { USERS, DELETE_USER, setUsers } from '../../actions/users.actions';
import { API_SUCCESS, API_ERROR, apiRequest } from '../../actions/api.actions';
import { setLoader } from '../../actions/loaders.actions';

export default () => (next) => (action) => {
    
    next(action);

    switch(action.type) {
        case DELETE_USER:
            const id = action.payload;
            next(apiRequest({
                data: null,
                method: 'DELETE',
                url: `/api/users/${id}`,
                timeout: 3000,
                feature: USERS,
                redirectTo: null,
            }));
            break;
        case `${USERS} ${API_SUCCESS}`:
            const users = action.payload;
            next(setUsers({ users, normalize: true }));
            next(setLoader({ feature: USERS, loading: false }));
            break; 
        case `${USERS} ${API_ERROR}`:
            const error = action.payload;
            console.log(error);
            next(setLoader({ feature: USERS, loading: false }));
            break;
        default:
            break;
    }
}
    