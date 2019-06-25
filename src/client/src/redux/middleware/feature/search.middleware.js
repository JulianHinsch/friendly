import { SEARCH, FETCH_SEARCH_RESULTS } from '../../actions/search.actions';
import { USERS } from '../../actions/users.actions';
import { apiRequest, API_SUCCESS, API_ERROR } from '../../actions/api.actions';
import { normalizeData } from '../../actions/data.actions';
import { setLoader } from '../../actions/loaders.actions';

export default ({ dispatch }) => (next) => (action) => {

    next(action);

    switch(action.type) {
        case FETCH_SEARCH_RESULTS:
            const query = action.payload;
            //the actions dispatched here will be intercepted by the users middleware
            next(setLoader({ feature: USERS, loading: true }));
            next(setLoader({ feature: SEARCH, loading: true }));             
            next(apiRequest({
                data: null,
                method: 'GET',
                url: `/api/search/${query}`,
                timeout: 3000,
                feature: SEARCH,
                redirectTo: null,
            }));
            break;
        case `${SEARCH} ${API_SUCCESS}`:
            console.log(action.payload);
            const users = action.payload;
            next(normalizeData({ feature: USERS, data: users }));
            next(setLoader({ feature: SEARCH, loading: false }));
            next(setLoader({ feature: USERS, loading: false }));
            break;
        case `${SEARCH} ${API_ERROR}`: 
            const error = action.payload;
            console.log(error);
            next(setLoader({ feature: SEARCH, loading: false })); 
            next(setLoader({ feature: USERS, loading: false }));
            break;
        default:
            break;
    }

}
