/**
 * This makes it possible to dispatch an array of actions i.e.
 * next([
 *      createAction1(data)
 *      createAction2(data)
 * ])
 */
export default ({ dispatch }) => (next) => (action) => {
    if(Array.isArray(action)) {
        action.forEach(_action => next(_action))
    } else {
        next(action);
    }
}