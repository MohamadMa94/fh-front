"use client";

import React, { useState, useEffect } from "react";
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import Link from "next/link";

const fetchTasks = () => {
  return fetch("https://localhost:7181/TaskAs/UserUncompletedTasks/" + localStorage.getItem("name"), {
    method: "GET",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("Token"),
      "Content-Type": "application/json",
    },
  })
    .then(response => {
      if (!response.ok) {
        throw new Error("Failed to fetch tasks");
      }
      return response.json();
    })
    .catch(error => {
      console.error(error);
      return [];
    });
};

const ListofMyTask = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks().then(tasksData => {
      setTasks(tasksData);
    });
  }, []);

  const handleComplete = (taskId) => {
    const post = { completed: true };
    fetch("https://localhost:7181/TaskAs/tasks/completed/" + taskId, {
      method: "PUT",
      body: JSON.stringify(post),
      headers: {
        Authorization: "Bearer " + localStorage.getItem("Token"),
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(response => {
        if (!response.ok) {
          throw new Error("Failed to mark task as completed");
        }
        alert("Task completed successfully");
        window.location.replace("/mytask");
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div className="pt-8 ml-12 rounded-2xl bg-gray-300">
      <div className="flex-1 px-2 sm:px-0">
        <div className="flex justify-between items-center">
          <h3 className="text-6xl font-bold text-indigo-950">My Tasks</h3>
        </div>
        <div className="mb-10 sm:mb-0 mt-10 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
     
          {tasks.map(task => (
            <div key={task.id} className="relative group w-full bg-gray-200 border-green-500 border-2 shadow-2xl hover:border-8 py-4 px-4 flex flex-col justify-items-start cursor-pointer rounded-3xl rond hover:smooth-hover">
              <h1 className="text-2xl m-2 font-mono text-indigo-1100">{task.name}</h1>
              <h1 className="text-2xl m-2 font-mono text-indigo-1100">{task.userName}</h1>
              <span className="text-sm mb-10 ml-2 font-mono text-indigo-1100 text-balance">{task.description}</span>
              <span className="justify-end flex text-sm mr-2 font-mono text-indigo-1100 text-balance">{new Date(task.deadline).toLocaleDateString()}</span>
              <div className="flex justify-between">
                <button onClick={() => handleComplete(task.id)} className="w-full mr-4 text-lg hover:text-white text-indigo-950 bg-white border-4 border-indigo-950 font-semibold hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-primary-300 rounded-lg px-6 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                  Completed
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

export default ListofMyTask;
