import React, { Component } from 'react';
import styles from './PostList.module.scss';
import PropTypes from 'prop-types';

import Loader from '../Loader/Loader';
import Post from '../Post/Post';

//TODO do we even need this component?  It might be easier to just use Feed and Profile

export default class PostList extends Component {

    static propTypes = {
        posts: PropTypes.array.isRequired,
        fetchPosts: PropTypes.func.isRequired,
    }

    state = {
        offset: 0,
        didLoad: false,
    }

    //TODO use infinite scroll HOC
    loadMorePosts = () => {
        this.setState(prevState => ({ offset: prevState.offset+50, didLoad: true }), () => {
            this.props.fetchPosts(`?limit=50&offset=${this.state.offset}&includeAll=true`);            
        });
    }
    
    render() {
        const { loading, posts } = this.props;
        const { didLoad } = this.state;
        return (
            <div className={styles.post_list} id='post_list'>
                {!didLoad && loading && <Loader/>}
                {posts && posts.map(post => <Post key={post.id} {...post}/>)}
                {didLoad && loading && <Loader/>}
            </div>
        )
    }
}



