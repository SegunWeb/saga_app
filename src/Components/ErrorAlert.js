import React from 'react';
import {useSelector} from "react-redux";

const ErrorAlert = ({content}) => {

    const alert = useSelector( state => state.app.alerts);
    const show = alert ? 'd-block position-absolute' : 'd-none'

    return (
        <div className={`alert alert-danger ${show}`} role="alert">
            {content}
        </div>
    );
};

export default ErrorAlert;
