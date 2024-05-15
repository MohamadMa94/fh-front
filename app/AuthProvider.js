"use client";
import { useRouter } from 'next/navigation'
import { useEffect } from "react";

const AuthProvider = () => {

    const router = useRouter();
    useEffect(() => {
      var IsLoggedIn = localStorage.getItem("token")    
        if(!IsLoggedIn){
            router.push('/login');
        }        

        }, []);    
  };  
  export default AuthProvider;
  
  
  