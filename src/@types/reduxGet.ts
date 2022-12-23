import { listGames } from "./get";

export interface listGamesFull {
  count: number;
  next: string;
  previous: string;
  results: listGames[];
}
