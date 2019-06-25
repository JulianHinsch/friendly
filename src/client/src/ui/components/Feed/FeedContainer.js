import { connect } from 'react-redux';
import * as actions from '../../../redux/actions/feed.actions';

import Feed from './Feed';

const mapStateToProps = (state, ownProps) => ({
    auth: state.auth,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchFeed: (userId, limit, offset) => dispatch(actions.fetchFeed({ userId, limit, offset })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Feed);