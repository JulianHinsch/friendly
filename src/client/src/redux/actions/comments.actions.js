export const COMMENTS = '[Comments]';

export const CREATE_COMMENT = `${COMMENTS} CREATE`;
export const DELETE_COMMENT = `${COMMENTS} DELETE`;

export const createComment = ({ comment }) => ({
    type: CREATE_COMMENT,
    payload: comment,
});

export const deleteComment = ({ id }) => ({
    type: DELETE_COMMENT,
    payload: id,
});