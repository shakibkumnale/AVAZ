// const jwt =require("jsonwebtoken");
import axios from "axios";

import React, { useContext } from 'react'
import noteContext from "../context/noteContext";
import { useEffect } from "react";

// import Chatbot from './Chatbot';
import SignLog from './SignLog';
import Home from './Home';
import Profile from './Profile';

import { Navigate } from "react-router-dom"; 


const Auth=(props) =>{
  const access=useContext(noteContext)
  // const navigate= useNavigate();
  // const isAuthenticated =acces.access;
  // useEffect(() => {
  //  acces.update();
  
  // }, [])
  
  // useEffect(async()=>{
  //  isAuthenticated = await axios.post("http://"+/*192.168.1.208*/"localhost:3001/auth")
    
  // })
  console.log(access.state)
  const {Component} = props
  // console.log(Component);
  return (
access.state.Token ? <Component data={access.state}/> :<Navigate to='/sign'/>



  
  )
}

export default Auth;