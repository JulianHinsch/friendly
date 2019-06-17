import React, { Component } from 'react';
import PropTypes from 'prop-types';

import PostList from '../PostList/PostList';
import PostForm from '../PostForm/PostFormContainer';
import ProfileHeader from '../ProfileHeader/ProfileHeader';

import styles from './Profile.module.scss';

export default class Profile extends Component {

    static propTypes = {
        auth: PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            email: PropTypes.string.isRequired,
            isAuthenticated: PropTypes.bool.isRequired,
            loading: PropTypes.bool.isRequired,
            message: PropTypes.string,
        }).isRequired,
        user: PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            email: PropTypes.string.isRequired,
        }).isRequired,
        createFollowRequest: PropTypes.func.isRequired,
        fetchUsers: PropTypes.func.isRequired,
    }

    componentWillMount() {
        //TODO
        document.title = "User's name";
    }

    componentDidMount() {
        const url = window.location.href;        
        const id = url.split('/profile/')[1];
        this.props.fetchUsers(`?id=${id}&includeAll=true&limit=1`);
    }

    isOwnProfile = () => {
        const url = window.location.href;
        const id = url.split('/profile/')[1];
        return id === this.props.auth.id;
    }

    render() {
        return (
            <main className={styles.profile}>
                <ProfileHeader/>
                {this.isOwnProfile() && <PostForm/>}
                {/* <PostList/> */}
            </main>
        )
    }
}
