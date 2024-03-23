"use client";
import { useRouter } from 'next/navigation'
import { useEffect } from "react";
const AuthProvider = () => {
    const router = useRouter();
    useEffect(() => {
        if(!localStorage.getItem("Token")){
            router.push('/login');
        }function  SetUser () {
          fetch("https://localhost:7181/api/Families",
           {
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
        SetUser();
        }, []);
    return (
      <div > 
      </div>
    );
  };  
  export default AuthProvider;
  
  
