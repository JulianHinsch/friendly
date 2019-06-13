import { dataNormalized } from '../../actions/data.actions';

/**
 * 
 * This middleware transforms an array into an object with normalizeKey as key
 * and the rest of the object as value
 * This facilitates O(1) lookup by normalizeKey
 * 
 * ex. 
 * input: [{id: 1, data: 'foo'}{id: 2, data: 'bar'}]
 * output: {1: {id: 1, data: 'foo'}, 2: {id: 2, data: 'bar'}}
 * 
 */
export default ({dispatch}) => (next) => (action) => {
    if(action.type.includes('SET') && action.meta.normalizeKey) {

        //This middleware intercepts and dispatches the same action
        //so, in order to avoid the appearance of duplication in our log, we dispatch this action
        dispatch(dataNormalized({ feature: action.meta.feature }))

        console.log(action.payload);
        const normalizedData = action.payload.reduce((acc, item) => {
            acc[item[action.meta.normalizeKey]] = item;
            return acc;
        }, {});

        next({...action, payload: normalizedData, normalizeKey: null });

    } else {
        next(action);
    }
}