import { API_REQUEST, apiError, apiSuccess } from "../../actions/api.actions";
import { API_ROOT } from '../../../utils/apiRoot';
import axios from 'axios';

export default ({ dispatch }) => (next) => (action) => {

    next(action);

    if (action.type.includes(API_REQUEST)) {
        
        const { url, method, timeout, feature, redirectTo } = action.meta;
        const data = action.payload;

        axios(`${API_ROOT}/${url.charAt(0) === '/' ? url.slice(1) : url}`, {
            method,
            headers: {
                'Content-Type': 'application/json',
            },
            withCredentials: process.env.NODE_ENV === 'development',
            timeout,            
            data,
        })
        .then(response => dispatch(apiSuccess({ response: response.data, feature, redirectTo })))
        .catch(error => dispatch(apiError({ error, feature })))
    }
};