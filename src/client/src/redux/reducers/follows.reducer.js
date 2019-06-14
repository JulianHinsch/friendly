import { SET_FOLLOWS, UPDATE_FOLLOW, DELETE_FOLLOW } from '../actions/follows.actions';

const defaultState = {
    selectedFollowId: null,
    loading: false,
    collection: {},
}

export default (state = defaultState, action) => {
    switch(action.type) {
        case SET_FOLLOWS:
            const follows = action.payload;
            return Object.assign({}, state, { collection: follows });
        case DELETE_FOLLOW:
            //TODO
            return state;
        case UPDATE_FOLLOW:
            //TODO
            return state;
        default:
            return state;
    }
}

