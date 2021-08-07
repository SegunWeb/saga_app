import {HIDE_ALERT, HIDE_LOADER, SHOW_ALERT, SHOW_LOADER} from "../types";

const initialState = {
    loader: false,
    alerts: null
};

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_LOADER: {
            return {...state, loader: true}
        }
        case HIDE_LOADER: {
            return {...state, loader: false}
        }
        case SHOW_ALERT: {
            return {...state, alerts: action.payload}
        }
        case HIDE_ALERT: {
            return {...state, alerts: null}
        }

        default: return state
    }
};