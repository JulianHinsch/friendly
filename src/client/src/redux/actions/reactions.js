export const REACTIONS = '[Reactions]';

export const ADD_REACTION = `${REACTIONS} ADD`;
export const DELETE_REACTION = `${REACTIONS} DELETE`;

export const addReaction = ({ reaction }) => ({
    type: ADD_REACTION,
    payload: reaction,
});

export const deleteReaction = ({ id }) => ({
    type: DELETE_REACTION,
    payload: id,
});