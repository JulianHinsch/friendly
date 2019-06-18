import { connect } from 'react-redux';

import * as actions from '../../redux/actions/users.actions';

import SearchResults from './SearchResults';

const mapStateToProps = (state, ownProps) => ({
    users: state.users,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchUsers: (query) => dispatch(actions.fetchUsers({ query })),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);