export default (state, idArray) => {
    const users = state.users.collection;
    if(idArray) {
        return idArray.map(id => users[id]);
    } else {
        return Object.keys(users).map(id => users[id]);
    }
}