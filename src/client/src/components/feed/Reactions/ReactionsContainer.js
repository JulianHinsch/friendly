import { connect } from 'react-redux';

import * as actions from '../../../redux/actions/reactions.actions';

import Reactions from './Reactions';

const mapStateToProps = (state, ownProps) => ({
    auth: state.auth,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    createReaction: (reaction) => dispatch(actions.createReaction({ reaction })),
    deleteReaction: (id) => dispatch(actions.deleteReaction({ id})),
})

export default connect(mapStateToProps, mapDispatchToProps)(Reactions);