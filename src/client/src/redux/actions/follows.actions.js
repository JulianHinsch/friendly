export const FOLLOWS = '[Follows]';

export const CREATE_FOLLOW = `${FOLLOWS} CREATE`;
export const UPDATE_FOLLOW = `${FOLLOWS} UPDATE`;
export const DELETE_FOLLOW = `${FOLLOWS} DELETE`;
export const SET_FOLLOWS = `${FOLLOWS} SET`;

export const createFollow = ({ follow }) => ({
    type: CREATE_FOLLOW,
    payload: follow,
});

export const updateFollow = ({ follow }) => ({
    type: UPDATE_FOLLOW,
    payload: follow,
});

export const deleteFollow = ({ id }) => ({
    type: DELETE_FOLLOW,
    payload: id,
});

export const setFollows = ({ follows }) => ({
    type: SET_FOLLOWS,
    payload: follows,
    meta: {
        feature: FOLLOWS,
    }
})

