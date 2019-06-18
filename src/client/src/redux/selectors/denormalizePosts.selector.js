import { schema, denormalize } from 'normalizr';

//TODO why is this not working for profile, but working for feed???

//Could it be, 
// that profile fetches i.e. all comments MADE by user 1 but not all comments ON a user's posts?
// whereas feed fetches EVERYTHING?
// this would explain why navigating to profile works, but refreshing profile doesn't
// YES, but...
// ALSO, when we fetch new data we are OVERRIDING old data in state, not merging with it!
// CHECK YOUR REDUCER LOGIC, BRO!  THIS IS BAD!

//So there are TWO problems here...
//Denormalizer actually works fine, but it won't be able to help if there is no data to denormalize BRO!

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
    console.log('Denormalized Data', denormalizedData);

    return denormalizedData;
}