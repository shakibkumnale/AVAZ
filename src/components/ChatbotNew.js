import React, { useContext, useEffect, useRef, useState } from 'react'
import ReactDOM from 'react-dom'
import { FiMenu } from "react-icons/fi";
import { LuUserCircle2 } from "react-icons/lu";
import { Link, useLocation } from 'react-router-dom';
import { BsRobot } from "react-icons/bs";
import { FaHome,FaMicrophoneAlt } from "react-icons/fa";
import { TiContacts,TiDocumentText } from "react-icons/ti";
import { FcAbout } from "react-icons/fc";
import { IoSend,IoSearch,IoClose } from "react-icons/io5";
import axios from "axios"
import { IoMdArrowDropleft,IoIosArrowBack,IoIosArrowForward } from "react-icons/io";
import Loader from './Loader';
import micGif from './googleVoice.gif'
import { MdContentCopy,MdOutlineEdit } from "react-icons/md";
import { HiOutlineSpeakerWave } from "react-icons/hi2";
import { TbReload } from "react-icons/tb";
import noteContext from '../context/noteContext';
import Cookie from "js-cookie";
export default function Avaz(props) {
  const {Email,Fname}=props.data;
  // const {Fname, Lname, Email, Phone, City }=props.data;
  const access=useContext(noteContext)
  const loc = useLocation().pathname
  const [load, setLoad] = useState(false)
  const [input, setInput] = useState("")
  const [speehc, setSpeehc] = useState('');
  const [recognition, setRecognition] = useState(null);
  let u
  const [micon, setMicon] = useState(false)
  //input button logic
  const inputQuery = (e) => {
    console.log(input)
    setInput(e.target.value)

  }
  const micClose = () => {
    // SpeechRecognizer.continuous = false
    //   SpeechRecognizer.stop()
    setMicon(false)

  }

  //.................Speech--To--Text API's Codes SECTION Start.....................................
  var v
  useEffect(() => {
    const initializeSpeechRecognition = () => {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      const recognitionInstance = new SpeechRecognition();
      recognitionInstance.lang = 'en-US';
      recognitionInstance.interimResults = true;
      //   recognitionInstance.continuous = true;

      recognitionInstance.onresult = (event) => {
        const last = event.results.length - 1;
        const command = event.results[last][0].transcript;
        setSpeehc(command);
        v = command

      };

      recognitionInstance.onspeechend = () => {
        console.log(v);

        setTimeout(() => {
          setInput(v)
          // send1(v)
          setMicon(false)
          setSpeehc("")
        }, 2000);
      }
      setRecognition(recognitionInstance);
    };

    initializeSpeechRecognition();

    return () => {
      if (recognition) {
        recognition.abort();
      }
    };
  }, []);

  const VoiceInputQuery = () => {
    setMicon(true)
    if (recognition) {
      recognition.start();
    }
  };



  //.................Speech API's Codes SECTION End.....................................


  //.................Text--To--Speech API's Codes SECTION Start.....................................
  const textTospeexh = (eleA) => {
    let speech = new SpeechSynthesisUtterance();
    speech.text = eleA.innerText

    // speech.voice = window.speechSynthesis.getVoices()

    window.speechSynthesis.speak(speech);


    // console.log(window.speechSynthesis.getVoices()[15]);
  }

  //.................Text--To--Speech API's Codes SECTION End.....................................




  

  //...............copy logic............


  const copy = (ele) => {
    let C_text = ele.firstElementChild.innerText
    navigator.clipboard.writeText(C_text)
    alert("copied")
  }

  //......regenarte logic........

  const regenrate = async (eleU, eleA) => {
    eleA.firstElementChild.innerText=""
    let ans = await fetchPost(eleU.innerText)

    for (let i = 0; i < ans.length; i++) {
      const element = ans[i];
      // window.scrollTo(0, CHATS_DivUser.scrollHeight)
      setTimeout(() => {
        eleA.firstElementChild.innerText += element
      }, i * 20);
    }
  }

 

  
  //.................Backend API's Codes SECTION Start.....................................

  //send function
  const send = async (e) => {
    // e.preventDefault()
    let CHATS_DivUser = document.getElementById("chats");

    let eleU = document.createElement('div')
    let editModal=<div className=' w-[50%] h-[50%] border bg-white'>
      <textarea>edit</textarea>
      <button>Save</button>
      <button>Cancel</button>
    </div>



    eleU.setAttribute('disabled', 'true')
    let eleU_A = document.createElement('button')
    let edit = <MdOutlineEdit title='edit' className=' ' />
    ReactDOM.render(edit, eleU_A)
    eleU.className += "USER outline-none float-right relative group text-xl  self-end m-4 px-4 w-auto max-w-[50%] whitespace-break-spaces break-words font-semibold bg-[#3FDD79] bordr-2 p-2 shadow-xl rounded-s-2xl rounded-se-2xl "
    eleU_A.className += " text-white absolute top-[100%] right-0 p-4 group-hover:block hidden opacity-50 hover:opacity-100 text-lg"
    eleU.innerText = input

    eleU.appendChild(eleU_A)
    // CHATS_DivUser.appendChild(eleU)
    CHATS_DivUser.insertBefore(eleU,CHATS_DivUser.lastChild)

    let eleU_1=document.createElement('div')
    eleU_1.className+=' absolute top-[100%] right-[20%]'
    eleU_1.innerText="sdkfjjvkdfhvkrhvbkrhbv"
    // eleU.appendChild(eleU_1)
    u = input


    let u1 = `There are several different types of PCs, each with their own specific purpose and configuration:
    1. Desktop PCs: These are the traditional computers that are typically placed on a desk or table. They consist of a computer case that houses the motherboard, CPU, memory, storage, and other components. Desktop PCs are typically larger in size and offer more customization options, allowing users to upgrade or replace components as needed.
    2. Laptop PCs: Also known as notebooks, these are portable computers that are designed for use on the go. They are lightweight and compact, with all the necessary components integrated into a single unit. Laptops typically have a built-in keyboard, a touchpad, and a display screen. They are powered by batteries and can be easily transported.
    3. All-in-One PCs: These are computers where the monitor and the central processing unit (CPU) are integrated into a single unit. The all-in-one PC eliminates the need for a separate computer tower and allows for a more compact and streamlined design. They are often used in homes or offices where space is limited.
    4. Gaming PCs: These are high-performance computers specifically designed for gaming purposes. They are equipped with powerful processors, dedicated graphics cards, and ample memory and storage capacity. Gaming PCs are built to handle demanding games and provide a smooth gaming experience with high-quality graphics.
    These are just a few examples of the many types of PCs available in the market. The choice of PC depends on the specific requirements and intended usage of the user or organization.`

    setInput("")
    let eleA = document.createElement("div")
    let eleA_1 = document.createElement('span')
 let eleA_2 = document.createElement('div')
    let sub_div = document.createElement('div')
    let a = <HiOutlineSpeakerWave className="opacity-50 hover:opacity-100 cursor-pointer mx-2   " onClick={() => { textTospeexh(eleA) }} />
    let b = < >
      <div className=' text-white flex items-cente justify-center h-auto text-center my-2   ' title=''>
        <span className='opacity-50 hover:opacity-100 cursor-pointer'>
          <IoIosArrowBack disabled />
        </span>
        <h1 className='opacity-50'>0</h1>
        <span className='opacity-50 hover:opacity-100 cursor-pointer '>
          <IoIosArrowForward />
        </span>

      </div>
      <div className=' text-white text-lg cursor-pointer opacity-50 hover:opacity-100 my-2 ' title='copy' onClick={() => { copy(eleA) }}><MdContentCopy /></div>
      <div className=' text-white text-lg cursor-pointer opacity-50 hover:opacity-100 my-2 ' title='reload' onClick={() => { regenrate(eleU, eleA) }}><TbReload /></div>
    </>
    eleA.className += "AVAZ relative leading-5 z-0 text-xl group float-left items-center gap-2 h-auto bg-white self-start m-4 min-w-[20%] px-4 w-auto max-w-[50%] whitespace-break-spaces break-words shadow-xl border-2 p-2 rounded-e-2xl rounded-ss-2xl "
    // eleA_2.classList.add("absolute","right-2","bottom-2")
    // eleA.setAttribute='ref'
  
    eleA_2.classList.add("float-end", "leading-snug")
    // sub_div.classList.add("hidden","group-hover:block","absolute","top-[100%]","rounded-sm","bg-white","flex")
    sub_div.className += "hidden  group-hover:grid grid-flow-col gap-4 w-auto boder   justify-between absolute right-0 flex items-center p-4 m-2  "

    ReactDOM.render(a, eleA_2)
    ReactDOM.render(b, sub_div)

    let chat_Div_U=document.createElement('div')
    chat_Div_U.innerText=u
    ChatHist.current.appendChild(chat_Div_U)


    // let a = `AVAZ AI.......${input}`
    // eleA.innerText += await fetchPost(u)
    let ans = await fetchPost(u)

    // let ans = u
    for (let i = 0; i < ans.length; i++) {
      const element = ans[i];
      // window.scrollTo(0, CHATS_DivUser.scrollHeight)
      // end.current.scrollIntoView()

      setTimeout(() => {
        // end.current.scrollIntoView()
        eleA_1.innerText += element
        
      }, i * 20);
      if (i == ans.length - 1) {
        console.log("done");
      }
      
    }

    eleA.appendChild(eleA_1)
    eleA.appendChild(eleA_2)
    
    eleA.appendChild(sub_div)
//  CHATS_DivUser.appendChild(eleA)
    CHATS_DivUser.insertBefore(eleA,CHATS_DivUser.lastChild)


    
    // let chat_Div_A=document.createElement('div')
    chat_Div_U.innerText+=ans
    // ChatHist.current.appendChild(chat_Div_A)



  };







  const send1 = async (e) => {
    // e.preventDefault()
    let CHATS_DivUser = document.getElementById("chats");
    // window.scrollTo(0, CHATS_DivUser.scrollHeight)
    let eleU = document.createElement("div")
    eleU.className += "USER float-right self-end m-4 w-[40%] whitespace-break-spaces break-words bg-[#3FDD79] bordr-2 p-2 shadow-xl rounded-s-2xl rounded-se-2xl "
    eleU.innerHTML = e
    CHATS_DivUser.appendChild(eleU)
    
    u = e

    setInput("")
    let eleA = document.createElement("div")
    eleA.className += "AVAZ float-left self-start m-4 w-[40%] whitespace-break-spaces break-words shadow-xl border-2 p-2 rounded-e-2xl rounded-ss-2xl "
    // let a = `AVAZ AI.......${input}`
    eleA.innerText += await fetchPost(u)
    // eleA.innerHTML += u
    CHATS_DivUser.appendChild(eleA)
  };


  // useEffect(()=>{
  //   // fetch()
  //   spRec.start()
  // },[])


  //get logic
  const fetchGet = async () => {
    try {
      setLoad(true)
      const res = await axios.get("http://localhost:3001/GET")
      setLoad(false)
      console.log(res)
      return res.data
    } catch (error) {
      setLoad(false)
      console.log(error)
    }
  }

  //post logic
  const fetchPost = async (query) => {
    try {
      setLoad(true)
      const res = await axios.post("http://localhost:3001/POST", { query,Email })
      setLoad(false)
      console.log(res)
      return res.data
    } catch (error) {
      setLoad(false)
      console.log(error)
      alert("server Error")
      return "Please Try Agin later"
    }
  }





  const increaseHieght = (e) => {
    e.target.style.height = 'auto'
    let key = e.key

    e.target.style.height = `${e.target.scrollHeight}px`;
    if (key === 'Enter') {
      // e.target.style.overflowY='hidden'

      send()
      e.target.style.height = 'auto'
    }

  }


  //.................Backend API's Codes SECTION End.....................................

 
  const [open, setopen] = useState(false)
  const [openHist, setopenHist] = useState(false)


  const menu = () => {
    console.log(open);
    setopen(!open)
    setopenHist(false)
  }

  const history = () => {
    setopenHist(!openHist)
    setopen(false)
  }


const end=useRef(null)
const ChatHist=useRef(null)
useEffect(()=>{
  end.current.scrollIntoView()
},)

const switchRefT1=useRef(null)
const switchRefF1=useRef(null)
useEffect(()=>{
  if (Switch1) {
    
    
    switchRefF1.current.classList.add('bg-white','text-black')
    switchRefT1.current.classList.remove('bg-white','text-black')
    
  } else {
    switchRefT1.current.classList.add('bg-white','text-black')
    switchRefF1.current.classList.remove('bg-white','text-black')

  }

})
const [Switch1,setSwitch1]=useState(true);
const chatChange=useRef(null)


var parentElement1 = document.querySelector('.CHATS');
const Newchat=()=>{
//   var childElement1 = parentElement1.querySelectorAll('.USER');
console.log(chatChange.current.childNodes);
}

  return (
    <>
      {<div className=' bordr-4  border-red-800 flex w-full h-dvh overflow-hidden  bg-[rgb(22,23,25)]  '>
        {micon &&
          <div className='    absolute w-full h-full bg-black bg-opacity-40 justify-center items-center flex ' style={{ zIndex: "99" }}>
            <div className=' p-4 rounded-lg w-96 h-96 border-2 bg-white flex flex-col '>
              <button className='w-full flex justify-end' onClick={micClose}><IoClose /></button>
              <div className=' flex flex-col items-center'>
                <p>Listening.... </p>
                <img src={micGif} className=' w-20' />
              </div>
              <div className='bordr w-full p-2 flex justify-center'>
                <p className='bordr w-[70%] '>{speehc}</p>
              </div>
            </div>
          </div>}


        <div className={`SIDE-NAV bordr relative z-50 bg-[rgb(22,23,25)]   transition-all delay-100 duration-100   bordr-black w-[18%] h-full flex flex-col items-center p-4 space-y-8 bg-opacity-80 max-[768px]:bg-opacity-100 bg-emerald00 shadw-2xl  max-[768px]:absolute
             max-[768px]:${open ? 'translate-x-[0px]' : '-translate-x-[200px]'}`}>
          <button className=' absolute right-0 p-2 text-white md:hidden ' onClick={menu}><IoClose /></button>

          <div className=' w-5/6 grid grid-flow-col items-center font-bold text-[#3FDD79]'>
            <Link to='/'>
              <LuUserCircle2 className='w-full h-full ' />
            </Link>
            <p className=' text-2xl'>AvAz</p>

          </div>
          <div className='SIDE_MENU w-6/6 m-auto text-neutral-500 '>
            <ul className=' w-full p-2 text-2xl font-semibld space-y-4 text-whit   max-lg:text-sm '>
              <li><Link to='/' className={` hover:text-white flex text-center items-center gap-2 `}><FaHome /> Home</Link></li>
              <li><Link to='/ai' className={`  text-${loc === "/ai" ? "white" : "black"} hover:text-${loc === "/ai" ? "white" : ""} flex text-center items-center gap-2 `}><BsRobot /> Ai</Link></li>
              <li><Link to='/about' className={` hover:text-white flex text-center items-center gap-2 `}><FcAbout /> About</Link></li>
              <li><Link to='/document' className={` hover:text-white flex text-center items-center gap-2 `}><TiDocumentText /> Document </Link></li>
              <li><Link to='/contact' className={` hover:text-white  flex text-center items-center gap-2 `}> <TiContacts /> Contact</Link></li>
            </ul>
          </div>

          <div className='PROFILE absolute bottom-4  bordr p-2 w-5/6 rounded-xl bg-[rgb(37,38,40)]'>
            <Link to='/'>
              <div className=' flex items-center gap-2  '>
                <LuUserCircle2 className=' w-5/6 h-full bg-white rounded-full' />
                <div className=' text-base  text-white'>
                  <p></p>
                  <p className=' text-neutral-500 text-xs'></p>
                </div>
              </div>
            </Link>
          </div>
        </div>


        <div className=' w-full relative  flex flex-row m-4 rounded-xl borer overflow-hidden'>
          <div className='AI-CHAT bordr bg-[rgb(37,38,40)]  border-green-500 w-[80%] flex flex-col items-center h-full relative  m-auto overflow-auto max-[768px]:w-full  '>
            {load && <div className=' absolute flex top-[50%] '>
              <Loader />
            </div>}
            <div className=' text-center font-bold shadow-sm p-2 w-full  grid-cols-4 max-[768px]:grid grid-flow-row-dense   '>
              <button className=' md:hidden text-white text-xl ' onClick={menu}><FiMenu /></button>
              <p className='col-span-2 text-neutral-400'>
              <div className='SWITCH_BTN   '>
                <div className=' flex justify-center gap-2 text-lg items-center  '>
                  <div className='border border-white flex rounded-md overflow-hidden  '>
                        <p className=' p-1 px-4 cursor-pointer ' ref={switchRefF1}  onClick={()=>{setSwitch1(()=>{return true})}} ><Link to={'/ai'}>CHAT</Link> </p>
                        <p className=' border h-auto border-white'></p>
                        <p className='p-1 px-4 cursor-pointer' ref={switchRefT1} onClick={()=>{setSwitch1(()=>{return false})}} ><Link to={'/AVAZ'}>AVAZ</Link></p>
                  </div>
                   </div>
                </div>
              </p>
            </div>
            <div ref={chatChange} className='CHATS relative scroll-auto justify-centr items-centr  w-full h-full bordr-8 flex flex-col px-[10%] pb-[4%]    overflow-auto space-y-8 p-4 ' id='chats'>
              
             
              {/* <button onClick={()=>{end.current.scrollIntoView()}}>okkk</button> */}
              {/* <div className="USER relative flex float-right self-end m-4 w-[40%] whitespace-break-spaces break-words bg-[#3FDD79] bordr-2 p-2 shadow-xl rounded-s-2xl rounded-se-2xl ">
            <button className=' float-end absolute end-0 bottom-0'>
              okk
            </button>
            </div> */}
            {/* <div>jkjjkjjkjjkj</div>
            <textarea className='USER outline-none float-right relative group text-xl  self-end m-4 px-4 w-[50%] max-w-[50%] whitespace-break-spaces break-words font-semibold bg-[#3FDD79] bordr-2 p-2 shadow-xl rounded-s-2xl rounded-se-2xl resize-none ' disabled rows={1}>hi every one</textarea> */}

              

            <div ref={end}></div>


            </div>
            <div className='INPUT w-full h-36 p-4 border-t border-neutral-700 max-md:h-20 items-center flex  '>
              <div className='INPUT-BAR max-h-24 bordr-2 bg-[rgb(22,23,25)] w-[80%] flex flex-row justify-between  items-end   px-2 space-x-1 rounded-xl  m-auto p-2 shadow-lg   '>
                <button className=' text-xl  text-white p-2 rounded-2xl hover:bg-neutral-800 ' onClick={VoiceInputQuery}><FaMicrophoneAlt /></button>
                {/* <input type='text' className=' w-[85%] h-60 text-xl text-neutral-400 outline-none bg-[rgb(22,23,25)]  ' onChange={inputQuery} value={input} placeholder='Ask Query' /> */}
                <textarea className='w-[85%]    max-h-20  text-lg text-neutral-400 outline-none bg-[rgb(22,23,25)] resize-none ' rows={1} onChange={inputQuery} value={input} placeholder='Ask Query' onKeyUp={increaseHieght}>
                </textarea>
                <button className=' text-xl text-white p-2 rounded-2xl hover:bg-neutral-800 cursor-pointer ' disabled={input.length == 0} onClick={send}><IoSend /></button>
              
              
              </div>
            </div>



            {/* extra design below
            <div className='INPUT-BAR border-2 absolute bottom-[5%]   w-[80%] flex flex-row justify-between   px-2 space-x-1 rounded-xl  m-auto p-2 shadow-lg bg-white    '>
            <button className=' text-xl  bg-emerald-400 p-2 rounded-2xl hover:bg-emerald-200 ' onClick={VoiceInputQuery}><FaMicrophoneAlt /></button>
            <input type='text' className=' w-[85%] text-xl outline-none ' onChange={inputQuery} value={input} placeholder='Ask Query' />
            <button className=' text-xl bg-emerald-400 p-2 rounded-2xl hover:bg-emerald-200 ' disabled={input.length == 0} onClick={send} ><IoSend /></button>
          </div> */}

          </div>
          <div ref={ChatHist} className={`HISTORY relative bg-[rgb(37,38,40)] z-50 bordr bordr-blue-500 w-[20%] h-full p-6 border-l border-neutral-700 transition-all delay-100 duration-100 max-[768px]:w-[90%]   max-[768px]:absolute right-0 max-[768px]:${openHist ? ' translate-x-0' : 'translate-x-full '}`}>
            <button className=' md:hidden absolute top-[50%] -left-4 text-white ' onClick={history}><IoMdArrowDropleft /></button>
            <div onClick={Newchat} className=' bg-[rgb(22,23,25)] text-neutral-400 CHAT_HISTORY w-full h-10 bordr flex items-center justify-between p-2 shadow-lg rounded-xl'>
              <p>New Chat</p>
            
            </div>
            <br />
            <div ref={ChatHist} className='CHAT-History'>
HISTORY
            </div>
          </div>



        </div>
      </div>}
    </>
  )
}
