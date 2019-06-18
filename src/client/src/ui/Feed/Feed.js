import React, { Component } from 'react';
import PropTypes from 'prop-types';

import PostList from '../PostList/PostListContainer';
import PostForm  from '../PostForm/PostFormContainer';

export default class Feed extends Component {

    static propTypes = {
        auth: PropTypes.shape({

        }).isRequired,
        loading: PropTypes.bool.isRequired,
        fetchPosts: PropTypes.func.isRequired,
    }

    componentDidMount() {
        this.props.fetchPosts();
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

