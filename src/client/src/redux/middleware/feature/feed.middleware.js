import { FEED, FETCH_FEED } from '../../actions/feed.actions';
import { USERS, setUsers } from '../../actions/users.actions';
import { POSTS, setPosts } from '../../actions/posts.actions';
import { COMMENTS, setComments } from '../../actions/comments.actions';
import { REACTIONS, setReactions } from '../../actions/reactions.actions';
import { apiRequest, API_SUCCESS, API_ERROR } from '../../actions/api.actions';
import { setLoader } from '../../actions/loaders.actions';
import { setSelectedData } from '../../actions/data.actions';

export default ({ dispatch }) => (next) => (action) => {

    next(action);

    switch(action.type) {
        case FETCH_FEED:
            const userId = action.payload;
            const { limit, offset } = action.meta;
            next(setLoader({ feature: FEED, loading: true }));
            next(apiRequest({
                data: null,
                method: 'GET',
                url: `/api/feed/${userId}?limit=${limit}&offset=${offset}`,
                timeout: 3000,
                feature: FEED,
                redirectTo: null,
            }));
            break;
        case `${FEED} ${API_SUCCESS}`:
            const { posts } = action.payload;

            console.log(posts);

            // normalize nested data
            const   uniquePosts = {},
                    uniqueUsers = {},
                    uniqueComments = {},
                    uniqueReactions = {};

            posts.forEach(post => {
                uniqueUsers[post.user.id] = post.user;
                delete post.user;

                post.comments.forEach(comment => {
                    uniqueUsers[comment.user.id] = comment.user;
                    delete comment.user;
                    uniqueComments[comment.id] = comment;
                })
                delete post.comments;

                post.reactions.forEach(reaction => {
                    uniqueUsers[reaction.user.id] = reaction.user;
                    delete reaction.user;
                    uniqueReactions[reaction.id] = reaction;
                });
                delete post.reactions;

                uniquePosts[post.id] = post;
            });

            next(setUsers({ users: Object.values(uniqueUsers) }));
            next(setPosts({ posts: Object.values(uniquePosts) }));
            next(setComments({ comments: Object.values(uniqueComments) }));
            next(setReactions({ reactions: Object.values(uniqueReactions) }));
            next(setSelectedData({ feature: POSTS, idArray: Object.keys(uniquePosts) }))
            next(setLoader({ feature: FEED, loading: false }));
            break;
        case `${FEED} ${API_ERROR}`:
            const error = action.payload;
            console.log(error);
            break;

            //"posts": [
        // {
        //     "id": 1,
        //     "userId": 1,
        //     "text": "Hi, I'm Julian!",
        //     "createdAt": "2019-12-21T22:15:40.433Z",
        //     "updatedAt": "2019-12-21T22:15:40.433Z",
        //     "user": {
        //         "id": 1,
        //         "name": "Julian Hinsch",
        //         "emailHash": "dfbad1a849d193205a6dd2b71754c440"
        //     },
        //     "reactions": [
        //         {
        //             "id": 1,
        //             "postId": 1,
        //             "userId": 2,
        //             "type": "LIKE",
        //             "createdAt": "2019-12-21T22:15:40.436Z",
        //             "updatedAt": "2019-12-21T22:15:40.436Z",
        //             "user": {
        //                 "id": 2,
        //                 "name": "Jane Doe",
        //                 "emailHash": "1df66fbb427ff7e64ac46af29cc74b71"
        //             }
        //         },
        //         {
        //             "id": 2,
        //             "postId": 1,
        //             "userId": 3,
        //             "type": "LIKE",
        //             "createdAt": "2019-12-21T22:15:40.436Z",
        //             "updatedAt": "2019-12-21T22:15:40.436Z",
        //             "user": {
        //                 "id": 3,
        //                 "name": "John Doe",
        //                 "emailHash": "e13743a7f1db7f4246badd6fd6ff54ff"
        //             }
        //         }
        //     ],
        //     "comments": [
        //         {
        //             "id": 2,
        //             "postId": 1,
        //             "userId": 2,
        //             "text": "Hi Julian!",
        //             "createdAt": "2019-12-21T22:15:40.434Z",
        //             "updatedAt": "2019-12-21T22:15:40.434Z",
        //             "user": {
        //                 "id": 2,
        //                 "name": "Jane Doe",
        //                 "emailHash": "1df66fbb427ff7e64ac46af29cc74b71"
        //             }
        //         },
        //         {
        //             "id": 1,
        //             "postId": 1,
        //             "userId": 1,
        //             "text": "Hey Jane!",
        //             "createdAt": "2019-12-21T22:15:40.434Z",
        //             "updatedAt": "2019-12-21T22:15:40.434Z",
        //             "user": {
        //                 "id": 1,
        //                 "name": "Julian Hinsch",
        //                 "emailHash": "dfbad1a849d193205a6dd2b71754c440"
        //             }
        //         }
        //     ]
        // },

        default:
            break;
    }

}
