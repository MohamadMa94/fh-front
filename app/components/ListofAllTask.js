"use client";
import React, { useState, useEffect } from "react";
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import Link from "next/link";

export function GetTasks() {
  const [tasks, setTasks] = useState([]);
 
  useEffect(() => {
    fetch("https://localhost:7181/TaskAs", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("Token"),
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Not Found");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setTasks(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return tasks;
}

const ListofAllTasks = () => {
  const tasks = GetTasks();


  return (
    <div className="pt-8 ml-12 rounded-2xl bg-gray-300">
      <div className="flex-1 px-2 sm:px-0">
        <div className="flex justify-between items-center">
          <h3 className="text-6xl font-bold text-indigo-950">All Tasks</h3>
          <div className="inline-flex items-center space-x-2">
            <a
              className="bg-gray-900 text-white/50 p-2 rounded-md hover:text-white smooth-hover"
              href="#"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                />
              </svg>
            </a>
            <a
              className="bg-gray-900 text-white/50 p-2 rounded-md hover:text-white smooth-hover"
              href="#"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 10h16M4 14h16M4 18h16"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="mb-10 sm:mb-0 mt-10 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <Link
            href={"/alltask/addtask"}
            className="group border-4 bg-white border-indigo-1100 py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-3xl hover:bg-gray-900/40 hover:smooth-hover"
          >
            <a
              className="bg-gray-900/70 text-white/50 group-hover:text-white group-hover:smooth-hover flex w-20 h-20 rounded-full items-center justify-center"
              href="#"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </a>
            <a
              className="text-white/50 group-hover:text-white group-hover:smooth-hover text-center"
              href="#"
            >
              Create Task
            </a>
          </Link>

          {tasks.map((task) => (
            <div
              key={task.id}
              className="relative group w-full bg-gray-200 border-green-500 border-2 shadow-2xl hover:border-8 py-4 px-4 flex flex-col justify-items-start cursor-pointer rounded-3xl rond hover:smooth-hover"
            >
              <h1 className="text-2xl m-2 font-mono text-indigo-1100">
                {task.name}
              </h1>
              <h1 className="text-2xl m-2 font-mono text-indigo-1100">
                {task.userId}
              </h1>
              <span className="text-sm mb-10 ml-2 font-mono text-indigo-1100 text-balance">
                {task.description}
              </span>
              <span className="justify-end flex text-sm mr-2 font-mono text-indigo-1100 text-balance">
                {new Date(task.deadline).toLocaleDateString()}
              </span>
              <div className="flex justify-between">
                <button className="w-24 text-indigo-100 bg-red-700 font-medium rounded-3xl text-sm py-3 text-center" type="submit">
                  {task.completed}
                </button>
                <div className="justify-end flex items-center">
                  <FaEdit className="text-3xl mr-2 text-indigo-1100 justify-end" />
                  <MdDeleteForever className="text-3xl text-indigo-1100 justify-end" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListofAllTasks;
