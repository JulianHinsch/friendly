import React, { Component } from 'react';
import styles from './PostList.module.scss';

import Post from '../Post/Post';

class PostList extends Component {
    
    state = {
        posts: [
            {
                author: 'Jane Doe',
                time: new Date().toDateString(),
                text: 'Test post!',
                comments: [
                    {
                        id: '1',
                        author: 'John Doe',
                        authorId: '1',
                        time: new Date().toDateString(),                        
                        text: 'Nice post Jane!',
                    }
                ],
            },
            {
                author: 'John Doe',
                time: new Date().toDateString(),
                text: 'Another test post!',
                comments: [
                    {
                        id: '2',
                        author: 'Jane Doe',
                        authorId: '2',
                        time: new Date().toDateString(),
                        text: 'Rad!',
                    }
                ],
            },
        ],
    }

    loadMorePosts = () => {
    }
    
    render() {
        const { posts } = this.state;
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

export default PostList;


