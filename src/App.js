import React from 'react';
import Form from "./Components/Form";
import Posts from "./Components/Posts";
import FetchPosts from "./Components/FetchPosts";
import ErrorAlert from "./Components/ErrorAlert";
import {useSelector} from "react-redux";

const App = () => {

    const alert = useSelector( state => state.app.alerts);

    return (
        <div className={'container pt-3'}>

            <ErrorAlert content={alert} />

            <div className="row">
                <div className={'col'}>
                    <Form/>
                </div>
            </div>
            <div className="row">

                <div className={'col'}>
                    <h2>Посты</h2>
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