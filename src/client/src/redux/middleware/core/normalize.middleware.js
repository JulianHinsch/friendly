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
        console.log('Original Data:', originalData);

        let normalizedData;
        
        let user, post, comment, reaction, follow;

        comment = new schema.Entity('comments');
        reaction = new schema.Entity('reactions');
        follow = new schema.Entity('follow');

        switch(action.meta.feature) {
            case USERS:
                post = new schema.Entity('posts');
                user = new schema.Entity('users', {
                    posts: [ post ],
                    comments: [ comment ],
                    reactions: [ reaction ],
                });
                normalizedData = normalize(originalData, [ user ]);
                console.log('Normalized Data:', normalizedData);
                next(Object.keys(normalizedData.entities).map(entity => ({
                    type: getActionType(entity),
                    payload: normalizedData.entities[entity],
                })));
                break;
            case POSTS:
                user = new schema.Entity('users');
                post = new schema.Entity('posts', {
                    comments: [ comment ],
                    reactions: [ reaction ],
                    user: user,
                });
                normalizedData = normalize(originalData, [ post ]);
                console.log('Normalized Data:', normalizedData);
                next(Object.keys(normalizedData.entities).map(entity => ({
                    type: getActionType(entity),
                    payload: normalizedData.entities[entity],
                })));
                break;
            case FOLLOWS:
                user = new schema.Entity('users');
                follow = new schema.Entity('follows', {
                    user: user,
                });
                normalizedData = normalize(originalData, [ follow ]);
                console.log('Normalized Data:', normalizedData);
                next(Object.keys(normalizedData.entities).map(entity => ({
                    type: getActionType(entity),
                    payload: normalizedData.entities[entity],
                })));


                break;
            default:
                break;
        }


    } else {
        next(action);
    }
}


/*
        let originalData = action.payload;
        console.log('Original Data:', originalData);

        //normalizr only works with arrays
        // if(!Array.isArray(originalData)) {
        //     originalData = [originalData];
        // }




        console.log(action);


        //This middleware intercepts and dispatches the same action
        //so, in order to avoid the appearance of duplication in our log, we dispatch this action
        dispatch(dataNormalizing({ feature: action.meta.feature }))

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
                console.log('Normalized Data:', normalizedData);
                //this sets posts, users, comments, reactions, etc..
                next(Object.keys(normalizedData.entities).map(entity => ({
                    type: getActionType(entity),
                    payload: normalizedData.entities[entity],
                    meta: {
                        normalize: false,
                    }
                })));
                next(setSelectedData({ feature: POSTS, idArray: normalizedData.result }));
                break;
            case USERS:
                post = new schema.Entity('posts');
                user = new schema.Entity('users', {
                    posts: [ post ],
                    comments: [ comment ],
                    reactions: [ reaction ],
                    follows: [ follow ],
                });
                normalizedData = normalize(originalData, [ user ]);
                console.log('Normalized Data:', normalizedData);
                //this sets users, posts, comments, reactions, follows etc..             
                next(Object.keys(normalizedData.entities).map(entity => ({
                    type: getActionType(entity),
                    payload: normalizedData.entities[entity],
                    meta: {
                        normalize: false,
                    }
                })));
                next(setSelectedData({ feature: USERS, idArray: normalizedData.result }));
                break;
            default:
                break;
        }
    } else {
        next(action);
    }
}

*/