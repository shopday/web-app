import { configureStore } from "@reduxjs/toolkit";
import authenticationReducer from "./reducer/authenticationSlice.js";

export default configureStore({
  reducer: {
    authentication: authenticationReducer,
  },
});
