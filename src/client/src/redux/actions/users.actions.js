export const USERS = '[Users]';

export const DELETE_USER = `${USERS} DELETE`;
export const SET_USERS = `${USERS} SET`;

export const deleteUser = ({ id }) => ({
    type: DELETE_USER,
    payload: id,
});

export const setUsers = ({ users, normalize }) => ({
    type: SET_USERS,
    payload: users,
    meta: {
        normalize,
        feature: USERS,
    }
})