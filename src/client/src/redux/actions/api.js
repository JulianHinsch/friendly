import axios from 'axios';

import { API_ROOT } from '../../utils/apiRoot';

export const API_START = 'API_START';
export const API_SUCCESS = 'API_SUCCESS';
export const API_ERROR = 'API_ERROR';

//this action creator returns a function because its a 'thunk'
export const apiRequest = ({ data, method, url, feature }) => {
     console.log('i got here');
    return async dispatch => {
        dispatch(apiStart({ feature }));
        if(url.charAt(0)==='/') {
            url = url.substr(1);
        }
        try {
            let config = {
                method,
                headers: {
                    'Content-Type': 'application/json',
                },
                withCredentials: process.env.NODE_ENV === 'development' ? true : false,
                data,
            }
            let result = await axios(`${API_ROOT}/${url}`, config)
            dispatch(apiSuccess({ result, feature }));
        } catch (error) {
            dispatch(apiError({ error, feature }));            
        }
	}
}

export const apiStart = ({ feature }) => ({
    type: `${feature} ${API_START}`,
    payload: { loading: true },
    meta: { feature }
});

export const apiSuccess = ({ response, feature }) => ({
    type: `${feature} ${API_SUCCESS}`,
    payload: { loading: false, response },
    meta: { feature }
});

export const apiError = ({ error, feature }) => ({
    type: `${feature} ${API_ERROR}`,
    payload: { loading: false, error },
    meta: { feature }
});
