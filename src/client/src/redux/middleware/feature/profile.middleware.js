import { PROFILE, FETCH_PROFILE } from '../../actions/profile.actions';
import { USERS, setUsers } from '../../actions/users.actions';
import { POSTS, setPosts } from '../../actions/posts.actions';
import { FOLLOWS, setFollows } from '../../actions/follows.actions';
import { COMMENTS, setComments} from '../../actions/comments.actions';
import { REACTIONS, setReactions } from '../../actions/reactions.actions';
import { apiRequest, API_SUCCESS, API_ERROR } from '../../actions/api.actions';
import { setLoader } from '../../actions/loaders.actions';

export default ({ dispatch }) => (next) => (action) => {

    next(action);

    switch(action.type) {
        case FETCH_PROFILE:
            const userId = action.payload;
            const { limit, offset } = action.meta;
            next(setLoader({ loading: true, feature: PROFILE }));
            next(apiRequest({
                data: null,
                method: 'GET',
                url: `/api/profile/${userId}?limit=${limit}&offset=${offset}`,
                timeout: 3000,
                feature: PROFILE,
                redirectTo: null,
            }));
            break;

        case `${PROFILE} ${API_SUCCESS}`:
            const { user, follows, posts } = action.payload;

            // normalize nested data
            const   uniqueFollows = {},
                    uniquePosts = {},
                    uniqueUsers = {},
                    uniqueComments = {},
                    uniqueReactions = {};

            uniqueUsers[user.id] = user;

            follows.forEach(follow => {
                uniqueUsers[follow.user.id] = follow.user;
                delete follow.user;
                uniqueFollows[follow.id] = follow;
            });

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
            next(setFollows({ follows: Object.values(uniqueFollows) }));
            next(setPosts({ posts: Object.values(uniquePosts) }));
            next(setComments({ comments: Object.values(uniqueComments) }));
            next(setReactions({ reactions: Object.values(uniqueReactions) }));
            next(setLoader({ feature: PROFILE, loading: false }));
            break;

        case `${PROFILE} ${API_ERROR}`:
            const error = action.payload;
            console.log(error);
            next(setLoader({ feature: PROFILE, loading: false }));
            break;

        default:
            break;
    }

}
