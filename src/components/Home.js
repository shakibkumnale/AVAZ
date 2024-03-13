import React, { useContext, useEffect, useState } from 'react'
import Slider from './Slider'

import { FaInstagram } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { BsGoogle } from "react-icons/bs";
import { Link } from 'react-router-dom';
import noteContext from "../context/noteContext";
import axios from "axios";

import Cookies from 'js-cookie';
export default function Home() {
  const imgs = ["https://png.pngtree.com/background/20231117/original/pngtree-city-of-the-future-3d-rendered-ai-robot-in-urban-landscape-picture-image_6299969.jpg",
    "https://miro.medium.com/v2/resize:fit:750/1*PlOTeS5syDCWSrYDUb7J7w.jpeg",
    "https://media.wired.co.uk/photos/606db957c99f3d4d31739e74/16:9/w_1280,c_limit/ed86af6ae5769fb3c72f82c959f0d422.png"]
  const CardHeadings = ["Chat Bot", "AVAZ", "Jarvis"]


  const context=useContext(noteContext)
useEffect(()=>{
  
  CookieAuth()

},[])



const CookieAuth= async()=>{
  const Cget=Cookies.get('user')
  console.log(Cget!=undefined +" .......");

  if (Cget!=undefined) {
    
  console.log(Cget+"...........hjkhkh..........")
  const cookieVerification =await axios.post("http://localhost:3001/tokenAuth",{Cget});

  if (cookieVerification.statusText==='Authenticated') {
    
    console.log(cookieVerification.data);
    console.log(cookieVerification.statusText);
    context.update(cookieVerification.data);
  } else {
    console.log(cookieVerification.statusText);
    Cookies.remove('user')
    context.logout()

  }
}
  

}
  return (
    
    <div className=' relative'>
     
  
      <Slider />
      {/* card container Start */}

      <div className='CARD-FEATURES p-10 flex gap-10 max-sm:flex-col '>
        {imgs.map((ele, i) => {

          return <div className='CARD  border  overflow-hidden rounded-2xl shadow-lg hover:-translate-y-3 transition ease-in delay-100 duration-150 hover:shadow-2xl     '>
            <a href='#' className=' block' >
              <img src={imgs[i]} className=' w-full h-60 max-[768px]:h-40  ' />
              <h1 className=' text-3xl font-semibold m-4 max-[768px]:text-xl' >{CardHeadings[i]}</h1>
              <p className=' m-4'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia fugiat exercitationem quis ab ullam,</p>
            </a>
          </div>

        })}
      </div>

      {/* ..... EXTRA start */}

      {/* 
      <div className='CARD-FEATURES p-10 flex gap-10 '>
        {imgs.map((ele, i) => {

          return  <div className='CARD  border  overflow-hidden rounded-2xl shadow-lg relative h-96 group    '>
              <img src={imgs[i]} className=' w-full h-60  ' />
              <a href='#' className=' block absolute top-[62%]  bg-white group-hover:-translate-y-60 h-96 hover:bg-opacity-85 transition ease-in duration-100 ' >
              <h1 className=' text-3xl font-semibold m-4' >{CardHeadings[i]}</h1>
              <p className=' m-4'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia fugiat exercitationem quis ab ullam,Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia fugiat exercitationem quis ab ullam,Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia fugiat exercitationem quis ab ullam,</p>
              </a>
            </div>

        })}
      </div> */}
      {/* ..... EXTRA end */}

      {/* card container end */}

      {/* card-2 container start */}
      <div className='CONTAINER-CARD-2'>

      </div>
      {/* card-2 container end */}





      {/* footer Start */}
      {/* <div className='FOOTER w-full text-center bg-neutral-100 p-10 flex flex-col  gap-4  '>
        <div className='ALL-social-Media-LINK flex w-full justify-center text-3xl gap-5 max-[768px]:text-xl '>
          <a href='https://www.instagram.com/' target='blank' ><FaSquareInstagram /></a>
          <a href='https://www.facebook.com/' target='blank'><FaFacebookSquare /></a>
          <a href='https://www.twitter.com/' target='blank'><FaTwitterSquare /></a>
          <a href='https://www.google.com/' target='blank'><BsGoogle /></a>
        </div>
        <p>
          &#169; Copyrights , All Rights Reserved
        </p>
      </div> */}
      {/* footer end */}
      {/* footer start 2  */}
      {/* <div className='FOOTER'>

      <div className='  w-full bg-neutral-100 px-20 py-5 space-y-10'>
        <div className='Footer-1 flex justify-between items-center px-10'>
          <div className='LOGO text-3xl font-bold  '>
            <Lin k to='/'>AvAz</Lin>
          </div>
          <div className='QUICK_LINKS '>
            <ul className=' flex gap-10 text-xl'>
              <li><Link to='/' className=' hover:text-red-500 '>Home</Link></li>
              <li><Link to='/about' className=' hover:text-red-500'>About</Link></li>
              <li><Link to='/document' className=' hover:text-red-500'>Document</Link></li>
              <li><Link to='/contact' className=' hover:text-red-500'>Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className='FOOTER w-full text-center  '>
          <div className='ALL-social-Media-LINK flex w-full justify-center text-2xl gap-5 max-[768px]:text-xl '>
            <a href='https://www.instagram.com/' target='blank' ><FaSquareInstagram /></a>
            <a href='https://www.facebook.com/' target='blank'><FaFacebookSquare /></a>
            <a href='https://www.twitter.com/' target='blank'><FaTwitterSquare /></a>
            <a href='https://www.google.com/' target='blank'><BsGoogle /></a>
          </div>

        </div>
      </div>

        <p className=' text-center bg-black text-white p-5'>
            &#169; Copyrights , All Rights Reserved
          </p>
      </div> */}
      {/* footer end 2  */}




      {/* <Link to='/'>
        
      <div className='CHAT_BOT-ICON flex justify-end sticky bottom-0 p-12'>
        <img className=' w-28 h-28 rounded-full sticky ' 
        src='https://upload.wikimedia.org/wikipedia/commons/c/cb/WhatsApp-BOT-Image-2_2.gif?20230131061007'/>
      </div>
        </Link> */}
    </div>
  )
}
