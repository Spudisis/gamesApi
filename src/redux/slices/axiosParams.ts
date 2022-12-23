import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { params } from "../../@types/params";

import { RootState } from "../store";

const initialState: params = {
  search: "",
  order: "relevance",
  ascDesc: true,
  platforms: 0,
};

export const paramsAxios = createSlice({
  name: "paramsAxios",
  initialState,
  reducers: {
    setSearch(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
    setOrder(state, action: PayloadAction<string>) {
      state.order = action.payload;
    },
    setAscDescParam(state, action: PayloadAction<boolean>) {
      state.ascDesc = action.payload;
    },
    setPlatforms(state, action: PayloadAction<number>) {
      state.platforms = action.payload;
    },
  },
});

export const selectAxiosParams = (state: RootState) => state.paramsAxios;

export const { setSearch, setOrder, setAscDescParam, setPlatforms } = paramsAxios.actions;

export default paramsAxios.reducer;
