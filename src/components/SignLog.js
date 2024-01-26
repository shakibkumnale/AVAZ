import React, { useState } from "react";

const SignLog = () => {
	const [chckbox,setChckbox]= useState("password");
	const [swicth,setSwicth]= useState(true);

	

  const [clr, setClr] = useState("gray");
  const [reado,setReado]=useState("true");
  const [lg,setLg]=useState(" bg-gray-200 ");
  const [sg,setSg]=useState("shadow-inner  border-4  border-b-white ");


  const [ct,setCt]=useState("Thane");
  // const stPassC=(Event)=>{
  // 	setPassC(Event.target.value);
  // }
  var pass;
  var city;
  var passC;
  function other() {
    city =document.getElementById("citys").value;
   console.log(city);


    if (city === "Other") {
      setReado("")
	  console.log("F "+reado);
    } else {
		setReado("true")
		console.log("T "+reado);
		setCt(city);


    }
  }
  function matchpass() {
    pass = document.getElementById("Password").value;
    passC = document.getElementById("PasswordC").value;

    console.log(pass);

    console.log(passC);

    if (pass === "" && passC === "") {
      setClr("gray");
    } else if (pass === passC) {
      setClr("green");
    } else {
      setClr("red");
    }
	
  }
  function logform() {
	setSwicth(false);
	setLg("shadow-inner  border-4  border-b-white ");
	setSg(" bg-gray-200 ")

  }
  function signform() {
	setSwicth(true);
	setLg(" bg-gray-200 ");
	setSg("shadow-inner  border-4  border-b-white ")



  }
  return (
    <div className="w-full h-screen border-4 selection: border-blue-800  flex ">
      <div className="img w-7/12 h-full bg-lime-500">
        <img src="http://localhost:3000/6.png" className=" w-full h-full"></img>
      </div>
      <div className="img w-5/12 h-full shadow-inner flex-nowrap flex justify-center items-center bg-white-500 ">
        <div className="relative h-[73%] w-5/6 border-[4px] shadow-lg border-gray-200 rounded-3xl ">
          <div className=" absolute -top-10 flex h-10 left-5 rounded-t-2xl  w-64">
            <button onClick={signform} className={`w-32 h-10 cursor-poiter rounded-ss-2xl ${sg}`}>
			Sign
			</button>
            <button onClick={logform} className={` w-32 h-10   text-center rounded-se-2xl p-1 ${lg}`}>Login</button>
          </div>
		   { !swicth &&
		  <div className=" w-full h-full flex justify-center items-center ">
		  <form className='w-10/12 h-96  flex-col'>
				<div className="w-full p-2 h-auto">
					<h1  className="w-full text-center p-2 h-auto font-bold text-gray-950 text-3xl ">login </h1>
					
				</div>
				<div className="w-full h-7 text-center text-lg text-red-600" >invailid </div>
				<div className="w-full h-16 flex mb-3 justify-center items-center">
				<div className="relative h-10 w-64 flex mt-4 justify-center items-center  ">
					<input id="user" type="text" required placeholder='shakib' className='shadow-lg   bg-transparent peer focus:outline-none  pl-4 pt-3 pb-2  rounded-lg w-full  border border-b-4 focus:border-blue-500 border-gray-300 placeholder-transparent '>
					</input>   
					<label htmlFor='user' className=" transition-all duration-300 absolute left-2 text-base font-mono text-neutral-600 -top-4 px-2 bg-white
					 peer-placeholder-shown:text-lg  peer-placeholder-shown:pl-3 peer-focus:bg-white 
					 peer-placeholder-shown:top-1 peer-valid:bg-white
					peer-focus:text-base  peer-focus:z-10 peer-focus:-top-4 peer-focus:px-2
					 ">username</label> </div>
				    <i></i>
				</div>
			    <div className="w-full h-16 flex justify-center items-center">
				<div className="relative h-10 w-64 flex mt-3 justify-center items-center  ">
					<input id="ps" type={chckbox} required placeholder='' className=' shadow-lg  bg-transparent peer focus:outline-none  pl-4 pt-3 pb-2  rounded-lg w-full  border border-b-4 focus:border-blue-500 border-gray-300 placeholder-transparent '>
					</input>   
					<label htmlFor='ps' className=" transition-all duration-300 absolute left-2 text-base font-mono text-neutral-600 -top-4 px-2 bg-white
					 peer-placeholder-shown:text-lg  peer-placeholder-shown:pl-3 peer-focus:bg-white 
					 peer-placeholder-shown:top-1 peer-valid:bg-white
					peer-focus:text-base  peer-focus:z-10 peer-focus:-top-4 peer-focus:px-2
					 ">password</label> </div>
				    <i></i>
				</div>
			<div className="w-full left-16 h-auto flex float-start  relative text-blue-700  my-3"> 
				<input type='checkbox' onChange={()=>{chckbox==="password"? setChckbox("text"): setChckbox("password")}} className=' '>
				</input>
				<span className='ml-4'>show password</span>
				<a href="#" className='absolute right-36 ' >forgot</a>

			</div>
			<div className=' w-full my-4 flex justify-center items-center h-12'>
				<input className='w-24 bg-blue-500 rounded- cursor-pointer text-white font-serif h-9 ' type='submit' value="Login"></input>
			</div>
			<div>
				<a></a>
			</div>
			
			</form>
			</div> } 
     
		 {swicth &&<>
		  <div className="w-full mt-4 h-[10%] ">
			<h2 className=" font-black font-serif text-2xl text-center ">Register</h2>
		  </div>
          <div className="w-full h-[3%]">
			<h3 className="font-serif text-xl text-center text-red-600">invailid</h3>
			</div>
          <form method="post" action="#" className="w-full h-full flex">
            <div className="w-full h-4/5 rounded-es-2x">
              {" "}
              <div className="w-full my-6 flex justify-around">
                <div className="relative h-10 w-64 flex mt-4 justify-center items-center  ">
                  <input
                    id="First-Name"
                    name="First-Name"
                    type="text"
                    required
                    placeholder="shakib"
					
                    className="   bg-transparent shadow-lg peer focus:outline-none text-base  pl-3 pt-2 pb-2  rounded-lg w-52  border border-b-4 focus:border-blue-500 border-gray-300 placeholder-transparent "
                  ></input>
                  <label
                    htmlFor="First-Name"
                    className=" transition-all duration-300 absolute left-9 text-sm font-mono text-neutral-600 -top-4 px-2 bg-white
					 peer-placeholder-shown:text-base  peer-placeholder-shown:pl-2 peer-focus:bg-white 
					 peer-placeholder-shown:top-2 peer-valid:bg-white
					peer-focus:text-sm  peer-focus:z-10 peer-focus:-top-4 peer-focus:px-2
					 "
                  >
                    First Name
                  </label>{" "}
                </div>
                <i></i>
                <div className="relative h-10 w-64 flex mt-4 justify-center items-center  ">
                  <input
                    id="Last-Name"
                    name="Last-Name"
                    type="text"
                    required
                    placeholder="shakib"
                    className="   bg-transparent shadow-lg peer focus:outline-none text-base  pl-3 pt-2 pb-2  rounded-lg w-52  border border-b-4 focus:border-blue-500 border-gray-300 placeholder-transparent "
                  ></input>
                  <label
                    htmlFor="Last-Name"
                    className=" transition-all duration-300 absolute left-9 text-sm font-mono text-neutral-600 -top-4 px-2 bg-white
					 peer-placeholder-shown:text-base  peer-placeholder-shown:pl-2 peer-focus:bg-white 
					 peer-placeholder-shown:top-2 peer-valid:bg-white
					peer-focus:text-sm  peer-focus:z-10 peer-focus:-top-4 peer-focus:px-2
					 "
                  >
                    Last Name
                  </label>{" "}
                </div>
              </div>
              <i></i>{" "}
              <div className="w-full flex my-6 justify-around">
                <div className="relative h-10 w-64 flex mt-4 justify-center items-center  ">
                  <input
                    id="email"
                    type="email"
                    name="Email"
                    required
                    placeholder="shakib"
                    className="   bg-transparent shadow-lg peer focus:outline-none text-base  pl-3 pt-2 pb-2  rounded-lg w-52  border border-b-4 focus:border-blue-500 border-gray-300 placeholder-transparent "
                  ></input>
                  <label
                    htmlFor="email"
                    className=" transition-all duration-300 absolute left-9 text-sm font-mono text-neutral-600 -top-4 px-2 bg-white
					 peer-placeholder-shown:text-base  peer-placeholder-shown:pl-2 peer-focus:bg-white 
					 peer-placeholder-shown:top-2 peer-valid:bg-white
					peer-focus:text-sm  peer-focus:z-10 peer-focus:-top-4 peer-focus:px-2
					 "
                  >
                    Email
                  </label>{" "}
                </div>
                <i></i>
                <div className="relative h-10 w-64 flex mt-4 justify-center items-center  ">
                  <input
                    id="number"
                    type="text"
					title="'invailid number"
					pattern="[6789][0-9]{9}"
                    name="Phone"
                    required
                    placeholder="shakib"
                    className="bg-transparent shadow-lg peer focus:outline-none text-base  pl-3 pt-2 pb-2  rounded-lg w-52  border border-b-4 invalid:border-red-600 focus:border-blue-500 border-gray-300 placeholder-transparent "
                  ></input>
                  <label
                    htmlFor="number"
                    className=" transition-all duration-300 absolute left-9 text-sm font-mono text-neutral-600 -top-4 px-2 bg-white
					 peer-placeholder-shown:text-base  peer-placeholder-shown:pl-2 peer-focus:bg-white 
					 peer-placeholder-shown:top-2 peer-valid:bg-white
					peer-focus:text-sm  peer-focus:z-10 peer-focus:-top-4 peer-focus:px-2
					 "
                  >
                    Contact No.
                  </label>{" "}
                </div>
              </div>
              <i></i>
              <div className="w-full my-6 flex justify-around">
                <div className="relative h-10 w-64 flex mt-4 justify-center items-center  ">
                  <input
                    id="Password"
                    onChange={matchpass}
                    name="Password"
                    type="Password"
                    required
                    placeholder="shakib"
                    className={` shadow-lg  bg-transparent peer focus:outline-none text-base  pl-3 pt-2 pb-2  rounded-lg w-52  border border-b-4 focus:border-${clr}-500 border-${clr}-300    placeholder-transparent `}
                  ></input>
                  <label
                    htmlFor="Password"
                    className="  transition-all duration-300 absolute left-9 text-sm font-mono text-neutral-600 -top-4 px-2 bg-white
					 peer-placeholder-shown:text-base  peer-placeholder-shown:pl-2 peer-focus:bg-white 
					 peer-placeholder-shown:top-2 peer-valid:bg-white
					peer-focus:text-sm  peer-focus:z-10 peer-focus:-top-4 peer-focus:px-2
					 "
                  >
                    Password
                  </label>{" "}
                </div>
                <i></i>
                <div className="relative h-10 w-64 flex mt-4 justify-center items-center  ">
                  <input
                    id="PasswordC"
                    onChange={matchpass}
                    name="PasswordC"
                    type="text"
                    required
                    placeholder="shakib"
                    className={`   bg-transparent shadow-lg peer focus:outline-none text-base  pl-3 pt-2 pb-2  rounded-lg w-52  border border-b-4 focus:border-${clr}-500 border-${clr}-300 placeholder-transparent `}
                  ></input>
                  <label
                    htmlFor="PasswordC"
                    className=" transition-all duration-300 absolute left-9 text-sm font-mono text-neutral-600 -top-4 px-2 bg-white
					 peer-placeholder-shown:text-base  peer-placeholder-shown:pl-2 peer-focus:bg-white 
					 peer-placeholder-shown:top-2 peer-valid:bg-white
					peer-focus:text-sm  peer-focus:z-10 peer-focus:-top-4 peer-focus:px-2
					 "
                  >
                    Confirm Password {passC}
                  </label>{" "}
                </div>
              </div>
              <i></i>
			  <div className="w-full my-4 flex justify-around">
                <div className="relative h-10 w-64 flex mt-3 justify-center items-center ">
                 
				 <select name="citys" onChange={other} className="w-40 shadow-lg h-10 text-lg rounded-lg outline-none focus:bg-blue-200 border border-b-4 focus:border-blue-500 border-gray-300 text-center " id="citys">
					<option selected value="Thane">Thane</option>
					<option value="Mumbai">Mumbai</option>
					<option value="Mulund">Mulund</option>
					<option value="Bangalore">Bangalore</option>
					<option value="Dehli">Dehli</option>
					<moption value="Mumbra">Mumbra</moption>
					<option value="Other">Other</option>
				
				 </select>
             
                 {" "}
                </div>
                <i></i>
                <div className="relative h-10 w-64 flex  mt-3 justify-center items-center  ">
                  <input
                    id="city"
                    name="City"
                    type="text"
                    required
				 	value={ct}
                    placeholder="shakib"
					onChange={(e)=>{setCt(e.target.value)}}
                    className="   bg-transparent shadow-lg peer focus:outline-none text-base  pl-3 pt-2 pb-2  rounded-lg w-52  border border-b-4 focus:border-blue-500 border-gray-300 placeholder-transparent "
                  readOnly={reado}></input>
                  <label
                    htmlFor="city"
                    className=" transition-all duration-300 absolute left-9 text-sm font-mono text-neutral-600 -top-4 px-2 bg-white
					 peer-placeholder-shown:text-base  peer-placeholder-shown:pl-2 peer-focus:bg-white 
					 peer-placeholder-shown:top-2 peer-valid:bg-white
					peer-focus:text-sm  peer-focus:z-10 peer-focus:-top-4 peer-focus:px-2
					 "
                  >
                  City
                  </label>{" "}
                </div>
              </div>
              <i></i>{" "}
			  <div className="w-full my-6 flex justify-around">
				 
				<input type="submit"  className=" w-40 h-10 rounded-xl bg-blue-500 hover:bg-blue-600 text-lg text-white text-center  "></input>
			  </div> 
            </div>
			</form> </>}
			</div>
          
        
      </div>
    </div>
	
  );
};
export default SignLog;
