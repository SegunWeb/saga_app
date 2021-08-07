import React from 'react';
import Post from "./Post";
import {useDispatch, useSelector} from "react-redux";
import {removePost} from "../redux/action";



const Posts = () => {

    const getPosts = useSelector(state => state.posts.posts)
    const dispatch = useDispatch()
    const posts = getPosts.length

    return (
        <div>

            { posts === 0 ? <p>Постов пока нет</p> :
                <>{getPosts.map(post => <Post key={post.id} click={() => dispatch(removePost(post.id))} title={post.title}/>)}</>
            }
        </div>
    );
};

export default Posts;