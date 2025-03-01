import axios from "axios";
const http = axios.create({
  baseURL:
    process.env.NODE_ENV === "development"
      ? process.env.NEXT_PUBLIC_SERVER_URL
      : process.env.NEXT_PUBLIC_SERVER_URL,
  withCredentials: true,
});
const app = {
  get: http.get,
  post: http.post,
  put: http.put,
  patch: http.patch,
  delete: http.delete,
};

export default app;
