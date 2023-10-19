"use client";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import {
  getAllTasks,
  addTask,
  removeTask,
  completeTask,
} from "../api/services.js";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const router = useRouter();
  // State variables
  const [lists, setLists] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [completedTask, setCompletedTask] = useState({});
  const [newTask, setNewTask] = useState("");
  const [taskId, setTaskId] = useState("");
  const [index, setIndex] = useState("");
  const [isDelete, setIsDelete] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const name = JSON.parse(localStorage.getItem("userData")).name; // get name and avatar from local storage
  const avatar = JSON.parse(localStorage.getItem("userData")).avatar; // get name and avatar from local storage

  useEffect(() => {
    getAllTasks()
      .then((res) => {
        const tempArr = res.data;
        const completedTemp = tempArr.filter((item) => item.completed === true); // check if the task is completed on not
        const notCompletedTemp = tempArr.filter(
          (item) => item.completed === false
        );
        setLists(notCompletedTemp);
        setCompletedTasks(completedTemp);
      })
      .catch((err) => {
        throw err;
      });
  }, []);

  useEffect(() => {
    if (isDelete) {
      handleRemoveTask();
    }
  }, [isDelete]);

  //handle remove task
  const handleRemoveTask = () => {
    let tempArr = [...lists];
    removeTask(taskId)
      .then((res) => {
        tempArr.splice(index, 1);
        setLists(tempArr);
        setIsDelete(false);
      })
      .catch((err) => {
        throw err;
      });
  };

  useEffect(() => {
    if (isComplete) {
      handleCompleteTask();
    }
  }, [isComplete]);

 //handle completed task

  const handleCompleteTask = () => {
    let tempArr = [...lists];
    completeTask(taskId)
      .then((res) => {
        tempArr.splice(index, 1);
        setLists(tempArr);
        setIsComplete(false);
        setCompletedTasks([...completedTasks, completedTask]);
      })
      .catch((err) => {
        throw err;
      });
  };
   //handle logout

  const logout = () => {
    localStorage.removeItem("USERNAME_KEY");
    localStorage.removeItem("PASSWORD_KEY");
    localStorage.removeItem("userData");
    Cookies.remove("loggedin");
    router.push("/");
  };

  const handleChange = (e) => {
    setNewTask(e.target.value);
  };

 //handle new task
  const addNewTask = () => {
    addTask(newTask)
      .then((res) => {
        setNewTask("");
        setLists([...lists, res.data]);
      })
      .catch((err) => {
        throw err;
      });
  };


  //remove old task
  const removeOldTask = (task, index) => {
    setIsDelete(true);
    setTaskId(task.id);
    setIndex(index);
  };

  //handle completed task if it's  done
  const completeTaskAsDone = (task, index) => {
    setIsComplete(true);
    setTaskId(task.id);
    setIndex(index);
    setCompletedTask(task);
  };

  return (
    <>
      <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            To Do List
          </span>
          <div className="flex md:order-2">
            <div className="flex items-center ">
          <img src={avatar} width={40} height={40} />
            <p className="dark:text-white text-sm">{name}</p>
          
            <button
              type="button"
              onClick={logout}
              className="text-white ml-8  font-medium rounded-lg  px-4 py-2 text-center mr-3 md:mr-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm"
            >
              Logout
            </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="todo w-full max-w-lg mx-auto mt-8">
        <h1 className="text text-lg font-bold mb-4">To-Do App</h1>
        <div className="bg-white shadow-md rounded overflow-hidden">
          <div className="bg-gray-100 border-t border-t-1 border-color-grey px-6 pt-6 pb-8">
            <label
              htmlFor="item"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Add To-Do Item
            </label>
            <div className="flex">
              <input
                type="text"
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="item"
                name="item"
                placeholder="add new"
                onChange={handleChange}
                value={newTask}
              />
              <input
                type="submit"
                className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 ml-2 rounded-lg"
                value="Add Item"
                onClick={addNewTask}
              />
            </div>
          </div>
          <div className="px-6 pt-6">
            <h2 className="text-gray-700 text-sm font-bold mb-2">
              Need To-Do Task
            </h2>
            <ul>
              {lists.map(
                (list, index) =>
                  !list.completed && (
                    <li
                      className="border-t border-t-1 border-grey-600 py-4 flex items-center justify-between"
                      key={list.id}
                    >
                      <span> {list.task} </span>
                      {!list.completed && (
                        <div className="flex">
                          <button
                            className="bg-green-500 hover:bg-green-700 border border-green-500 hover:border-green-700 text-white rounded px-1  ml-auto ml-1 py-1 flex"
                            onClick={() => completeTaskAsDone(list, index)}
                          >
                            <span className="text-xs">Mark as Completed</span>
                          </button>
                          <button
                            className="bg-red-500 hover:bg-red-700 border border-red-500 hover:border-red-700 text-white rounded px-1 py-1 ml-1 flex"
                            onClick={() => removeOldTask(list, index)}
                          >
                            <span className="text-xs">Remove Item</span>
                          </button>
                        </div>
                      )}
                    </li>
                  )
              )}
            </ul>

            <div className="my-6">
              <h2 className="text-gray-700 text-sm font-bold mb-2">
                Completed Task
              </h2>
              <ul>
                {completedTasks.map((completedTask, index) => (
                  <li
                    className="border-t border-t-1 border-grey-600 py-4 flex items-center justify-between"
                    key={index}
                  >
                    <span className="block mr-auto">{completedTask.task}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
