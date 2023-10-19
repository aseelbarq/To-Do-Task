import axios from "./axiosConfig.js";
//get all users
export const getAllUsers = async () => {
  try {
    const response = await axios.get("users");
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(error);
  }
};
//get all tasks
export const getAllTasks = async () => {
  try {
    const response = await axios.get("todos", {
      auth: {
        username: localStorage.getItem("USERNAME_KEY"),
        password: localStorage.getItem("PASSWORD_KEY"),
      },
    });
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(error);
  }
};
// add task
export const addTask = async (newTask) => {
  try {
    const response = await axios.post(
      "todos",
      { task: newTask },
      {
        auth: {
          username: localStorage.getItem("USERNAME_KEY"),
          password: localStorage.getItem("PASSWORD_KEY"),
        },
      }
    );
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(error);
  }
};
// completed task
export const completeTask = async (taskId) => {
  try {
    const response = await axios.put(`/todos/${taskId}`, {} , {
      auth: {
        username: localStorage.getItem("USERNAME_KEY"),
        password: localStorage.getItem("PASSWORD_KEY"),
      },
    });
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(error);
  }
};
//remove task
export const removeTask = async (taskId) => {
  try {
    const response = await axios.delete(`/todos/${taskId}`, {
      auth: {
        username: localStorage.getItem("USERNAME_KEY"),
        password: localStorage.getItem("PASSWORD_KEY"),
      },
    });
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(error);
  }
};

export default getAllUsers;
