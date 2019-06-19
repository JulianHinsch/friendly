import { schema, denormalize } from 'normalizr';

export default (state, idArray) => {
    
    const post = new schema.Entity('posts');         
    const comment = new schema.Entity('comments');
    const reaction = new schema.Entity('reactions');
    const follow = new schema.Entity('follows');       
    const user = new schema.Entity('users', {
        posts: [ post ],
        comments: [ comment ],
        reactions: [ reaction ],
        follows: [ follow ],
        user: user,
    });

    const input = idArray || Object.keys(state.posts.collection);     

    const usersSchema = [ user ];
    const entities = { 
        posts: state.posts.collection,
        users: state.users.collection,
        reactions: state.reactions.collection,
        comments: state.comments.collection,
        follows: state.follows.collection,
    };

    const denormalizedData = denormalize(input, usersSchema, entities);
    if(denormalizedData.length > 0) {
        console.log('Denormalized Data', denormalizedData);        
    }
    
    return denormalizedData;
}