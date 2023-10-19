"use client";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getAllUsers, getAllTasks } from "./api/services.js";

export default function Home() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [users, setUsers] = useState([]);
  const login = () => {
    getAllTasks()
      .then(function (response) {
        Cookies.set("loggedin", true);
        router.push("/dashboard");
      })
      .catch(function (error) {});
  };

  useEffect(() => {
    getAllUsers()
      .then(function (response) {
        setUsers(response.data);
      })
      .catch(function (error) {});
  }, []);

  useEffect(() => {
    if (username && password) {
      localStorage.setItem("USERNAME_KEY", username);
      localStorage.setItem("PASSWORD_KEY", password);
      const userData = users.find((user) => user.username == username);
      localStorage.setItem("userData", JSON.stringify(userData));
    }
  }, [username, password]);

  const handleChangeUsername = (e) => {
    setUsername(e.target.value);
    setIsShowPassword(true);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };
  return (
    <div className="mt-10">
      <section className="">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
            <div className="p-6 space-y-4 md:space-y-6 pb-14">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                Sign in to your account
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                <label htmlFor="small" className="block text-sm font-medium ">
                  Username
                </label>
                <select
                  id="small"
                  className="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                  onChange={handleChangeUsername}
                >
                  <option defaultValue>Choose a Username</option>
                  {users.map((user) => (
                    <option
                      style={{ backgroundImage:`url(${user.avatar})`}}
                      key={user.id}
                      value={user.username}
                    >
                      {user.name}
                    </option>
                  ))}
                </select>
                {isShowPassword && (
                  <div>
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      className=" border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                      onChange={handleChangePassword}
                    />
                  </div>
                )}

                {isShowPassword && (
                  <button
                    type="button"
                    className="bg-gray-900 hover:bg-gray-700 w-full text-white font-bold py-2 px-4 rounded-lg"
                    onClick={login}
                  >
                    Sign In
                  </button>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
