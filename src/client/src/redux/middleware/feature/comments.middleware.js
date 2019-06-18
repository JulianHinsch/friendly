import { COMMENTS, CREATE_COMMENT, DELETE_COMMENT, setComments } from '../../actions/comments.actions';
import { API_SUCCESS, API_ERROR, apiRequest } from '../../actions/api.actions';
import { setLoader } from '../../actions/loaders.actions';

export default () => (next) => (action) => {
    
    next(action);

    switch(action.type) {
        case CREATE_COMMENT: 
            const { comment } = action.payload;
            next(setLoader({ feature: COMMENTS, loading: true }));            
            next(apiRequest({ 
                data: comment, 
                method: 'POST', 
                url: '/api/comments', 
                timeout: 3000,
                feature: COMMENTS 
            }));
            break;
        case DELETE_COMMENT:
            const { id } = action.payload;
            next(setLoader({ feature: COMMENTS, loading: true }));            
            next(apiRequest({
                data: null,
                method: 'DELETE',
                url: `/api/comments/${id}`, 
                timeout: 3000,
                feature: COMMENTS,
            }));
            break;                
        case `${COMMENTS} ${API_SUCCESS}`:
            next(setComments({
                //TODO
            }));
            next(setLoader({ feature: COMMENTS, loading: false }));                        
            break; 
        case `${COMMENTS} ${API_ERROR}`:
            const error = action.payload;
            console.log(error);
            next(setLoader({ feature: COMMENTS, loading: false })); 
            break;
        default:
            break;
    }
}
    