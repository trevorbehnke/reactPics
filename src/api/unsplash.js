import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID JhFJLBmXmnoDSKh4DMHye34XLecKrXrcTgSq5b7WTFQ",
  },
});
