import { connect } from 'react-redux';
import denormalizeUsers from '../../../redux/selectors/denormalizeUsers.selector';
import * as actions from '../../../redux/actions/search.actions';

import SearchResults from './SearchResults';

const mapStateToProps = (state, ownProps) => ({
    users: denormalizeUsers(state),
    loading: state.users.loading,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchSearchResults: (query) => dispatch(actions.fetchSearchResults({ query })),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);