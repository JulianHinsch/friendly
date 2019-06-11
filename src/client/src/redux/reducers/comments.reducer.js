const ADD_COMMENT = 'ADD_COMMENT';
const DELETE_COMMENT = 'DELETE_COMMENT';

const defaultState = {
    error: null,
    loading: false,
    items: {}
}

export default (state = defaultState, action) => {
    switch(action.type) {
        case ADD_COMMENT:
            return Object.assign(state, action.payload);
        case DELETE_COMMENT:
            return Object.assign(state, action.payload);
        default:
            return state;
    }
}

