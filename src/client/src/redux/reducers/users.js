const DELETE_USER = 'DELETE_USER';
const FETCH_USER = 'FETCH_USER';

const defaultState = {
    error: null,
    loading: false,
    items: {}
}

export const usersReducer = (state = defaultState, action) => {
    switch(action.type) {
        case DELETE_USER:
            return Object.assign(state, action.payload);
        case FETCH_USER:
            return Object.assign(state, action.payload);
        default:
            return state;
    }
}



