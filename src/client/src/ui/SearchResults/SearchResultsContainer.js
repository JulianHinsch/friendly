import { connect } from 'react-redux';
import getUsersArray from '../../redux/selectors/getUsersArray.selector';
import * as actions from '../../redux/actions/search.actions';

import SearchResults from './SearchResults';

const mapStateToProps = (state, ownProps) => ({
    users: getUsersArray(state),
    loading: state.users.loading,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchSearchResults: (query) => dispatch(actions.fetchSearchResults({ query })),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);