import { COMMENTS, CREATE_COMMENT, DELETE_COMMENT, setComments } from '../../actions/comments.actions';
import { API_SUCCESS, API_ERROR, apiRequest } from '../../actions/api.actions';
import apiRoot from '../../../utils/apiRoot';

export default () => (next) => (action) => {
    
    next(action);

    switch(action.type) {
        case CREATE_COMMENT: 
            next(apiRequest({ 
                data: action.payload, 
                method: 'POST', 
                url: '/api/comments', 
                feature: COMMENTS 
            }));
            break;
        case DELETE_COMMENT:
            next(apiRequest({
                method: 'DELETE',
                url: `/api/comments/${action.payload.id}`, 
                feature: COMMENTS 
            }));
            break;                
        case `${COMMENTS} API_SUCCESS`:
            next(setComments({
                //books: action.payload.items, normalizeKey: 'id'
            }))
            break; 
        case `${COMMENTS} API_ERROR`:
            next(setComments({

            }))
            break;
        default:
            break;
    }
}
    