import React, { Component } from 'react';
import styles from './PostList.module.scss';
import PropTypes from 'prop-types';

import Post from '../Post/Post';

export default class PostList extends Component {

    static propTypes = {
        posts: PropTypes.object.isRequired,
        fetchPosts: PropTypes.func.isRequired,
    }

    state = {
        numPosts: 50,
        offset: 0,
    }

    componentDidMount() {
        console.log(this.props.posts)
        this.props.fetchPosts('?limit=50&offset=0&includeAll=true');
    }

    loadMorePosts = () => {
        this.setState(prevState => ({offset: prevState.offset+50}), () => {
            this.props.fetchPosts(`?limit=50&offset=${this.state.offset}&includeAll=true`);            
        });
    }
    
    render() {
        const { posts } = this.props;
        const { loading, error, collection } = posts;
        return loading ? 'Loading' : error ? 'error' : (
            <div className={styles.post_list}>
                {Object.keys(collection).map(key => {
                    const { author, time, text, comments } = collection[key];
                    return (
                        <Post
                            author={author}
                            time={time}
                            text={text}
                            comments={comments}
                            key={key}/>
                    )
                })}
                <button onClick={this.loadMorePosts}>
                    Load more posts
                </button>
            </div>
        )
    }
}



