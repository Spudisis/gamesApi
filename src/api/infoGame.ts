import axios from "axios";

export const InfoGame = async (id: number) => {
  const data = await axios.get(`https://api.rawg.io/api/games/${id}?key=51d04bde5c704d6ba678c64cc487198e`);
  return data;
};
