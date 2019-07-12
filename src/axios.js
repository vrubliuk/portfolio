import axios from "axios";

const baseURL = process.env.NODE_ENV !== "production" ? "http://localhost:8080/api" : "";

export default axios.create({
  baseURL
});
