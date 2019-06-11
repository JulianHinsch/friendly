export const FOLLOWS = '[Follows]';

export const CREATE_FOLLOW = `${FOLLOWS} CREATE`;
export const DELETE_FOLLOW = `${FOLLOWS} DELETE`;

export const createFollow = ({ follow }) => ({
    type: CREATE_FOLLOW,
    payload: follow,
});

export const deleteFollow = ({ id }) => ({
    type: DELETE_FOLLOW,
    payload: id,
});