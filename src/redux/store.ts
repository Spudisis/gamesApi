import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import gamesSlice from "./slices/gamesSlices";
import paramsAxios from "./slices/axiosParams";
export const store = configureStore({
  reducer: { gamesSlice, paramsAxios },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
