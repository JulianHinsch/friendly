import React from 'react';
import PostList from '../PostList/PostList';
import PostForm  from '../PostForm/PostFormContainer';

const Feed = ({ posts }) => (
    <main>
        <PostForm/>
        <PostList posts={posts}/>
    </main>
);

Feed.defaultProps = {
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
    ]
}

export default Feed;