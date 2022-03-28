import React, { useEffect } from 'react'
import Navbar from './Navbar';
import Products from './Products';
import { Navigate } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

const Home = () => {
  const { loginWithRedirect, isAuthenticated, isLoading } = useAuth0();
  console.log("loginwithredirect", useAuth0());
  
  useEffect(()=>{
   
    if (!isLoading) {
      if (!isAuthenticated) { 
      window.location = "/";
        
      } 
    }
  }, [isLoading, isAuthenticated])
  if (isAuthenticated) {
    return (
      <div>
      <Navbar/>
      <Products/>  
      </div>
  )
  } else {
    return <h1>Loading...</h1>
  }
  
}

export default Home;