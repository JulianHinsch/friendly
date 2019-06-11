import { AUTH } from '../actions/auth';
import { API_SUCCESS } from '../actions/api';
import history from '../../history';

export default ({dispatch}) => (next) => (action) => {
    next(action);
    if(action.type === `${AUTH} ${API_SUCCESS}`) {
        history.push('/');
    }
}