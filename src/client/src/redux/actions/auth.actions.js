export const AUTH = '[Auth]';

export const LOG_IN = `${AUTH} LOG_IN`;
export const SIGN_UP = `${AUTH} SIGN_UP`;
export const LOG_OUT = `${AUTH} LOG_OUT`;
export const GET_AUTH = `${AUTH} GET`;
export const SET_AUTH = `${AUTH} SET`;

export const logIn = ({ credentials, redirectTo }) => ({
    type: LOG_IN,
    payload: credentials,
    meta: {
        redirectTo
    }
});

export const signUp = ({ user }) => ({
    type: SIGN_UP,
    payload: user,
});

export const logOut = () => ({
    type: LOG_OUT,
});

export const getAuth = () => ({
    type: GET_AUTH,
});

export const setAuth = ({ auth }) => ({
    type: SET_AUTH,
    payload: auth,
    meta: { 
        feature: AUTH,
    }
});

