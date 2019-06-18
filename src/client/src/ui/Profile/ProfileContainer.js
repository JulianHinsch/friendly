import { connect } from 'react-redux';
import Profile from './Profile';
import { fetchUsers } from '../../redux/actions/users.actions';
import getUserById from '../../redux/selectors/getUserById.selector';

const mapStateToProps = (state, ownProps) => {
    const url = window.location.href;
    const id = url.split('/profile/')[1];
    return ({
        auth: state.auth,
        loading: state.users.loading,
        user: getUserById(state, id),
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchUsers: (query) => dispatch(fetchUsers({ query })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);