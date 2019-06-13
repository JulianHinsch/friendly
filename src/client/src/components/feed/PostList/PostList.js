import React, { Component } from 'react';
import styles from './PostList.module.scss';
import PropTypes from 'prop-types';

import Post from '../Post/Post';

export default class PostList extends Component {

    static propTypes = {
        posts: PropTypes.array.isRequired,
        fetchPosts: PropTypes.func.isRequired,
    }

    state = {
        numPosts: 50,
        offset: 0,
    }

    componentDidMount() {
        this.props.fetchPosts('?limit=50&offset=0&includeAll=true');
    }

    loadMorePosts = () => {
        this.setState(prevState => ({offset: prevState.offset+50}), () => {
            this.props.fetchPosts(`?limit=50&offset=${this.state.offset}&includeAll=true`);            
        });
    }
    
    render() {
        const { loading, posts } = this.props;
        return loading ? 'Loading' : (
            <div className={styles.post_list}>
                {posts.map(post => {
                    const { id, author, time, text, comments } = post;
                    return (
                        <Post
                            author={author}
                            time={time}
                            text={text}
                            comments={comments}
                            key={id}/>
                    )
                })}
                <button onClick={this.loadMorePosts}>
                    Load more posts
                </button>
            </div>
        )
    }
}



