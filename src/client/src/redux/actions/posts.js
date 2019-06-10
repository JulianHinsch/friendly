export const POSTS = '[Posts]';

export const CREATE_POST = `${POSTS} CREATE`;
export const DELETE_POST = `${POSTS} DELETE`;

export const createPost = ({ post }) => ({
    type: CREATE_POST,
    payload: post,
});

export const deletePost = ({ id }) => ({
    type: DELETE_POST,
    payload: id,
});