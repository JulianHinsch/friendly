export const REACTIONS = '[Reactions]';

export const CREATE_REACTION = `${REACTIONS} CREATE`;
export const DELETE_REACTION = `${REACTIONS} DELETE`;

export const createReaction = ({ reaction }) => ({
    type: CREATE_REACTION,
    payload: reaction,
});

export const deleteReaction = ({ id }) => ({
    type: DELETE_REACTION,
    payload: id,
});