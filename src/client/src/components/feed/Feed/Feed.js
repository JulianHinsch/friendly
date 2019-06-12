import React from 'react';
import PostList from '../PostList/PostListContainer';
import PostForm  from '../PostForm/PostFormContainer';

const Feed = ({ posts }) => (
    <main>
        <PostForm/>
        <PostList/>
    </main>
);

export default Feed;