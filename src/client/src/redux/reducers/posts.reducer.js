import { SET_POSTS, DELETE_POST, SELECT_POST } from '../actions/posts.actions';

const defaultState = {
    selectedPostId: null,
    loading: false,
    collection: {},
}

export default (state = defaultState, action) => {
    switch(action.type) {
        case SET_POSTS:
            const posts = action.payload;
            return Object.assign({}, state, { collection: posts });
        case DELETE_POST:
            return state;
        // case SELECT_POST:
        //     const id = action.id;
        //     return Object.assign({}, state, { selectedPostId: id });
        default:
            return state;
    }
}

//feature selectors

export const getPosts = (state) => {
    return state.posts.collection;
}

export const getPostIds = (state) => {
    return Object.keys(state.posts.collection);
}

export const getSelectedPost = (state) => {
    return state.posts.collection[state.posts.selectedPostId];
}

export const getPostsArray = (state) => {
    const { posts } = state;
    return Object.keys(posts).reduce((postArray = [], postId) => {
        postArray.push(posts[postId])
        return postArray;
    }, [])
}
