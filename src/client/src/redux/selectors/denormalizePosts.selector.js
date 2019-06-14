import { schema, denormalize } from 'normalizr';
import {  getPostsArray } from './posts.selector';

/*
I have some normalized state (redux store)
```js
{
users: [{ id, name, etc }...]
posts: [{ id, content, userId }...]
comments: [{ id, content, userId, postId }...]
}
```

I'm looking to transform into a list of posts, i.e.
```js
[
{id, comments: [id, content, user: {id, name}], user: {id, name}}
]
```

Any advice? 
*/

export default (state) => {

    let user, post, comment, reaction, follow;
    
    comment = new schema.Entity('comments');
    reaction = new schema.Entity('reactions');
    follow = new schema.Entity('follow');
    user = new schema.Entity('users');            
    post = new schema.Entity('posts', {
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
        follows: state.follows.collection,
    };

    return denormalize(input, postsSchema, entities);

}