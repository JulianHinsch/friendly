export const API_REQUEST = 'API_REQUEST';
export const API_SUCCESS = 'API_SUCCESS';
export const API_ERROR   = 'API_ERROR';

export const apiRequest = ({ data, method, url, timeout, feature, redirectTo }) => ({
    type: `${feature} ${API_REQUEST}`,
    payload: data,
    meta: { method, url, timeout, feature, redirectTo }
});

export const apiSuccess = ({ response, feature, redirectTo }) => ({
    type: `${feature} ${API_SUCCESS}`,
    payload: response,
    meta: { feature, redirectTo }
});

export const apiError = ({ error, feature }) => ({
    type: `${feature} ${API_ERROR}`,
    payload: error,
    meta: { feature }
});