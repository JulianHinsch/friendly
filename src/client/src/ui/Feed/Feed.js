import React, { Component } from 'react';
import PropTypes from 'prop-types';

import PostList from '../PostList/PostListContainer';
import PostForm  from '../PostForm/PostFormContainer';

export default class Feed extends Component {

    static propTypes = {
        auth: PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            email: PropTypes.string.isRequired,
            isAuthenticated: PropTypes.bool.isRequired,
            loading: PropTypes.bool.isRequired,
            message: PropTypes.string,
        }).isRequired,
        loading: PropTypes.bool.isRequired,
        fetchPosts: PropTypes.func.isRequired,
    }

    componentDidMount() {
        this.props.fetchPosts('?includeAll=true');
    }

    render() {
        const { loading } = this.props;
        return (
            <main>
                <PostForm/>
                {loading ? 'Loading' : <PostList/>}
            </main>
        )
    }
}

