import { PROFILE } from '../actions/profile.actions';
import { SET_LOADER } from '../actions/loaders.actions';

const defaultState = {
    loading: false,
}

export default (state = defaultState, action) => {
    switch(action.type) {
        case `${PROFILE} ${SET_LOADER}`:
            return Object.assign({}, state, { loading: action.payload });
        default:
            return state;
    }
}
