export const POSTS = '[Posts]';

export const ADD_POST = `${POSTS} ADD`;
export const DELETE_POST = `${POSTS} DELETE`;

export const addPost = ({ post }) => ({
    type: ADD_POST,
    payload: post,
});

export const deletePost = ({ id }) => ({
    type: DELETE_POST,
    payload: id,
});