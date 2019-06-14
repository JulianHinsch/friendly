import { FOLLOWS, CREATE_FOLLOW, DELETE_FOLLOW, UPDATE_FOLLOW } from '../../actions/follows.actions';
import { API_SUCCESS, API_ERROR, apiRequest } from '../../actions/api.actions';

export default () => (next) => (action) => {
    
    next(action);

    switch(action.type) {
        case CREATE_FOLLOW:
            const follow = action.payload;
            next(apiRequest({
                data: follow,
                method: 'POST',
                url: '/api/follows',
                timeout: 3000,
                feature: FOLLOWS,
            }))
            break;
        case DELETE_FOLLOW:
            const id = action.payload;
            next(apiRequest({
                data: null,
                method: 'DELETE',
                url: `/api/follows/${id}`,
                timeout: 3000,
                feature: FOLLOWS,    
            }));
            break;
        case UPDATE_FOLLOW:
            //todo
            break;
        default:
            break;
    }
}
    