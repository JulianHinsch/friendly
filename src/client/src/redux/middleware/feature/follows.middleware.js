import { FOLLOWS, CREATE_FOLLOW, DELETE_FOLLOW, UPDATE_FOLLOW, setFollows } from '../../actions/follows.actions';
import { API_SUCCESS, API_ERROR, apiRequest } from '../../actions/api.actions';
import { setLoader } from '../../actions/loaders.actions';

export default () => (next) => (action) => {
    
    next(action);

    switch(action.type) {
        case CREATE_FOLLOW:
            const follow = action.payload;
            next(setLoader({ feature: FOLLOWS, loading: true }));            
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
            next(setLoader({ feature: FOLLOWS, loading: true }));            
            next(apiRequest({
                data: null,
                method: 'DELETE',
                url: `/api/follows/${id}`,
                timeout: 3000,
                feature: FOLLOWS,    
            }));
            break;
        case UPDATE_FOLLOW:
            //const follow = action.payload;
            //todo
            break;
        case `${FOLLOWS} ${API_SUCCESS}`:
            //const follow = action.payload;
            next(setFollows({
                //TODO
            }));
            next(setLoader({ feature: FOLLOWS, loading: false }));
            break;
        case `${FOLLOWS} ${API_ERROR}`:
            const error = action.payload;
            console.log(error);
            next(setLoader({ feature: FOLLOWS, loading: false }));            
            break;
        default:
            break;
    }
}
    