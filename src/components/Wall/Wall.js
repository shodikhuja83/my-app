import React from 'react';
import Post from '../Post/Post';
import PostForm from '../PostForm/PostForm';
import { shallowEqual, useSelector } from 'react-redux';

function Wall() {
    const posts = useSelector(state => state.posts, shallowEqual);

    return (
        <>
            <PostForm />
            <div>
                {posts.map(o => <Post key={o.id} post={o} />)}
            </div>
        </>
    );
}

export default Wall;


