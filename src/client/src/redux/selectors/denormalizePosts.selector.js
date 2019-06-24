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

    const input = state.posts.selectedPostArray;
    
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