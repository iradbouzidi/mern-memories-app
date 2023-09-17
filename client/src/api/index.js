import axios from "axios";

const url = "https://mern-memories-app-backend.vercel.app/posts";
const dev_url = "http://localhost:5000/posts";
const vercel_url = "https://mern-memories-app-backend.vercel.app/posts";

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
export const updatePost = (id, updatedPost) =>
  axios.patch(`${url}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${url}/${id}`);
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);
