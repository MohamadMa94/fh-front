"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
export function PollDetails({ pollDetails }) {
  const [poll, setPoll] = useState();
  const [loading, setLoading] = useState(true);
  const [option, setOption] = useState();
  const [optionId, setOptionId] = useState();

 const data = poll

 const handleForm = (e) => {
  e.preventDefault(); 
  const post = {
    "optionId":optionId,
    "userId": localStorage.getItem("userId")

  };
  fetch("https://localhost:7181/vote/"+pollDetails, {
        method: "POST",
    body: JSON.stringify(post),
    headers: new Headers({
        'Authorization': 'Bearer ' + localStorage.getItem("Token"),
        "Content-Type": "application/json",
        "Accept": "application/json"
    })}).then(response => {
    if(!response.ok){
        alert("You have already voted");
    }
    else{
        return alert("vote succesfully "),  location.replace("/poll/"+pollDetails)


        
    }
})

}

 
  useEffect(() => {
    fetch("https://localhost:7181/Polls/"+ pollDetails, {
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
        setPoll(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
      fetch("https://localhost:7181/Polls/AllOptions/"+ pollDetails, {
        method: "GET",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("Token"),
          "Content-Type": "application/json",
        },
      }).then((res) => {
          if (!res.ok) {
            throw new Error("Not Found");
          }
          return res.json();
        }).then((data) => {
          console.log(data);
          setOption(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error(error);
          setLoading(false);
        });
  }, []);
  const handleOptionId = (e) => {
    setOptionId(e.target.value);
    }
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
<div class="flex flex-col w-2/3  bg-white p-10 rounded-2xl ml-28 items-center justify-between mt-60 my-8">
      
    <div class="w-1/5 mr-10 py-10  flex  flex-col items-center justify-center rounded-3xl border-4 border-indigo-950  bg-indigo-950">
        <div>
        <p class="font-semibold p-2 my-5 text-white text-2xl"> {data?.title} </p>

  
    </div>
    <form onSubmit={handleForm}>

    <select class="block mb-2 text-lg font-semibold text-indigo-950 border-4 rounded-lg p-2  dark:text-white" onChange={handleOptionId}>
                {option?.map((option, i) => (
                    <option  key={i} value={option.id }>  {option.optionText} </option>
                ))}
            </select> 
            <button   className="w-full bg-white text-indigo-950 text-lg  hover:text-white hover:bg-green-500  border-4  border-indigo-950 font-semibold focus:ring-4 focus:outline-none focus:ring-primary-300  rounded-lg px-8 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" type="submit">
          vote  
          </button>    
          </form>

    </div>


    <div class="flex flex-row w-full  mt-20">

    {option && option.map((option) => (
            

            <div
              key={option.id}
              className="relative group w-1/6 mx-24  py-4 px-4 flex flex-col  justify-center m-2  cursor-pointer rounded-3xl rond "
            >
              <h1 className="text-2xl w-96 m-2 font-mono text-indigo-1100">
              Option: {option.optionText}
              </h1>
              <h1 className="text-2xl w-96 m-2 font-mono text-indigo-1100">
              Number of voters :{option.voteCount}
              </h1>
             
                </div>
          ))}
  </div>
                  </div>

  );
}

export default PollDetails;
