import React from 'react'
import { FiMenu } from "react-icons/fi";
import { LuUserCircle2 } from "react-icons/lu";
import { Link, useLocation } from 'react-router-dom';
import { BsRobot } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { TiContacts } from "react-icons/ti";
import { TiDocumentText } from "react-icons/ti";
import { FcAbout } from "react-icons/fc";
export default function () {
const loc=useLocation().pathname
  return (
    <div className=' border-4 border-red-800 flex w-full h-screen '>
      <div className='SIDE-NAV border border-black w-[10%] h-full p-2 py-6 space-y-10 '>
        <div className=' w-4/6 h-1/12 border rounded-full m-auto '>
          <Link to='/'>
            <LuUserCircle2 className='w-full h-full ' />
          </Link>
        </div>
        <div className='SIDE_MENU w-6/6 m-auto'>
          <ul className=' w-full p-2 text-lg font-semibold space-y-5 '>
            <li><Link to='/' className={` hover:text-red-500 flex text-center items-center gap-2 `}><FaHome /> Home</Link></li>
            <li><Link to='/ai' className={` text-${loc==="/ai"?"red":"black"}-500 hover:text-${loc==="/ai"?"black":"red"} flex text-center items-center gap-2 `}><BsRobot/>Ai</Link></li>
            <li><Link to='/about' className={` hover:text-red-500 flex text-center items-center gap-2 `}><FcAbout />About</Link></li>
            <li><Link to='/document' className={` hover:text-red-500 flex text-center items-center gap-2 `}><TiDocumentText />Document </Link></li>
            <li><Link to='/contact' className={` hover:text-red-500 flex text-center items-center gap-2 `}><TiContacts/>Contact</Link></li>

          </ul>
        </div>

      </div>
      <div className='AI-CHAT border border-green-500 w-[70%] h-full'>


      </div>
      <div className='HISTORY border border-blue-500 w-[20%] h-full'>

      </div>
    </div>
  )
}
