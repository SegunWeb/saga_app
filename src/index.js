import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {applyMiddleware, createStore} from "redux";
import {rootReducer} from "./redux/rootReducer";
import {Provider} from "react-redux";
import thunk from "redux-thunk";


const store = createStore(rootReducer, applyMiddleware(thunk));

const app = (
    <Provider store={store}>
        <React.StrictMode>
            <App  />
        </React.StrictMode>
    </Provider>
);


ReactDOM.render(app, document.getElementById('root'));

