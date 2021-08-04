import React from 'react';
import Form from "./Components/Form";
import Posts from "./Components/Posts";
import FetchPosts from "./Components/FetchPosts";

const App = () => {
    return (
        <div className={'container pt-3'}>
            <div className="row">
                <div className={'col'}>
                    <Form/>
                </div>
            </div>
            <div className="row">

                <div className={'col'}>
                    <h2>посты</h2>
                    <Posts/>
                </div>
                <div className={'col'}>
                    <h2>Серверные посты</h2>
                    <FetchPosts/>
                </div>
            </div>

        </div>
    );
};

export default App;