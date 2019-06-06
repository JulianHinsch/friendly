import { AUTH } from '../actions/auth';
import { API_SUCCESS } from '../actions/api';
import { browserHistory } from 'react-router';

export default ({dispatch}) => (next) => (action) => {
    next(action);
    if(action.type === `${AUTH} ${API_SUCCESS}`) {
        browserHistory.push('/');
    }
}