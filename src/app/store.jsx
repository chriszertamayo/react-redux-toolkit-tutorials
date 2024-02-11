import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from '../features/counter/counterSlice'
import { apiSlice } from "../features/api/apiSlice";
import usersReduce from "../features/users/usersSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    users: usersReduce,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
