import { configureStore } from "@reduxjs/toolkit";
import authenticationReducer from "./reducer/authenticationSlice.js";
import storage from "redux-persist/lib/storage";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const persistConfig = {
  key: "root",
  timeout: 100,
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, authenticationReducer);

export default configureStore({
  // reducer: {
  //   authentication: authenticationReducer,
  // },
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
