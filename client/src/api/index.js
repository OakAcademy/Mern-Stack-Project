import axios from "axios";

const api = axios.create({ baseURL: "http://localhost:5001" });

api.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }

  return req;
});

export const fetchStories = () => api.get("/stories");
export const createStory = (newStory) => api.post("/stories", newStory);
export const updateStory = (id, updatedStory) =>
  api.patch(`/stories/${id}`, updatedStory);
export const deleteStory = (id) => api.delete(`/stories/${id}`);
export const likeStory = (id) => api.patch(`/stories/${id}/likeStory`);

export const login = (formValues) => api.post("/user/login", formValues);
export const signup = (formValues) => api.post("/user/signup", formValues);
