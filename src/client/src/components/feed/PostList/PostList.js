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
        console.log(posts);
        return loading ? 'Loading' : (
            <div className={styles.post_list}>
                {posts.map(post => {
                    const { id, user, createdAt, updatedAt, text, reactions, comments } = post;
                    return (
                        <Post
                            id={id}
                            user={user}
                            createdAt={createdAt}
                            updatedAt={updatedAt}
                            text={text}
                            reactions={reactions}
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



