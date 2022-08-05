import axios from "axios";
import { apiKey } from "../../constants";

export const cardsData = axios.create({
  baseURL: `${apiKey}`,
});
