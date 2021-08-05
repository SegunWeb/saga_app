import React from 'react';
import Posts from "./Posts";

const FetchPosts = ({posts}) => {

    return (
        <>
            <div>
                { !posts ? <button className={'btn btn-primary'}>Load posts</button> :
                    <div>{posts.map( post => <Posts key={post}/>)}</div>
                }
            </div>
        </>
    );
};

export default FetchPosts;