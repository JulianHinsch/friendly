import { connect } from 'react-redux';
import ProfileHeader from './ProfileHeader';

const mapStateToProps = (state, ownProps) => ({
    auth: state.auth,
    follows: state.follows,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    createFollow: (follow) => dispatch(createFollow({ follow })),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileHeader);