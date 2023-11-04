import { configureStore } from "@reduxjs/toolkit";
import bookmarkReducer from "../book-marks-slice";
import authReducer from "../auth-slice";

const store = configureStore({
  reducer: {
    bookmark: bookmarkReducer,
    auth: authReducer,
  },
});

export default store;
