import { FETCH_PROFILE } from '../../actions/profile.actions';
import { USERS } from '../../actions/users.actions';
import { apiRequest } from '../../actions/api.actions';
import { setLoader } from '../../actions/loaders.actions';

export default () => (next) => (action) => {

    next(action);

    switch(action.type) {
        case FETCH_PROFILE:
            const userId = action.payload;
            const { limit, offset } = action.meta;
            //the actions dispatched here will be intercepted by the users middleware
            next(setLoader({ loading: true, feature: USERS }));
            next(apiRequest({
                data: null,
                method: 'GET',
                url: `/api/profile/${userId}?limit=${limit}&offset=${offset}`,
                timeout: 3000,
                feature: USERS,
                redirectTo: null,                
            }));
            break;
        default:
            break;
    }

}
