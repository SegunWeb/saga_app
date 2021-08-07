import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {applyMiddleware, createStore} from "redux";
import {rootReducer} from "./redux/rootReducer";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import {forbiddenWords} from "./redux/middleware/middleware";
import createSagaMiddleware from 'redux-saga'
import {sagaWatcher} from "./redux/sagas";


const saga = createSagaMiddleware()
const store = createStore(rootReducer, applyMiddleware(thunk, forbiddenWords, saga));

saga.run(sagaWatcher)

const app = (
    <Provider store={store}>
        <React.StrictMode>
            <App  />
        </React.StrictMode>
    </Provider>
);


ReactDOM.render(app, document.getElementById('root'));

