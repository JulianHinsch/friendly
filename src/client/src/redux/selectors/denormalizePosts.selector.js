import { schema, denormalize } from 'normalizr';

export default (state) => {
    
    const user = new schema.Entity('users');
    const comment = new schema.Entity('comments');
    const reaction = new schema.Entity('reactions');
    const post = new schema.Entity('posts', {
        comments: [ comment ],
        reactions: [ reaction ],
        user: user,
    });

    //TODO
    //this is where we can set which posts we want to denormalize (i.e. not all of them) 
    //we could do this by leveraging another selector like getPostIdsByUser or something
    const input = Object.keys(state.posts.collection); 

    const postsSchema = [ post ];
    const entities = { 
        posts: state.posts.collection,
        users: state.users.collection,
        reactions: state.reactions.collection,
        comments: state.comments.collection,
    };

    const denormalizedData = denormalize(input, postsSchema, entities);
    if(denormalizedData.length > 0) {
        console.log('Denormalized Data', denormalizedData);        
    }

    return denormalizedData;
}