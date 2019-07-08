import { PROFILE, FETCH_PROFILE } from '../../actions/profile.actions';
import { USERS } from '../../actions/users.actions';
import { POSTS } from '../../actions/posts.actions';
import { FOLLOWS } from '../../actions/follows.actions';
import { apiRequest, API_SUCCESS, API_ERROR } from '../../actions/api.actions';
import { normalizeData } from '../../actions/data.actions';
import { setLoader } from '../../actions/loaders.actions';

export default ({ dispatch }) => (next) => (action) => {

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
                feature: PROFILE,
                redirectTo: null,
            }));
            break;
        case `${PROFILE} ${API_SUCCESS}`:
            const { follows, users } = action.payload;
            next(normalizeData({ feature: USERS, data: users }));
            next(normalizeData({ feature: FOLLOWS, data: follows }));
            next(setLoader({ feature: POSTS, loading: false }));
            next(setLoader({ feature: USERS, loading: false }));
            break;
        case `${PROFILE} ${API_ERROR}`: 
            const error = action.payload;
            console.log(error);
            next(setLoader({ feature: POSTS, loading: false }));
            next(setLoader({ feature: USERS, loading: false }));
            break;
        default:
            break;
    }

}
