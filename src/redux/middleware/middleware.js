import {ADD_POST} from "../types";
import {showAlert} from "../action";


const forbidden = ['fuck', 'spam', 'dead'];

export const forbiddenWords = ({ dispatch }) => {
    return function (next) {
        return function (action) {
            if (action.type === ADD_POST) {
                const found = forbidden.filter(w => action.payload.title.includes(w))
                if(found.length) {
                    return dispatch(showAlert('Эти слова недопустимы'))
                }
            }
            return next(action)
        }
    } 
};