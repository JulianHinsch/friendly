import { REACTIONS, CREATE_REACTION, DELETE_REACTION, setReactions } from '../../actions/reactions.actions';
import { API_SUCCESS, API_ERROR, apiRequest } from '../../actions/api.actions';

export default () => (next) => (action) => {
    
    next(action);

    switch(action.type) {
        case CREATE_REACTION:
            const { reaction } = action.payload; 
            next(apiRequest({ 
                data: reaction, 
                method: 'POST', 
                url: '/api/reactions',
                timeout: 3000, 
                feature: REACTIONS,
            }));
            break;
        case DELETE_REACTION:
            const { id } = action.payload;
            next(apiRequest({ 
                data: null,
                method: 'DELETE', 
                url: `/api/reactions/${id}`,
                timeout: 3000,
                feature: REACTIONS,
            }));
            break;              
        case `${REACTIONS} ${API_SUCCESS}`:
            next(setReactions({
                //books: action.payload.items, normalizeKey: 'id'
            }))
            break; 
        case `${REACTIONS} ${API_ERROR}`:
            next(setReactions({

            }))
            break;
        default:
            break;
    }
}
    