export default (state, idArray) => {
    const posts = state.posts.collection;
    if (idArray) {
        return idArray.map(id => posts[id]);
    } else {
        return Object.keys(posts).map(id => posts[id]);
    }
}
