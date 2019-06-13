import { POSTS, FETCH_POSTS, CREATE_POST, DELETE_POST, setPosts } from '../../actions/posts.actions';
import { API_SUCCESS, API_ERROR, apiRequest } from '../../actions/api.actions';

export default () => (next) => (action) => {
    
    next(action);

    switch(action.type) {
        case FETCH_POSTS:
            const query = action.payload;
            next(apiRequest({
                data: null,
                method: 'GET',
                url: `/api/posts/${query}`,
                timeout: 3000,
                feature: POSTS,
            }));
            break;
        case CREATE_POST: 
            const post = action.payload;
            console.log(post);
            next(apiRequest({ 
                data: post, 
                method: 'POST', 
                url: '/api/posts', 
                timeout: 3000,
                feature: POSTS, 
            }));
            break;
        case DELETE_POST:
            const id = action.payload;
            next(apiRequest({
                data: null,
                method: 'DELETE',
                url: `/api/posts/${id}`,
                timeout: 3000,
                feature: POSTS,    
            }));
            break;
        case `${POSTS} ${API_SUCCESS}`:
            const posts = action.payload;
            next(setPosts({ posts, normalizeKey: 'id' }))
            break; 
        case `${POSTS} ${API_ERROR}`:
            const error = action.payload;
            console.log(error);
            break;
        default:
            break;
    }
}
    