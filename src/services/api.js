import axios from "axios";

const BASE_URL = "http://localhost:8080";
const axiosInstance = axios.create({ baseURL: BASE_URL });

export const getUsers = async () => {
  return (await axiosInstance.get("users")).data;
};

export const getTodo = async (id) => {
  return (await axiosInstance.get(`todos/${id}`)).data;
};

export const createTodo = async (data) => {
  await axiosInstance.post("todos", data);
};

export const updateTodo = async (data) => {
  await axiosInstance.put(`todos/${data.id}`, data);
};

export const deleteTodo = async (id) => {
  await axiosInstance.delete(`todos/${id}`);
};

export const getProjects = async (page = 1) => {
  return (await axiosInstance.get(`projects?_page=${page}&_limit=3`)).data;
};
