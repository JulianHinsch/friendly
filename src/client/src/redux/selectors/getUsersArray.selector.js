import getUserById from './getUserById.selector';

export default (state, idArray) => {
    if(idArray) {
        return idArray.map(id => getUserById(state, id));
    } else {
        return Object.keys(state.users.collection).map(id => getUserById(state, id));
    }
}