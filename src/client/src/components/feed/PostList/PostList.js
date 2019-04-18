import React, { Component } from 'react';
import styles from './PostList.module.scss';
import PropTypes from 'prop-types';

import Post from '../Post/Post';

class PostList extends Component {

    loadMorePosts = () => {
    }
    
    render() {
        const { posts } = this.props;
        return (
            <div className={styles.post_list}>
                {posts.map((post, key = 0) => (
                    <Post 
                        author={post.author}
                        time={post.time}
                        text={post.text}
                        comments={post.comments}
                        key={key++}/>
                ))}
            </div>
        )
    }
}

PostList.propTypes = {
    posts: PropTypes.array.isRequired,
}

export default PostList;


