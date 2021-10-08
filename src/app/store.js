import rootReducer from "./rootReducer";
import { createStore } from "@reduxjs/toolkit";

export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
