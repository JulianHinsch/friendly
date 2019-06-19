import { connect } from 'react-redux';
import Post from './Post';

import getUserById from '../../redux/selectors/getUserById.selector';

import * as actions from '../../redux/actions/posts.actions';

const mapStateToProps = (state, ownProps) => ({
    auth: state.auth,
    reactions: ownProps.reactions.map(reaction => {
        if(!reaction.user) {
            reaction.user = getUserById(state, reaction.userId)
        }
        return reaction;
    }),
    comments: ownProps.comments.map(comment => {
        if(!comment.user) {
            comment.user = getUserById(state, comment.userId)
        }
        return comment;
    }),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    deletePost: (id) => dispatch(actions.deletePost(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Post);