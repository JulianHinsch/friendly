import { FETCH_SEARCH_RESULTS } from '../../actions/search.actions';
import { USERS } from '../../actions/users.actions';
import { apiRequest } from '../../actions/api.actions';
import { setLoader } from '../../actions/loaders.actions';

export default ({ dispatch }) => (next) => (action) => {

    next(action);

    switch(action.type) {
        case FETCH_SEARCH_RESULTS:
            const query = action.payload;
            //the actions dispatched here will be intercepted by the users middleware
            next(setLoader({ loading: true, feature: USERS }));
            next(apiRequest({
                data: null,
                method: 'GET',
                url: `/api/search/${query}`,
                timeout: 3000,
                feature: USERS,
                redirectTo: null,                
            }));
            break;
        default:
            break;
    }

}
