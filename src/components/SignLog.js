import React, { useState, useContext } from "react";
import noteContext from "../context/noteContext";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
const SignLog = () => {
  const [chckbox, setChckbox] = useState("password");
  const [swicth, setSwicth] = useState(true);
  const [clr, setClr] = useState("gray");
  const [bclr, setBClr] = useState(" bg-blue-500 hover:bg-blue-600");
  const contecs = useContext(noteContext);

  const [reado, setReado] = useState("");
  const [lg, setLg] = useState(" bg-gray-200 text-black rounded-es-[45px] font-normal text-base transition-all duration-300");
  const [titles, setTitles] = useState("");
  const [titleslog, setTitleslog] = useState("");

  const [sg, setSg] = useState("shadow-inner bg-[#111111] font-semibold text-xl transition-all duration-700 rounded-ee-[45px]  ");
  let name, valiue;
  const [user, setUser] = useState({
    Fname: "", 
    Lname: "", 
    Email: "", 
    Phone: "", 
    Password: "", 
    CPassword: "", 
    City: "Thane", 
    Otp: ""
  });
  // for login user
  const [userl, setUserL] = useState({ Username: "", Pass_word: "" });
  const navigate = useNavigate();

  //otp generator /opt 
  const otpGenerate = async (e) => {
    e.preventDefault();
    try {
      if (user.Email !== "") {
        setBClr("bg-gray-400 cursor-not-allowed ")
        setReado("disabled");
        setTimeout(() => {
          setBClr("bg-blue-500 hover:bg-blue-600")
          setReado("");
        }, 6000);
        //  mobile use change the ip 

        // const otpres = await axios.post("http://192.168.1.208:3001/otp", user);
        // pc use
        const otpres = await axios.post("http://localhost:3001/otp", user);



      }
      else {
        setTitles('enter Email');
      }
    } catch {

    }

  }
  //all sign input 
  // sign 

  const signup = async (e) => {
    e.preventDefault();
    try {
      if (clr === "green") {


        // const response = await axios.post("http://"+/*192.168.1.208*/"localhost:3001/form", user)
        //  mobile use change the ip 

        // const response = await axios.post("http://192.168.1.208:3001/form", user);
        const response = await axios.post("http://localhost:3001/form", user);

        console.log(response.data.keyPattern);
        if (response.data === "success") {
          setTitles('successfully');
          setTimeout(() => {
            setTitles('');
          }, 6000);
          setSwicth(false);
          setLg("shadow-inner bg-[#111111] font-semibold text-xl transition-all duration-300 rounded-es-[45px]");
          setSg(" bg-gray-200 text-black font-normal text-base transition-all duration-300 rounded-ee-[45px] ")
          // alert("successfully submited"+response.data);

        } else if (response.data === "invalid") {
          setTitles('invalid otp');
          setTimeout(() => {
            setTitles('');
          }, 6000);

        }
        else {
          if (response.data.code === 11000 && response.data.keyPattern.Email) {
            setTitles('Email already exists');
            setTimeout(() => {
              setTitles('');
            }, 6000);
            // You can handle this by informing the user or redirecting to a page with an error message.
          } else if (response.data.code === 11000 && response.data.keyPattern.Phone) {
            setTitles('Phone number already exists');
            setTimeout(() => {
              setTitles('');
            }, 6000);
            // Handle phone number duplication similarly to the email case.
          } else {
            console.log('Error inserting user:')
            setTimeout(() => {
              setTitles('');
            }, 6000);
          }
        }
      } else {
        alert("pass not match")
        setTitles("password not match");
      }
    } catch (error) {
      console.log(error);
    }

  }

  //  submit for login 
  // 
  const login = async (e) => {
    e.preventDefault();
    try {
      if (userl.Username !== "") {
        //  mobile use change the ip 
        // const logres = await axios.post("http://192.168.1.208:3001/log", userl);
        // pc use
        const logres = await axios.post("http://localhost:3001/log",userl);
        console.log(logres);

        console.log("requsted")

        console.log(logres);
        if (logres.statusText === "success") {
          contecs.update(logres.data);
          navigate("/")
          // alert("successfull")
          Cookies.set("user",logres.data.token,{
            expires:1,
          })
          console.log(logres.data.token);
        } else if (logres.data === "not match") {
          setTitleslog("invalid password");
          setTimeout(() => {
            setTitleslog('');
          }, 6000);
        }
        else {
          setTitleslog("user not exist");
          setTimeout(() => {
            setTitleslog('');
          }, 6000);
        }

      }
      else {
        setTitles('enter Email');
      }
    } catch {

    }

  }
  // for sign up input page 
  const onChangeInput = (event) => {
    // console.log(event);
    name = event.target.name;
    valiue = event.target.value;
    setUser({ 
      ...user, [name]: valiue
     });
    console.log(user)
    // execpt password Cpassword and city
  }
  //for login inputs
  const onChngInptlog = (event) => {
    // console.log(event);
    name = event.target.name;
    valiue = event.target.value;
    setUserL({ ...userl, [name]: valiue });
    console.log(userl)

  }


  // const [ct,setCt]=useState("Thane");
  // const stPassC=(Event)=>{
  // 	setPassC(Event.target.value);
  // }
  var pass;
  var city;
  var passC;
  // chage the city
  //   function other() { //user define city 
  //     city =document.getElementById("citys").value;
  //    console.log(city);

  // // change input city readonly 
  //     if (city === "Other") {
  //       setReado("")
  // 	  console.log("F "+reado);
  //     } else {
  // 		setReado("true")
  // 		console.log("T "+reado);

  //     setUser({...user, City:city}); // here we set city
  // 		// setCt(city);
  //    }
  // }
  function matchpass(e) {
    pass = document.getElementById("Password").value;
    passC = document.getElementById("PasswordC").value;

    console.log(pass);

    console.log(passC);
    // setUser({...user, CPassword:passC});
    setUser({ ...user, Password: pass, CPassword: passC }); // here we set pass.. Cpass..


    //matching pass.. cpass.. 
    if (pass === "" && passC === "") {
      setClr("gray");
    } else if (pass === passC) {
      setClr("green");
    } else {
      setClr("red");
    }

  }
  // switch for sign and log{
  function logform() {
    setSwicth(false);
    setLg("shadow-inner font-semibold text-xl transition-all duration-100 bg-[#111111] ");
    setSg(" bg-gray-200 text-black font-normal text-base transition-all duration-100 rounded-ee-[45px] ")
  }

  function signform() {
    setSwicth(true);
    setLg(" bg-gray-200 text-black rounded-es-[45px] font-normal text-base transition-all duration-100");
    setSg("shadow-inner font-semibold text-xl transition-all duration-100 bg-[#111111]  ")
  }
  // }
  return (
    <div className="w-full h-full absolute top-0 pt-[4rem] text-white flex ">
      <div className="img w-7/12 h-full max-[768px]:hidden">
        <img src="http://localhost:3000/6.png" className=" w-full h-full"></img>
      </div>
      <div className="img w-5/12  bg-[#000] max-[768px]:w-full h-full max-[768px]:overflow-hidden shadow-inner flex-nowrap max-[768px]:flex-wrap flex justify-center items-center bg-white-500 ">
        <div className="relative  h-[73%]  bg-[#111111] w-5/6 max-[768px]:w-11/12 rounded-ss-[0px]  rounded-lg ">
          <div className="bg-[#111111]  absolute -top-10 flex h-10 left-0 rounded-t-lg  w-64">
            <button onClick={signform} className={`w-32 h-10 cursor-poiter rounded-ss-md ${sg}`}>
              Sign-up
            </button>
            <button onClick={logform} className={` w-32 h-10   text-center rounded-se-md rounde p-1  ${lg}`}>Login</button>
          </div>
          {!swicth &&
            <div className=" w-full h-full flex justify-center items-center ">
              <form onSubmit={login} className='w-10/12 h-96  flex-col'>
                <div className="w-full p-2 h-auto">
                  <h1 className="w-full text-center p-2 h-auto font-bold text-white text-3xl "> WELCOME BACK  </h1>
                  <h2 className="w-full text-center p-2 h-8 font-bold text-white text-xl ">Login</h2>

                </div>
                <div className="w-full h-7 text-center text-lg text-red-600" >{titleslog}</div>
                <div className="w-full h-16 flex justify-center items-center">
                  <div className="relative h-10 w-64   flex my-3 justify-center items-center  ">
                    <input id="us" type="text"
                      required
                      name="Username"
                      placeholder=''
                      value={userl.Username}
                      onChange={onChngInptlog}
                      className=' shadow-lg  bg-transparent peer focus:outline-none text-xl px-4 pt-3 pb-2  rounded-lg w-full  border border-b-4 focus:border-[#2cffe6] border-gray-300 placeholder-transparent '>
                    </input>
                    <label htmlFor='pus' className=" transition-all duration-300 absolute left-2 text-base font-mono text-[rgb(95 99 104)] bg-[#111111]  -top-4 px-2
					 peer-placeholder-shown:text-lg  peer-placeholder-shown:pl-3 
           peer-focus:text-[#2cffe6] peer-focus:bg-[#111111]
					 peer-placeholder-shown:top-1 peer-valid:bg-[#111111]
					peer-focus:text-base  peer-focus:z-10 peer-focus:-top-4 peer-focus:px-2
					 ">Username</label> </div>
                  <i></i>
                </div>
                <div className="w-full h-16 flex justify-center items-center">
                  <div className="relative h-10 w-64   flex mt-5 justify-center items-center  ">
                    <input id="ps"
                      type={chckbox}
                      required
                      name="Pass_word"
                      placeholder=''
                      value={userl.Pass_word}
                      onChange={onChngInptlog}
                      className=' shadow-lg  bg-transparent peer focus:outline-none text-xl   px-4 pt-3 pb-2  rounded-lg w-full  border border-b-4 focus:border-[#2cffe6] border-gray-300 placeholder-transparent '>
                    </input>
                    <label htmlFor='ps' className=" transition-all duration-300 absolute left-2 text-base font-mono text-[rgb(95 99 104)] bg-[#111111]  -top-4 px-2
					 peer-placeholder-shown:text-lg  peer-placeholder-shown:pl-3 
           peer-focus:text-[#2cffe6] peer-focus:bg-[#111111]
					 peer-placeholder-shown:top-1 peer-valid:bg-[#111111]
					peer-focus:text-base  peer-focus:z-10 peer-focus:-top-4 peer-focus:px-2
					 ">password</label> </div>
                  <i></i>
                </div>
                <div className="w-full left-24 h-auto flex float-start items-center gap-2 max-[768px]:left-5  relative text-blue-700  my-3">
                  <input type='checkbox' onChange={() => { chckbox === "password" ? setChckbox("text") : setChckbox("password") }} className=' '>
                  </input>
                  <span className='ml- max-[768px]:left-0 max-[768px]:absolute text-[#2cffe6]' >show password</span>
                  <Link to="/forgot" className='absolute right-48 max-[768px]:right-12 text-[#2cffe6]' >forgot</Link>

                </div>
                <div className=' w-full my-4 flex justify-center items-center h-12'>
                  <input className='w-24 bg-[#2cffe6] mt-5 rounded-lg cursor-pointer text-black font-serif h-9 ' type='submit' value="Login"></input>
                </div>
                <div>
                  <a></a>
                </div>

              </form>
            </div>}

          {swicth && <>
            <div className="w-full mt-4 h-[10%] max-[768px]:h-[6%] max-[768px]:mt-2 ">
              <h2 className=" font-black font-serif text-2xl text-center ">Register</h2>
            </div>
            <div className="w-full h-[3%] max-[768px]:mt-2">
              <h3 className="font-serif text-xl text-center text-red-600">{titles}</h3>
            </div>
            <form onSubmit={signup} className="w-full h-full flex">
              <div className="w-full h-4/5 rounded-es-2x">
                {" "}
                <div className="w-full my-6 flex  justify-around">
                  <div className="relative h-10 w-1/2 flex mt-4 justify-center items-center  ">
                    <input
                      id="First-Name"
                      name="Fname"
                      type="text"
                      required
                      value={user.Fname}
                      onChange={onChangeInput}
                      placeholder="shakib" //don't remove placeholder it's float then

                      className="   bg-transparent shadow-lg peer focus:outline-none text-base   px-3 pt-2 pb-2  rounded-lg w-10/12 max-[768px]:w-11/12  border border-b-4 focus:border-[#2cffe6] border-gray-300 placeholder-transparent "
                    ></input>
                    <label
                      htmlFor="First-Name"
                      className=" text-[rgb(95 99 104)] bg-[#111111]  transition-all duration-300 absolute left-9 text-sm font-mono  -top-4 px-2
					 peer-placeholder-shown:text-base  peer-placeholder-shown:pl-2 peer-focus:bg-[#111111]
					 peer-placeholder-shown:top-2 peer-valid:bg-[#111111]
					peer-focus:text-sm  peer-focus:z-10 peer-focus:-top-4 peer-focus:px-2
					 "
                    >
                      First Name
                    </label>{" "}
                  </div>
                  <i></i>
                  <div className="relative h-10 w-1/2   max-[768px]:w-1/2  flex mt-4 justify-center items-center  ">
                    <input
                      id="Last-Name"
                      name="Lname"
                      type="text"
                      value={user.Lname}
                      onChange={onChangeInput}
                      required
                      placeholder="shakib"
                      className="   bg-transparent shadow-lg peer focus:outline-none text-base   px-3 pt-2 pb-2  rounded-lg w-10/12 max-[768px]:w-11/12  border border-b-4 focus:border-[#2cffe6] border-gray-300 placeholder-transparent "
                    ></input>
                    <label
                      htmlFor="Last-Name"
                      className=" transition-all duration-300 absolute left-9 text-sm font-mono text-[rgb(95 99 104)] bg-[#111111]  -top-4 px-2
					 peer-placeholder-shown:text-base    peer-placeholder-shown:pl-2 peer-focus:bg-[#111111]
					 peer-placeholder-shown:top-2 peer-valid:bg-[#111111]
					peer-focus:text-sm  peer-focus:z-10 peer-focus:-top-4 peer-focus:px-2
					 "
                    >
                      Last Name
                    </label>{" "}
                  </div>
                </div>
                <i></i>{" "}
                <div className="w-full flex my-6  justify-around">
                  <div className="relative h-10 w-1/2   flex mt-4 justify-center items-center  ">
                    <input
                      id="email"
                      type="email"
                      name="Email"
                      value={user.Email}
                      onChange={onChangeInput}
                      required
                      placeholder="shakib"
                      className="   bg-transparent shadow-lg peer focus:outline-none text-base   px-3 pt-2 pb-2  rounded-lg w-10/12  max-[768px]:11/12 border border-b-4 focus:border-[#2cffe6] border-gray-300 placeholder-transparent "
                    ></input>
                    <label
                      htmlFor="email"
                      className=" transition-all duration-300 absolute  left-9 text-sm font-mono text-[rgb(95 99 104)] bg-[#111111]  -top-4 px-2
					 peer-placeholder-shown:text-base  peer-placeholder-shown:pl-2 peer-focus:bg-[#111111]
					 peer-placeholder-shown:top-2 peer-valid:bg-[#111111]
					peer-focus:text-sm  peer-focus:z-10 peer-focus:-top-4 peer-focus:px-2
					 "
                    >
                      Email
                    </label>{" "}
                  </div>
                  <i></i>
                  <div className="relative h-10 w-1/2   flex mt-4 justify-center items-center  ">
                    <input
                      id="number"
                      type="text"
                      title="'invailid number"
                      pattern="[6789][0-9]{9}"
                      name="Phone"
                      value={user.Phone}
                      onChange={onChangeInput}
                      required
                      placeholder="shakib"
                      className="bg-transparent shadow-lg peer focus:outline-none text-base   px-3 pt-2 pb-2  rounded-lg w-10/12  max-[768px]:11/12 border border-b-4 invalid:border-red-600 focus:border-[#2cffe6] border-gray-300 placeholder-transparent "
                    ></input>
                    <label
                      htmlFor="number"
                      className=" transition-all duration-300 absolute left-9 text-sm font-mono text-[rgb(95 99 104)] bg-[#111111]  -top-4 px-2
					 peer-placeholder-shown:text-base  peer-placeholder-shown:pl-2 peer-focus:bg-[#111111]
					 peer-placeholder-shown:top-2 peer-valid:bg-[#111111]
					peer-focus:text-sm  peer-focus:z-10 peer-focus:-top-4 peer-focus:px-2
					 "
                    >
                      Phone
                    </label>{" "}
                  </div>
                </div>
                <i></i>
                <div className="w-full my-6 flex justify-around">
                  <div className="relative h-10 w-1/2   flex mt-4 justify-center items-center  ">
                    <input
                      id="Password"
                      onChange={matchpass}
                      name="Password"
                      value={user.Password}

                      type="Password"
                      required
                      placeholder="shakib"
                      className={` shadow-lg  bg-transparent peer focus:outline-none text-base   px-3 pt-2 pb-2  rounded-lg w-10/12  max-[768px]:11/12 border border-b-4 focus:border-${clr}-500 border-${clr}-300    placeholder-transparent `}
                    ></input>
                    <label
                      htmlFor="Password"
                      className="  transition-all duration-300 absolute left-9 text-sm font-mono text-[rgb(95 99 104)] bg-[#111111]  -top-4 px-2
					 peer-placeholder-shown:text-base  peer-placeholder-shown:pl-2 peer-focus:bg-[#111111]
					 peer-placeholder-shown:top-2 peer-valid:bg-[#111111]
					peer-focus:text-sm  peer-focus:z-10 peer-focus:-top-4 peer-focus:px-2
					 "
                    >
                      Password
                    </label>{" "}
                  </div>
                  <i></i>
                  <div className="relative h-10 w-1/2   flex mt-4 justify-center items-center  ">
                    <input
                      id="PasswordC"
                      onChange={matchpass}
                      name="CPassword"
                      type="text"
                      value={user.CPassword}
                      required
                      placeholder="shakib"
                      className={`   bg-transparent shadow-lg peer focus:outline-none text-base   px-3 pt-2 pb-2  rounded-lg w-10/12  max-[768px]:11/12 border border-b-4 focus:border-${clr}-500 border-${clr}-300 placeholder-transparent `}
                    ></input>
                    <label
                      htmlFor="PasswordC"
                      className=" transition-all duration-300 absolute left-9 text-sm font-mono text-[rgb(95 99 104)] bg-[#111111]  -top-4 px-2
					 peer-placeholder-shown:text-base  peer-placeholder-shown:pl-2 peer-focus:bg-[#111111]
					 peer-placeholder-shown:top-2 peer-valid:bg-[#111111]
					peer-focus:text-sm  peer-focus:z-10 peer-focus:-top-4 peer-focus:px-2
					 "
                    >
                      Confirm
                    </label>{" "}
                  </div>
                </div>
                <i></i>
                <div className="w-full my-4 flex justify-around">
                  <div className="relative h-10 w-1/2   flex mt-3 justify-center items-center ">
                    {/* onChange={other} */}
                    <input name="City" list="city-list"
                      placeholder="shakib"
                      value={user.City}
                      onChange={onChangeInput}
                      className="bg-transparent shadow-lg peer focus:outline-none text-base   px-3 pt-2 pb-2  rounded-lg w-10/12  max-[768px]:11/12 border border-b-4 focus:border-[#2cffe6] border-gray-300 placeholder-transparent " id="City">
                    </input>
                    <label htmlFor='City' className=" transition-all duration-300 absolute left-9 text-base font-mono text-[rgb(95 99 104)] bg-[#111111]  -top-4 px-2
					 peer-placeholder-shown:text-lg  peer-placeholder-shown:pl-3 peer-focus:bg-[#111111]
					 peer-placeholder-shown:top-1 peer-valid:bg-[#111111]
					peer-focus:text-base  peer-focus:z-10 peer-focus:-top-4 peer-focus:px-2
					 ">city</label>
                    <datalist id="city-list">
                      <option value="Thane">Thane</option>
                      <option value="Mumbai">Mumbai</option>
                      <option value="Mulund">Mulund</option>
                      <option value="Bangalore">Bangalore</option>
                      <option value="Dehli">Dehli</option>
                      <option value="Mumbra">Mumbra</option>
                      <option value="Other">Other</option>
                    </datalist>


                    {" "}
                  </div>
                  <i></i>
                  <div className="relative h-10 w-1/2   flex  mt-3 justify-center items-center  ">
                    <input
                      id="otp"
                      name="Otp"
                      type="text"
                      required
                      value={user.Otp}
                      onChange={onChangeInput}

                      placeholder="shakib"

                      className="bg-transparent shadow-lg peer focus:outline-none text-base   px-3 pt-2 pb-2  rounded-lg w-10/12  max-[768px]:11/12 border border-b-4  focus:border-[#2cffe6] border-gray-300 placeholder-transparent "
                    ></input>
                    <label
                      htmlFor="otp"
                      className=" transition-all duration-300 absolute left-9 text-base font-mono text-[rgb(95 99 104)] bg-[#111111]  -top-4 px-2
                    peer-placeholder-shown:text-lg  peer-placeholder-shown:pl-3 peer-focus:bg-[#111111]
                    peer-placeholder-shown:top-1 peer-valid:bg-[#111111]
                   peer-focus:text-base  peer-focus:z-10 peer-focus:-top-4 peer-focus:px-2
					 "
                    >
                      Otp
                    </label>{" "}
                  </div>
                </div>
                <i></i>{" "}
                <div className="w-full my-6 flex justify-around">
                  <button disabled={reado} onClick={otpGenerate} className={` w-40 h-10 rounded-xl   text-lg text-white max-[768px]:w-28  text-center ${bclr} `}> get OTP</button>
                  <input type="submit" value="submit" className=" w-40 h-10 rounded-xl bg-blue-500 hover:bg-blue-600 max-[768px]:w-28 text-lg text-white text-center  "></input>

                </div>
              </div>
            </form> </>}
        </div>


      </div>
    </div>

  );
};
export default SignLog;
