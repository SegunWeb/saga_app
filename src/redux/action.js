import {
    ADD_POST,
    FETCH_POST,
    HIDE_ALERT,
    HIDE_LOADER,
    REMOVE_FETCH_POST,
    REMOVE_POST, REQUEST_POSTS,
    SHOW_ALERT,
    SHOW_LOADER
} from "./types";

//posts
export const addPost = (post) => ({type: ADD_POST, payload: post});
export const removePost = (id) => ({type: REMOVE_POST, payload: id});

//spinner
export const showLoader = () => ({type: SHOW_LOADER});
export const hideLoader = () => ({type: HIDE_LOADER});

//alert
export const showAlert = (content) => {
    return dispatch => {
        dispatch(  {type: SHOW_ALERT, payload: content});
        setTimeout(() => {
            dispatch(hideAlert())
        }, 2000)
    }
};
export const hideAlert = () => ({type: HIDE_ALERT});

//fetch

// export const fetchPost = () => {
//     return async dispatch => {
//         try {
//             dispatch(showLoader());
//
//             const res = await fetch('https://jsonplaceholder.typidcode.com/posts?_limit=5');
//             const json = await res.json();
//             dispatch({type: FETCH_POST, payload: json});
//
//             dispatch(hideLoader());
//         }
//         catch (e) {
//             dispatch(showAlert(`Что-то пошло не так  -  ${e}`))
//             dispatch(hideLoader())
//         }
//     }
// };

export const removeFetchPost = (id) => ({type: REMOVE_FETCH_POST, payload: id});

//fetch saga for example

export const fetchPost = () => {

    return {
        type: REQUEST_POSTS
    }

    // return async dispatch => {
    //     try {
    //         dispatch(showLoader());
    //
    //         const res = await fetch('https://jsonplaceholder.typidcode.com/posts?_limit=5');
    //         const json = await res.json();
    //         dispatch({type: FETCH_POST, payload: json});
    //
    //         dispatch(hideLoader());
    //     }
    //     catch (e) {
    //         dispatch(showAlert(`Что-то пошло не так  -  ${e}`))
    //         dispatch(hideLoader())
    //     }
    // }
};


