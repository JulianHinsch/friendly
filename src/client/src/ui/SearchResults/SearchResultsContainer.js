import { connect } from 'react-redux';
import getUsersArray from '../../redux/selectors/getUsersArray.selector';
import * as actions from '../../redux/actions/users.actions';

import SearchResults from './SearchResults';

const mapStateToProps = (state, ownProps) => ({
    users: getUsersArray(state),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchUsers: (query) => dispatch(actions.fetchUsers({ query })),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);