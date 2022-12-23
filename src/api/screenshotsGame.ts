import axios from "axios";

export const ScreenshotsGame = async (id: string) => {
  const data = await axios.get(`https://api.rawg.io/api/games/${id}/screenshots?key=51d04bde5c704d6ba678c64cc487198e`);
  return data;
};
