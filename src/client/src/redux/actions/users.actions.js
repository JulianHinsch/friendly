export const USERS = '[Users]';

export const UPDATE_USER = `${USERS} UPDATE`;
export const DELETE_USER = `${USERS} DELETE`;

export const updateUser = ({ user }) => ({
    type: UPDATE_USER,
    payload: user,
});

export const deleteUser = ({ id }) => ({
    type: DELETE_USER,
    payload: id,
});