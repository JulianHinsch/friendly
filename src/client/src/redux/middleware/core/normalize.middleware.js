import { NORMALIZE_DATA, setSelectedData } from '../../actions/data.actions';
import { normalize, schema } from 'normalizr';
import { POSTS } from '../../actions/posts.actions';
import { USERS } from '../../actions/users.actions';
import { FOLLOWS } from '../../actions/follows.actions';

const getActionType = (entity) => {
    return `[${entity[0].toUpperCase() + entity.substr(1)}] SET`;
}

export default ({ dispatch }) => (next) => (action) => {

    if(action.type.includes(NORMALIZE_DATA)) {

        let originalData = action.payload;
        //console.log('Original Data:', originalData);

        let normalizedData;
        
        let user, post, comment, reaction, follow;

        comment = new schema.Entity('comments');
        reaction = new schema.Entity('reactions');
        follow = new schema.Entity('follow');

        switch(action.meta.feature) {
            case USERS:
                post = new schema.Entity('posts', {
                    comments: [ comment ],
                    reactions: [ reaction ],
                    // user: user,
                });
                user = new schema.Entity('users', {
                    posts: [ post ],
                });
                normalizedData = normalize(originalData, [ user ]);
                //console.log('Normalized Data:', normalizedData);
                next(Object.keys(normalizedData.entities).map(entity => ({
                    type: getActionType(entity),
                    payload: normalizedData.entities[entity],
                })));
                next(setSelectedData({ feature: USERS, idArray: normalizedData.result}));
                if (normalizedData.entities.posts) {
                    next(setSelectedData({ feature: POSTS, idArray: Object.keys(normalizedData.entities.posts)}));                                    
                }
                break;
            case POSTS:
                user = new schema.Entity('users');
                post = new schema.Entity('posts', {
                    comments: [ comment ],
                    reactions: [ reaction ],
                    user: user,
                });
                normalizedData = normalize(originalData, [ post ]);
                //console.log('Normalized Data:', normalizedData);
                next(Object.keys(normalizedData.entities).map(entity => ({
                    type: getActionType(entity),
                    payload: normalizedData.entities[entity],
                })));
                next(setSelectedData({ feature: POSTS, idArray: normalizedData.result}));                
                break;
            case FOLLOWS:
                user = new schema.Entity('users');
                follow = new schema.Entity('follows', {
                    user: user,
                });
                normalizedData = normalize(originalData, [ follow ]);
                //console.log('Normalized Data:', normalizedData);
                next(Object.keys(normalizedData.entities).map(entity => ({
                    type: getActionType(entity),
                    payload: normalizedData.entities[entity],
                })));
                next(setSelectedData({ feature: FOLLOWS, idArray: normalizedData.result}));                
                break;
            default:
                break;
        }
    } else {
        next(action);
    }
}
