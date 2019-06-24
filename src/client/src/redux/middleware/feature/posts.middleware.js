import { POSTS, CREATE_POST, DELETE_POST, setPosts } from '../../actions/posts.actions';
import { API_SUCCESS, API_ERROR, apiRequest } from '../../actions/api.actions';
import { setLoader } from '../../actions/loaders.actions';

export default ({ dispatch }) => (next) => (action) => {
    
    next(action);

    switch(action.type) {
        case CREATE_POST: 
            const post = action.payload;
            next(apiRequest({
                data: post, 
                method: 'POST', 
                url: '/api/posts', 
                timeout: 3000,
                feature: POSTS, 
                redirectTo: null,
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
                redirectTo: null,             
            }));
            break;
        case `${POSTS} ${API_SUCCESS}`:
            const posts = action.payload;
            next(setPosts({ posts }));
            next(setLoader({ feature: POSTS, loading: false }));
            break; 
        case `${POSTS} ${API_ERROR}`:
            const error = action.payload;
            console.log(error);
            next(setLoader({ feature: POSTS, loading: false }));            
            break;
        default:
            break;
    }
}
    