import React from 'react'

import Chatbot from './Chatbot';
import SignLog from './SignLog';
import Home from './Home';
import { useNavigate } from "react-router-dom"; 


const Auth=(props) =>{
     const ax ="stk";
     console.log(props.com);
  return (<>{ ax==="stk" &&

<h1>login</h1>

  }{ ax !=="stk" &&
  <SignLog /> 
  }
    </>
  )
}

export default Auth;