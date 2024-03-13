"use client";
import { useRouter } from 'next/navigation'
import { useEffect } from "react";
const AuthProvider = () => {
    const router = useRouter();
    useEffect(() => {
        if(!localStorage.getItem("Token")){
            router.push('/login');
        }
    }, []);  
    return (
      <div > 
      </div>
    );
  };  
  export default AuthProvider;
  
  
  
  