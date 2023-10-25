import { configureStore } from "@reduxjs/toolkit";
import {useDispatch} from 'react-redux';
import countryReducer from "./countrySlice";
import loadingReducer from "./loadingSlice";

const store = configureStore({
  reducer: {
    countries: countryReducer,
    loading: loadingReducer
  },
  devTools: true,
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();