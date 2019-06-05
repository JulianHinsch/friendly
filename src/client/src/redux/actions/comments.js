export const COMMENTS = '[Comments]';

export const ADD_COMMENT = `${COMMENTS} ADD`;
export const DELETE_COMMENT = `${COMMENTS} DELETE`;

export const addComment = ({ comment }) => ({
    type: ADD_COMMENT,
    payload: comment,
});

export const deleteComment = ({ id }) => ({
    type: DELETE_COMMENT,
    payload: id,
});