import { dataNormalized } from '../../actions/data.actions';
import { normalize, schema } from 'normalizr';
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

        const user = new schema.Entity('users', {
            posts: [ post ],
            reactions: [ reaction ],
        });
        const posts = new schema.Entity('posts', {
            userId: user,
            comments: [ comment ],
            reactions: [ reaction ],
        });
        const reactions = new schema.Entity('reactions', {
            userId: user,
            postId: post,
        });
        const comments = new schema.Entity('comments', {
            userId: user,
            postId: post,
        });
        // const follows = new schema.Entity('follows');        
        // const messages  = new schema.Entity('messages');
        // const conversations = new schema.Entity('conversations');

        const normalizedData = normalize(originalData, user);

        console.log(normalizedData);


        //TODO: normalize state across multiple entities

        // import normalizr

        // const { posts, comments, reactions, users } = normalizr(action.payload)

        // next([ 
        //    { type: SET_POSTS, payload: posts, normalizeKey: null }
        //    { type: SET_COMMENTS, payload: comments, normalizeKey: null }
        //    { type: SET_REACTIONS, payload: reactions, normalizeKey: null }
        //    { type: SET_USERS, payload: users, normalizeKey: null }
        // ])


    } else {
        next(action);
    }
}