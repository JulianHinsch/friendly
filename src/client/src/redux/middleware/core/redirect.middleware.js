import { AUTH } from '../../actions/auth.actions';
import { API_SUCCESS } from '../../actions/api.actions';
import { CLEAR_STORE } from '../../actions/data.actions';
import history from '../../../history';

export default ({ dispatch }) => (next) => (action) => {
     
    next(action);

    switch(action.type) {
        case `${AUTH} ${API_SUCCESS}`:
            history.push(action.meta.redirectTo || '/');
            break;
        case CLEAR_STORE:
            history.push('/');
            break;
        default:
            break;
    }
}