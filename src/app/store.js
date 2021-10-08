import rootReducer from "./rootReducer";
import { createStore } from "@reduxjs/toolkit";

export const store = createStore(rootReducer);
