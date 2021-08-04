import {ADD_POST, REMOVE_POST} from "../types";

const initialState = {
    posts: [
        {id: 1, title: 'text'},
        {id: 3, title: 'text 23'},
        {id: 2, title: 'text 33'},
    ],
    fetchPosts: []
};

export const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                posts: [...state.posts, action.payload]
            }
        }
        case REMOVE_POST: {
            return {
                ...state,
                posts: state.posts.filter(item => item.id !== action.payload)
            }
        }

        default: return state
    }
};