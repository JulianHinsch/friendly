export const COMMENTS = '[Comments]';

export const CREATE_COMMENT = `${COMMENTS} CREATE`;
export const DELETE_COMMENT = `${COMMENTS} DELETE`;
export const SET_COMMENTS = `${COMMENTS} SET`;

export const createComment = ({ comment }) => ({
    type: CREATE_COMMENT,
    payload: { comment },
});

export const deleteComment = ({ id }) => ({
    type: DELETE_COMMENT,
    payload: { id },
});

export const setComments = ({ comments, normalizeKey }) => ({
    type: SET_COMMENTS,
    payload: { comments },
    meta: {
        normalize: false,
        normalizeKey,
        feature: COMMENTS,
    }
})