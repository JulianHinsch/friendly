import { COMMENTS, CREATE_COMMENT, DELETE_COMMENT, setComments } from '../../actions/comments.actions';
import { API_SUCCESS, API_ERROR, apiRequest } from '../../actions/api.actions';

export default ({ dispatch }) => (next) => (action) => {
    
    next(action);

    switch(action.type) {
        case CREATE_COMMENT: 
            const { comment } = action.payload;
            next(apiRequest({ 
                data: comment, 
                method: 'POST', 
                url: '/api/comments', 
                timeout: 3000,
                feature: COMMENTS,
                redirectTo: null,                
            }));
            break;
        case DELETE_COMMENT:
            const { id } = action.payload;
            next(apiRequest({
                data: null,
                method: 'DELETE',
                url: `/api/comments/${id}`, 
                timeout: 3000,
                feature: COMMENTS,
                redirectTo: null,                
            }));
            break;                
        case `${COMMENTS} ${API_SUCCESS}`:
            next(setComments({ comments: { [action.payload.id]: { ...action.payload }}}));
            break; 
        case `${COMMENTS} ${API_ERROR}`:
            const error = action.payload;
            console.log(error);
            break;
        default:
            break;
    }
}
    