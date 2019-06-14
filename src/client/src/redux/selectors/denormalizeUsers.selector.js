import { schema, denormalize } from 'normalizr';

export default (state) => {
    
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

    //TODO
    //this is where we can set which users we want to denormalize (i.e. not all of them) 
    //we could do this by leveraging another selector
    const input = Object.keys(state.users.collection); 

    const usersSchema = [ user ];
    const entities = { 
        posts: state.posts.collection,
        users: state.users.collection,
        reactions: state.reactions.collection,
        comments: state.comments.collection,
        follows: state.follows.collection,
    };

    const denormalizedData = denormalize(input, usersSchema, entities);
    console.log('Denormalized Data:', denormalizedData);
    
    return denormalizedData;
}