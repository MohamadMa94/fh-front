"use client";
import { useRouter } from 'next/navigation'
import { useEffect } from "react";
const Dashboard = () => {

    const router = useRouter();
    useEffect(() => {
        
        
        function  GetUser () {
          fetch("https://localhost:7181/api/Account",
           {
            method: "GET",
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
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
              data.forEach((user) => {
                if (localStorage.getItem("userId")) {
                  localStorage.setItem("familyId", user.familyId);
      
                      
                }
              });
            })
            .catch((error) => {
              console.error(error);
            });
        };
        GetUser();
        }, []);
    return (
      <div > 
      </div>
    );
  };  
  export default Dashboard;
  
  
