import { connect } from 'react-redux';
import Profile from './Profile';
import { fetchProfile } from '../../../redux/actions/profile.actions';
import getUserById from '../../../redux/selectors/getUserById.selector';

const mapStateToProps = (state, ownProps) => {
    const url = window.location.href;
    const id = url.split('/profile/')[1];
    return ({
        auth: state.auth,
        loading: state.profile.loading,
        user: getUserById(state, id),
    });
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchProfile: (userId, limit, offset) => dispatch(fetchProfile({ userId, limit, offset })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);