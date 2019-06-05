const ADD_REACTION = 'ADD_REACTION';
const DELETE_REACTION = 'DELETE_REACTION';

const defaultState = {
    error: null,
    loading: false,
    items: {}
}

export const reactionsReducer = (state = defaultState, action) => {
    switch(action.type) {
        case ADD_REACTION:
            return Object.assign(state, action.payload);
        case DELETE_REACTION:
            return Object.assign(state, action.payload);
        default:
            return state;
    }
}



