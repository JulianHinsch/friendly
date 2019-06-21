import { FETCH_FEED } from '../../actions/feed.actions';
import { POSTS } from '../../actions/posts.actions';
import { apiRequest } from '../../actions/api.actions';
import { setLoader } from '../../actions/loaders.actions';

export default () => (next) => (action) => {

    next(action);

    switch(action.type) {
        case FETCH_FEED:
            const userId = action.payload;
            const { limit, offset } = action.meta;
            //the actions dispatched here will be intercepted by the posts middleware
            next(setLoader({ loading: true, feature: POSTS }));
            next(apiRequest({
                data: null,
                method: 'GET',
                url: `/api/feed/${userId}?limit=${limit}&offset=${offset}`,
                timeout: 3000,
                feature: POSTS,
                redirectTo: null,                
            }));
            break;
        default:
            break;
    }

}
