import { applyMiddleware, combineReducers, createStore } from "redux";
import { photosReducer } from "../reducers/photosReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    photos: photosReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
