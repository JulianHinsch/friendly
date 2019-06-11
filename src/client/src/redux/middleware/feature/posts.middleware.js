import { POSTS, CREATE_POST, DELETE_POST, setPosts } from '../../actions/posts.actions';
import { API_SUCCESS, API_ERROR, apiRequest } from '../../actions/api.actions';
import apiRoot from '../../../utils/apiRoot';

export default () => (next) => (action) => {
    
    next(action);

    switch(action.type) {
        case CREATE_POST: 
            next(apiRequest({ 
                data: action.payload, 
                method: 'POST', 
                url: '/api/posts', 
                feature: POSTS, 
            }));
            break;
        case DELETE_POST:
            next(apiRequest({ 
                method: 'DELETE', 
                url: '/api/posts/${action.payload.id}', 
                feature: POSTS
            }));
            break;               
        case `${POSTS} API_SUCCESS`:
            next(setPosts({
                //books: action.payload.items, normalizeKey: 'id'
            }))
            break; 
        case `${POSTS} API_ERROR`:
            next(setPosts({

            }))
            break;
        default:
            break;
    }
}
    