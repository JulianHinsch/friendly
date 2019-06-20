import React, { Component } from 'react';
import PropTypes from 'prop-types';

import PostList from '../PostList/PostListContainer';
import PostForm  from '../PostForm/PostFormContainer';
import Loader from '../Loader/Loader';

export default class Feed extends Component {

    static propTypes = {
        auth: PropTypes.shape({
            id: PropTypes.number.isRequired,
        }).isRequired,
        loading: PropTypes.bool.isRequired,
        fetchPosts: PropTypes.func.isRequired,
    }

    componentDidMount() {
        //TODO use auth to get the correct posts here, not just all posts
        this.props.fetchPosts('?includeAll=true&orderBy=updatedAt&orderDirection=ASC');
    }

    render() {
        const { loading } = this.props;
        return (
            <main>
                <PostForm/>
                {loading ? <Loader/> : <PostList/>}
            </main>
        )
    }
}

