import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});
api.interceptors.request.use((config) => {
  const storedAuth = localStorage.getItem("auth");
  if (storedAuth) {
    try {
      const auth = JSON.parse(storedAuth);
      if (auth.token) {
        config.headers.Authorization = `Bearer ${auth.token}`;
      }
    } catch {
      localStorage.removeItem("auth");
    }
  }
  return config;
});
export default api;
