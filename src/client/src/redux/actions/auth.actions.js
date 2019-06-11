export const AUTH = '[Auth]';

export const LOG_IN = `${AUTH} LOG_IN`;
export const SIGN_UP = `${AUTH} SIGN_UP`;
export const LOG_OUT = `${AUTH} LOG_OUT`;
export const SET_AUTH = `${AUTH} SET_AUTH`;

export const logIn = (credentials) => ({
    type: LOG_IN,
    payload: credentials,
});

export const signUp = (credentials) => ({
    type: SIGN_UP,
    payload: credentials,
});

export const logOut = () => ({
    type: LOG_OUT,
});

export const setAuth = (auth) => ({
    type: SET_AUTH,
    payload: auth,
});