// const User=require("./src/models/users")
const express = require('express')
const Users= require("./models/users")
const cors=require("cors")
require("./db/connectDB")

const mongoose = require("mongoose");


const app = express()
const port = 3001
app.use(express.json());
app.use(cors())
app.post('/form', async(req, res) => {
    try {
     const {Fname, Lname, Email, Phone, Password, CPassword, City} =req.body;
     if(Password === CPassword){
         const User = new Users({
             
            
              Fname:Fname,
              Lname:Lname,
              Password:Password,
              City:City,
              Email:Email,
              Phone:Phone
          })
          const created= await User.save();
          console.log("one")
          res.send("success")
     }else{
          res.send("not match")
     }

    } catch (error) {
         console.log("done"+error);
         res.send(error)
     

         
    }
   
    })

app.listen(port, () => console.log(`Example app listening on port ${port}!`))