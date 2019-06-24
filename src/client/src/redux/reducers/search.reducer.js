import { SEARCH } from '../actions/search.actions';
import { SET_LOADER } from '../actions/loaders.actions';

const defaultState = {
    loading: false,
}

export default (state = defaultState, action) => {
    switch(action.type) {
        case `${SEARCH} ${SET_LOADER}`:
            return Object.assign({}, state, { loading: action.payload });
        default:
            return state;
    }
}
