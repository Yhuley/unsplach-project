import { initialState } from "./initialState";
import {SET_IS_LOADING, SET_PHOTOS} from "./actions";

export const photosReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PHOTOS:
            return {
                ...state,
                photos: action.payload,
                isLoading: false,
            }
        case SET_IS_LOADING:
            return {
                ...state,
                isLoading: action.payload,
            }
        default:
            return state;
    }
};
