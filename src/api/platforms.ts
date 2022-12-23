import axios from "axios";

export const platforms = async () => {
  const { data } = await axios.get(`https://api.rawg.io/api/platforms?key=51d04bde5c704d6ba678c64cc487198e`);
  return data;
};
