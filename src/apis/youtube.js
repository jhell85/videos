import axios from "axios";

const KEY = "AIzaSyDEApLuLHdFc5n05gkYDLv-KbMftYHFMnA";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 10,
    type: "videos",
    key: KEY,
  },
});
