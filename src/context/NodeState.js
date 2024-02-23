import { useState } from "react";
import NoteContext from "./noteContext";
const NoteState=(props)=>{
    
    const [state,setState]= useState({
        "access":false,
        "Fname":"",
        "Lname":"",
        "Email":"",
        "Phone":"",
        "City":""
    });
    const update=(data)=>{
        const {Fname, Lname, Email, Phone, City }=data;
          setState({
            "access":true,
            "Fname":Fname,
            "Lname":Lname,
            "Email":Email,
            "Phone":Phone,
            "City":City
          })  
        
    }

    return(
        <NoteContext.Provider value={{state,update}}>
            {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState;