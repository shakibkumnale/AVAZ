import axios from 'axios';
import React, { useContext, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Cookie from 'js-cookie'
import noteContext from "../context/noteContext";

export default function Forget() {


    const [user, setuser] = useState({
        Email: "", //email and username will be same username
        otp: "",
        password: "",
        Cpassword: ""


    })

    const onChngInptlog = (event) => {
        // console.log(event);
        let name = event.target.name;
        let value = event.target.value;
        setuser({ ...user, [name]: value });
        console.log(user)

    }

    const submit = async (e) => {
        e.preventDefault();
        try {
            if (Otp === false) {


                const forgot = await axios.post("http://localhost:3001/forgot", user);
                console.log(forgot.data);
                if (forgot.data === 'exist') {
                    // alert("present")
                    setOtp(true)
                }
                else if (forgot.data === 'not-exist') {
                    // alert("not")
                    modalFun()
                setmodal({
                        message:'User Not Exist Please Register',
                        display:true
                    })
                    setOtp(false)


                } else {
                    // alert("err")
                   
                    setmodal({
                        message:'Some Error please try after time',
                        display:true
                    })
                    setOtp(false)

                }

            }
            if (sendOTP) {
                const OTP = await axios.post("http://localhost:3001/forgotOTPAuth", user);
                console.log(OTP.data);
                if (OTP.data === "OTP-AUTHENTICATED") {
                    setReset(true)
                console.log(OTP.data);

                }
                else if( OTP.data === "NOT-OTP-AUTHENTICATED"){
                    setReset(false)
                    setmodal({
                        message:'Invalid OTP',
                        display:true
                    })
                    modalFun()
                console.log(OTP.data);


                }
                else{
                    setReset(false)

                }
            }
        } catch (error) {
            setReset(false)

            console.log(error);
            setmodal({
                message:'Some Error please try after time',
                display:true
            })
        
        }
    }

    const [sendOTP, setsendOTP] = useState(false)
    const OtpGenerate = async () => {
        try {
            setsendOTP(true)

            const OTP = await axios.post("http://localhost:3001/otp", user);
            console.log(OTP);
        } catch (error) {
            setmodal({
                message:'Some Error please try after time',
                display:true
            })
            console.log(error);
        }


    }

    
    ///reamin updation
    const Resetpass = async (e) => {
        e.preventDefault()

        if (user.password === user.Cpassword) {

            try {
                // alert("smae")
                // const Reset = await axios.post("http://localhost:3001/reset", user);
                const Reset = await axios.put("http://localhost:3001/reset", user)
                console.log(Reset.data.modifiedCount);
                // {
                //     acknowledged: true,
                //     modifiedCount: 1,
                //     upsertedId: null,
                //     upsertedCount: 0,
                //     matchedCount: 1
                //   }
                if (Reset.data.modifiedCount===1) {
                    // alert('Password Updated')
                    setmodal('Password Updated')
                    navigate('/')

                } else {
                    // alert('Inavlid')
                    setmodal({
                        message:'Invalid',
                        display:true
                    })

                    
                }

            } catch (error) {
                console.log(error);
                setmodal({
                    message:'Some Error please try after time',
                    display:true
                })


            }


        } else if (user.password != user.Cpassword) {
            setmodal(()=>{
                return {message:'password not match'}
            })
            modalFun()
            // alert(modal.message)

        }


    }
    const modalFun=()=>{

        setTimeout(()=>{
            setmodal(()=>{
                return{ display:false}
            })
        },4000)
    }

    
    const [Otp, setOtp] = useState(false)
    const [Reset, setReset] = useState(false)
    const [chckbox, setChckbox] = useState("password");
    const navigate=useNavigate()
    const [modal,setmodal]=useState({
        message:"",
        display:false
    })


    const context=useContext(noteContext)
    
    // const homePage=()=>{

    // }
    const access=useContext(noteContext)

    console.log(access.state.Fname+"  ......." );
   
    return (
        <div className="w-full h-full absolute top-0 pt-[4rem] text-white flex overflow-hidden  z-auto ">
            <div className="img w-7/12 h-full max-[768px]:hidden">
                <img src="http://localhost:3000/6.png" className=" w-full h-full"></img>
            </div>
            <div className="img w-5/12  bg-[#000] overflow-hidden relative max-[768px]:w-full h-full max-[768px]:overflow-hidden shadow-inner flex-nowrap max-[768px]:flex-wrap flex justify-center items-center bg-white-500 ">
            {/* <h1 className={` text-white bg-blck absolute ${modal.display?'top-0 p4':'-top-20 hidden'} top-10 p4 transition-all delay-300 duration-300  text-lg bg-red-600  w-full `} >{modal.message} </h1> */}


                {!Reset &&

                    <div className="relative  h-[73%]  bg-[#111111] w-5/6 max-[768px]:w-11/12 rounded-ss-[0px]  rounded-lg ">

                        <div className=" w-full h-full flex justify-center items-center ">
                            <form className='w-10/12 h-96  flex-col' onSubmit={submit}>
                                <div className="w-full p-2 h-auto">
                                    <h1 className="w-full text-center p-2 h-auto font-bold text-white text-3xl "> Forgot Password</h1>
                <div className="w-full h-7 text-center text-lg text-red-600" >{modal.message}</div>
                                </div>
                                {/* <div className="w-full h-7 text-center text-lg text-red-600" >{titleslog}</div> */}
                                <br />
                                <div className="w-full h-16 flex justify-center items-center">
                                    <div className="relative h-10 w-64   flex my-3 justify-center items-center  ">
                                        <input id="us" type="text"
                                            disabled={Otp ? true : false}
                                            required
                                            name="Email"
                                            placeholder=''
                                            value={user.Email}
                                            onChange={onChngInptlog}
                                            className={` shadow-lg bg-black ${Otp ? 'opacity-50' : 'opacity-100'}   bg-transparent peer focus:outline-none text-xl px-4 pt-3 pb-2  rounded-lg w-full  border border-b-4 focus:border-[#2cffe6] border-gray-300 placeholder-transparent `}>
                                        </input>
                                        <label htmlFor='pus' className=" transition-all duration-300 absolute left-2 text-base font-mono text-[rgb(95 99 104)] bg-[#111111]  -top-4 px-2
                                                peer-placeholder-shown:text-lg  peer-placeholder-shown:pl-3 
                                    peer-focus:text-[#2cffe6] peer-focus:bg-[#111111]
                                                peer-placeholder-shown:top-1 peer-valid:bg-[#111111]
                                                peer-focus:text-base  peer-focus:z-10 peer-focus:-top-4 peer-focus:px-2
                                                " >Username</label> </div>
                                    <i></i>
                                </div>

                                {/* <div className="w-full left-24 h-auto flex float-start items-center gap-2 max-[768px]:left-5  relative text-blue-700  my-3">
                  <input type='checkbox' onChange={() => { chckbox === "password" ? setChckbox("text") : setChckbox("password") }} className=' '>
                  </input>
                  <span className='ml- max-[768px]:left-0 max-[768px]:absolute text-[#2cffe6]' >show password</span>
                  <Link to="/forgot" className='absolute right-48 max-[768px]:right-12 text-[#2cffe6]' >forgot</Link>

                </div> */}



                                {Otp &&

                                    <div className="w-full h-16 flex justify-center items-center ">
                                        <div className="relative h-10 w-64   flex mt-5 justify-center items-center   ">
                                            <input id="ps"
                                                type='text'
                                                required
                                                name="otp"
                                                placeholder=''
                                                disabled={sendOTP ? false : true}
                                                value={user.otp}
                                                onChange={onChngInptlog}

                                                className=' shadow-lg  bg-transparent peer focus:outline-none text-xl   px-4 pt-3 pb-2  rounded-lg w-full  border border-b-4 focus:border-[#2cffe6] border-gray-300 placeholder-transparent '
                                            >
                                            </input>
                                            <label htmlFor='ps' className=" transition-all duration-300 absolute left-2 text-base font-mono text-[rgb(95 99 104)] bg-[#111111]  -top-4 px-2
                                                peer-placeholder-shown:text-lg  peer-placeholder-shown:pl-3 
                                    peer-focus:text-[#2cffe6] peer-focus:bg-[#111111]
                                                peer-placeholder-shown:top-1 peer-valid:bg-[#111111]
                                                peer-focus:text-base  peer-focus:z-10 peer-focus:-top-4 peer-focus:px-2
                                                ">OTP</label>
                                            <button className=' absolute right-2 opacity-20 hover:opacity-80' onClick={OtpGenerate}>Send</button>
                                        </div>
                                    </div>}



                                <div className=' w-full my-4 flex  flex-col justify-center items-center h-18 gap-5'>
                                    <input className='w-24 bg-[#2cffe6] mt-5 rounded-lg cursor-pointer text-black font-serif h-9 ' type='submit' value="Forgot"></input>
                                    {Otp && <h1 className=' opacity-20 cursor-pointer hover:underline' onClick={() => { setOtp(false) }}>change Username or Email</h1>}
                                </div>

                                {/* <h1>{user.username}</h1> */}
                                <div>
                                    <a></a>
                                </div>

                            </form>
                        </div>



                    </div>

                }


                {Reset &&

                    <div className="relative  h-[73%]  bg-[#111111] w-5/6 max-[768px]:w-11/12 rounded-ss-[0px]  rounded-lg ">

                        <div className=" w-full h-full flex justify-center items-center ">
                            <form className='w-10/12 h-96  flex-col' onSubmit={Resetpass}>
                                <div className="w-full p-2 h-auto">
                                    <h1 className="w-full text-center p-2 h-auto font-bold text-white text-3xl "> Reset Password</h1>
                                    <div className="w-full h-7 text-center text-lg text-red-600" >{modal.message}</div>

                                </div>
                                {/* <div className="w-full h-7 text-center text-lg text-red-600" >{titleslog}</div> */}
                                <br />
                                <div className="w-full h-16 flex justify-center items-center">
                                    <div className="relative h-10 w-64   flex my-3 justify-center items-center  ">
                                        <input id="us" type={chckbox}
                                            required
                                            name="password"
                                            placeholder=''
                                            value={user.password}
                                            onChange={onChngInptlog}
                                            minLength={8}
                                            maxLength={12}
                                            className={` shadow-lg bg-black ${Otp ? 'opacity-50' : 'opacity-100'}   bg-transparent peer focus:outline-none text-xl px-4 pt-3 pb-2  rounded-lg w-full  border border-b-4 focus:border-[#2cffe6] border-gray-300 placeholder-transparent `}>
                                        </input>
                                        <label htmlFor='pus' className=" transition-all duration-300 absolute left-2 text-base font-mono text-[rgb(95 99 104)] bg-[#111111]  -top-4 px-2
                                            peer-placeholder-shown:text-lg  peer-placeholder-shown:pl-3 
                                        peer-focus:text-[#2cffe6] peer-focus:bg-[#111111]
                                            peer-placeholder-shown:top-1 peer-valid:bg-[#111111]
                                            peer-focus:text-base  peer-focus:z-10 peer-focus:-top-4 peer-focus:px-2
                                            " >Password</label> </div>
                                    <i></i>
                                </div>
                                <br />

                                <div className="w-full h-16 flex justify-center items-center">
                                    <div className="relative h-10 w-64   flex my-3 justify-center items-center  ">
                                        <input id="us" type={chckbox}
                                            // disabled={Otp?true:false}
                                            required
                                            name="Cpassword"
                                            placeholder=''
                                            minLength={8}
                                            maxLength={12}
                                            value={user.Cpassword}
                                            onChange={onChngInptlog}
                                            className={` shadow-lg bg-black ${Otp ? 'opacity-50' : 'opacity-100'}   bg-transparent peer focus:outline-none text-xl px-4 pt-3 pb-2  rounded-lg w-full  border border-b-4 focus:border-[#2cffe6] border-gray-300 placeholder-transparent `}>
                                        </input>
                                        <label htmlFor='pus' className=" transition-all duration-300 absolute left-2 text-base font-mono text-[rgb(95 99 104)] bg-[#111111]  -top-4 px-2
                                            peer-placeholder-shown:text-lg  peer-placeholder-shown:pl-3 
                                        peer-focus:text-[#2cffe6] peer-focus:bg-[#111111]
                                            peer-placeholder-shown:top-1 peer-valid:bg-[#111111]
                                            peer-focus:text-base  peer-focus:z-10 peer-focus:-top-4 peer-focus:px-2
                                            " >Confirm Password</label> </div>
                                    <i></i>
                                </div>









                                <div className=' w-full my-4 flex  flex-col justify-center items-center h-18 gap-5'>
                                    <div className=' flex gap-3 items-center h-auto w-auto justify-center'>

                                        <input type='checkbox' onChange={() => { chckbox === "password" ? setChckbox("text") : setChckbox("password") }} className=' '>
                                        </input>
                                        <span className='ml- max-[768px]:left-0 max-[768px]:absolute text-[#2cffe6]' >show password</span>
                                    </div>
                                    <input className='w-24 bg-[#2cffe6] mt-5 rounded-lg cursor-pointer text-black font-serif h-9 ' type='submit' value="Reset"></input>


                                </div>

                                {/* <h1>{user.username}</h1> */}
                                <div>
                                    <a></a>
                                </div>

                            </form>
                        </div>



                    </div>

                }







            </div>
        </div>
    )
}
