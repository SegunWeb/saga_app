import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchPost, removeFetchPost} from "../redux/action";
import Post from "./Post";
import Loader from "./Loader";

const FetchPosts = () => {
    
    const fetchPosts = useSelector(state => state.posts.fetchPosts);
    const loader = useSelector(state => state.app.loader);
    const dispatch = useDispatch();

    const handlerFetch = () => dispatch(fetchPost());

    const spinner = loader ? <Loader/> : <button onClick={handlerFetch} className={'btn btn-primary'}>Load posts</button>

    return (
        <>
            <div>
                { fetchPosts.length === 0 ? spinner :
                    <div>{fetchPosts.map( post => <Post key={post.id} click={() => dispatch(removeFetchPost(post.id))} title={post.title}/>)}</div>
                }
            </div>
        </>
    );
};

export default FetchPosts;