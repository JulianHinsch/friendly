import { FEED, FETCH_FEED } from '../../actions/feed.actions';
import { POSTS } from '../../actions/posts.actions';
import { FOLLOWS } from '../../actions/follows.actions';
import { apiRequest, API_SUCCESS, API_ERROR } from '../../actions/api.actions';
import { normalizeData } from '../../actions/data.actions';
import { setLoader } from '../../actions/loaders.actions';

export default ({ dispatch }) => (next) => (action) => {

    next(action);

    switch(action.type) {
        case FETCH_FEED:
            const userId = action.payload;
            const { limit, offset } = action.meta;
            next(setLoader({ feature: POSTS, loading: true }));
            next(setLoader({ feature: FOLLOWS, loading: true }));
            next(apiRequest({
                data: null, 
                method: 'GET',
                url: `/api/feed/${userId}?limit=${limit}&offset=${offset}`,
                timeout: 3000,
                feature: FEED,
                redirectTo: null,                
            }));
            break;
        case `${FEED} ${API_SUCCESS}`: 
            const { follows, posts } = action.payload;
            next(normalizeData({ feature: POSTS, data: posts }));
            next(normalizeData({ feature: FOLLOWS, data: follows }));
            next(setLoader({ feature: POSTS, loading: false }));
            next(setLoader({ feature: FOLLOWS, loading: false }));
            break;
        case `${FEED} ${API_ERROR}`: 
            const error = action.payload;
            console.log(error);
            break;
        default:
            break;
    }

}
