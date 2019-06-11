import { SET_POSTS } from '../actions/posts.actions';

const defaultState = {
    selectedPostId: null,
    loading: false,
    error: null,
    collection: {},
}

export default (state = defaultState, action) => {
    switch(action.type) {
        case SET_POSTS:
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
}

//selectors

export const getPostsIds = (state) => {
    return Object.keys(state.posts.collection);
}

export const getSelectedPost = (state) => {
    return state.posts.selected[state.posts.selectedPostId];
}
