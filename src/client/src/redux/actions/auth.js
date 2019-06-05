export const AUTH = '[Auth]';

export const LOG_IN = `${AUTH} LOG_IN`;
export const SIGN_UP = `${AUTH} SIGN_UP`;
export const LOG_OUT = `${AUTH} LOG_OUT`;
export const GET_USER_INFO = `${AUTH} GET_USER_INFO`;

export const logIn = ({ user }) => ({
    type: LOG_IN,
    payload: user,
})

export const signUp = ({ user }) => ({
    type: SIGN_UP,
    payload: user,
})

export const logOut = () => ({
    type: LOG_OUT,
});

export const getUserInfo = () => ({
    type: GET_USER_INFO,
})




