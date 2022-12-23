import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { listGames } from "../../@types/get";
import { fullParams, params } from "../../@types/params";
import { listGamesFull } from "../../@types/reduxGet";
import { RootState } from "../store";

export const fetchGames = createAsyncThunk<listGamesFull, params>(
  `games/fetchGamesStatus`,
  async ({ search, order, ascDesc, platforms }) => {
    const { data } = await axios.get<listGamesFull>(
      `https://api.rawg.io/api/games?key=51d04bde5c704d6ba678c64cc487198e&search=${search ? search : ""}&ordering=${
        order ? (ascDesc ? "" : "-") + order : ""
      }&page=1${platforms !== 0 ? "&platforms=" + platforms : ""}`
    );
    return data;
  }
);
export const addGames = createAsyncThunk<listGamesFull, fullParams>(
  `games/addGamesFetch`,
  async ({ search, order, ascDesc, page, platforms }) => {
    const { data } = await axios.get(
      `https://api.rawg.io/api/games?key=51d04bde5c704d6ba678c64cc487198e&search=${search ? search : ""}&ordering=${
        order ? (ascDesc ? "" : "-") + order : ""
      }&page=${page}${platforms !== 0 ? "&platforms=" + platforms : ""}`
    );
    return data;
  }
);
export enum Status {
  LOADING = "loading",
  SUCCESS = "completed",
  ERROR = "error",
}

interface gameSlice {
  items: listGames[];
  status: Status;
  statusPagination: Status;
}

const initialState: gameSlice = {
  items: [],
  status: Status.LOADING,
  statusPagination: Status.SUCCESS,
};

export const gamesSlice = createSlice({
  name: "games",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGames.pending, (state) => {
        state.status = Status.LOADING;
        state.items = [];
      })
      .addCase(fetchGames.fulfilled, (state, action) => {
        state.status = Status.SUCCESS;

        state.items = action.payload.results;
      })
      .addCase(fetchGames.rejected, (state) => {
        state.items = [];

        state.status = Status.ERROR;
      });
    builder
      .addCase(addGames.pending, (state) => {
        state.statusPagination = Status.LOADING;
      })
      .addCase(addGames.fulfilled, (state, action) => {
        state.items = [...state.items, ...action.payload.results];
        state.statusPagination = Status.SUCCESS;
      })
      .addCase(addGames.rejected, (state) => {
        state.statusPagination = Status.ERROR;
      });
  },
});

export const selectGames = (state: RootState) => state.gamesSlice;

export const {} = gamesSlice.actions;

export default gamesSlice.reducer;
