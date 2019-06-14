import { dataNormalizing } from '../../actions/data.actions';
import { normalize, schema } from 'normalizr';
import { POSTS } from '../../actions/posts.actions';
import { USERS } from '../../actions/users.actions';

/**
 * This middleware normalizes server responses into separate entities
 */
export default ({dispatch}) => (next) => (action) => {

    if(action.type.includes('SET') && action.meta.normalize) {

        //This middleware intercepts and dispatches the same action
        //so, in order to avoid the appearance of duplication in our log, we dispatch this action
        dispatch(dataNormalizing({ feature: action.meta.feature }))

        const originalData = action.payload;   
        let normalizedData;         

        let user, post, comment, reaction, follow;

        comment = new schema.Entity('comments');
        reaction = new schema.Entity('reactions');
        follow = new schema.Entity('follow');

        switch(action.meta.feature) {
            //app only fetches users and posts, everything else is nested
            case POSTS:
                user = new schema.Entity('users');            
                post = new schema.Entity('posts', {
                    comments: [ comment ],
                    reactions: [ reaction ],
                    user: user,
                });
                normalizedData = normalize(originalData, [ post ]);
                next(Object.keys(normalizedData.entities).map(entity => ({
                    type: `SET ${entity.toUpperCase()}`,
                    payload: normalizedData.entities[entity],
                    meta: {
                        normalize: false,                        
                    }
                })));                
                break;
            case USERS:
                user = new schema.Entity('users', {
                    posts: [ post ],
                    comments: [ comment ],
                    reactions: [ reaction ],
                    follows: [ follow ],
                });
                post = new schema.Entity('post');
                normalizedData = normalize(originalData, [ user ]);
                next(Object.keys(normalizedData.entities).map(entity => ({
                    type: `SET ${entity.toUpperCase()}`,
                    payload: normalizedData.entities[entity],
                    meta: {
                        normalize: false,
                    }
                })));
                break;
            default:
                break;
        }
        next(action);
    } else {
        next(action);
    }
}