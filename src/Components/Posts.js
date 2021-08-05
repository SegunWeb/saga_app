import React from 'react';
import Post from "./Post";
import {useSelector} from "react-redux";




const Posts = () => {

    const getPosts = useSelector(state => state.posts.posts)


    return (
        <div>
            {getPosts.map(post => <Post key={post.id} title={post.title}/>)}
        </div>
    );
};

export default Posts;