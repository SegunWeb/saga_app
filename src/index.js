import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore} from "redux";
import {rootReducer} from "./redux/rootReducer";
import {Provider} from "react-redux";


const store = createStore(rootReducer);

const app = (
    <Provider store={store}>
        <React.StrictMode>
            <App  />
        </React.StrictMode>
    </Provider>
);


ReactDOM.render(app, document.getElementById('root'));

