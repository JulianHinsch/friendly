export const USERS = '[Users]';

export const FETCH_USERS = `${USERS} FETCH`;
export const UPDATE_USER = `${USERS} UPDATE`;
export const DELETE_USER = `${USERS} DELETE`;
export const SET_USERS = `${USERS} SET`;

export const fetchUsers = (query) => ({
    type: FETCH_USERS,
    payload: { query },
})

export const updateUser = (user) => ({
    type: UPDATE_USER,
    payload: { user },
});

export const deleteUser = (id) => ({
    type: DELETE_USER,
    payload: { id },
});

export const setUsers = ({ users, normalizeKey }) => ({
    type: SET_USERS,
    payload: { users },
    meta: {
        normalize: true,        
        feature: USERS,
    }
})