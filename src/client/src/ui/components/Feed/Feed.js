import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PostList from '../PostList/PostListContainer';
import PostForm  from '../PostForm/PostFormContainer';

export default class Feed extends Component {

    static propTypes = {
        auth: PropTypes.object.isRequired,
        fetchFeed: PropTypes.func.isRequired,
    }

    componentWillMount() {
        document.title='Friendly';
    }

    componentDidMount() {
        const { id } = this.props.auth;
        this.props.fetchFeed(id, null, 0);
    }

    render() {
        return (
            <main>
                <PostForm/>
                <PostList/>
            </main>
        )
    }
}

