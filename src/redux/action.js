import {ADD_POST, REMOVE_POST} from "./types";

export const addPost = (post) => ({type: ADD_POST, payload: post});
export const removePost = (id) => ({type: REMOVE_POST, payload: id});