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
    const posts = state.posts.collection;
    return Object.keys(posts).reduce((postArray = [], postId) => {
        postArray.push(posts[postId])
        return postArray;
    }, [])
}
