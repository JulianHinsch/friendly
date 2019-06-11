const ADD_POST = 'ADD_POST';
const DELETE_POST = 'DELETE_POST';
const SELECT_POST = 'SELECT_POST';

const defaultState = { 
    selectedPostId: null, 
    collection: {}, 
    loading: false
};

export default (state = defaultState, action) => { 
    switch (action.type) {
        case ADD_POST:
            return Object.assign(state, action.payload);
        case DELETE_POST:
            return Object.assign(state, action.payload);
        case SELECT_POST:
            return Object.assign(state,action.payload);
        default: 
            return state;
    } 
};

//selectors

export const getPostsIds = (state) => {
    return Object.keys(state.posts.collection);
}

export const getSelectedPost = (state) => {
    return state.posts.selected[state.posts.selectedPostId];
}
