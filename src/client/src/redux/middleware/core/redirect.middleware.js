import { AUTH } from '../../actions/auth.actions';
import { API_SUCCESS } from '../../actions/api.actions';
import history from '../../../history';

export default ({dispatch}) => (next) => (action) => {
    next(action);
    //TODO separate into log in, sign up, log out
    if(action.type === `${AUTH} ${API_SUCCESS}`) {
        history.push('/');
    }
}