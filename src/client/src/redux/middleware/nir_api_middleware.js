import { API_REQUEST, apiError, apiSuccess } from "../../actions/api";
import { API_ROOT } from '../../utils/apiRoot';
import axios from 'axios';

//this is a true middleware that we would register in store.js

export const apiMiddleware = ({dispatch}) => (next) => (action) => {

    next(action);

    if (action.type.includes(API_REQUEST)) {
        
        const { body, url, method, feature } = action.meta;

        axios(url, )

        fetch(url, {body, method})
            .then(response => response.json())
            .then(response => dispatch(apiSuccess({response, feature})))
            .catch(error => dispatch(apiError({error: error, feature})))
    }
};