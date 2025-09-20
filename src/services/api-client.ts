import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: {
    key: "df27c19db92743d2b96e70dd54861404",
  }
});
