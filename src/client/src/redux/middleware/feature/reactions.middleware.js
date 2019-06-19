import { REACTIONS, CREATE_REACTION, DELETE_REACTION, setReactions } from '../../actions/reactions.actions';
import { API_SUCCESS, API_ERROR, apiRequest } from '../../actions/api.actions';
import { setLoader } from '../../actions/loaders.actions';

export default () => (next) => (action) => {
    
    next(action);

    switch(action.type) {
        case CREATE_REACTION:
            const reaction = action.payload; 
            next(setLoader({ feature: REACTIONS, loading: true }));            
            next(apiRequest({ 
                data: reaction,
                method: 'POST',
                url: '/api/reactions',
                timeout: 3000,
                feature: REACTIONS,
            }));
            break;
        case DELETE_REACTION:
            const id = action.payload;
            next(setLoader({ feature: REACTIONS, loading: true }));            
            next(apiRequest({ 
                data: null,
                method: 'DELETE', 
                url: `/api/reactions/${id}`,
                timeout: 3000,
                feature: REACTIONS,
            }));
            break;
        case `${REACTIONS} ${API_SUCCESS}`:
            const reactions = action.payload;
            next(setReactions({ reactions }));
            next(setLoader({ feature: REACTIONS, loading: false }));
            break; 
        case `${REACTIONS} ${API_ERROR}`:
            const error = action.payload;
            console.log(error)
            next(setLoader({ feature: REACTIONS, loading: false }))            
            break;
        default:
            break;
    }
}
    