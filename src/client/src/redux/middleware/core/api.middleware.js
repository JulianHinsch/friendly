import { API_REQUEST, apiError, apiSuccess } from "../../actions/api.actions";
import { API_ROOT } from '../../utils/apiRoot';
import axios from 'axios';

export const apiMiddleware = ({dispatch}) => (next) => (action) => {

    next(action);

    if (action.type.includes(API_REQUEST)) {
        
        const { data, url, method, feature } = action.meta;

        axios(`${API_ROOT}/${url}`, {
            method,
            headers: {
                'Content-Type': 'application/json',
            },
            withCredentials: process.env.NODE_ENV === 'development',
            data,
        })
        .then(response => dispatch(apiSuccess({ response, feature })))
        .catch(error => dispatch(apiError({ error, feature })))
    }
};