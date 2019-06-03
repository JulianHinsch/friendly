//state structure
const postsState = { 
    selectedPostId: null, 
    collection: {}, 
    loading: false
};

//compute new state (write)
export const postsReducer = (posts = postsState, action) => { 
    switch (action.type) {
        case SET_POSTS:
            return Object.assign(state, action.payload);
        case UPDATE_POST: 
            return Object.assign(state, action.payload);
        case REMOVE_POST:
            return Object.assign(state, action.payload);
        case SELECT_POST:
            return Object.assign(state,action.payload);
        default: 
            return posts;
    } 
};

//select from state(read)

export const getPostsIds = (state) => {
    return Object.keys(state.posts.collection);
}

export const getSelectedBook = (state) => {
    return state.posts.selected[state.posts.selectedPostId];
}
