import React, {useState} from 'react';
import Post from "./Post";




const Posts = () => {


    const [state, setState] = useState([1,2,3])

    console.log(state)

    return (
        <div>
            {/*state.map(post => <Post key={post} idPost={post}/>)*/}
        </div>
    );
};

export default Posts;