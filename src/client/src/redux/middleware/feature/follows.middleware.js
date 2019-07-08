import { FOLLOWS, CREATE_FOLLOW, DELETE_FOLLOW, UPDATE_FOLLOW, setFollows } from '../../actions/follows.actions';
import { API_SUCCESS, API_ERROR, apiRequest } from '../../actions/api.actions';

export default ({ dispatch }) => (next) => (action) => {
    
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
                redirectTo: null,                
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
                redirectTo: null,                
            }));
            break;
        case UPDATE_FOLLOW:
            //const follow = action.payload;
            //todo
            break;
        case `${FOLLOWS} ${API_SUCCESS}`:
            next(setFollows({follows: { [action.payload.id]: { ...action.payload } }}));
            break;
        case `${FOLLOWS} ${API_ERROR}`:
            const error = action.payload;
            console.log(error);
            break;
        default:
            break;
    }
}
    