import React from 'react'
import { FaInstagram } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { BsGoogle } from "react-icons/bs";
import { Link, useLocation } from 'react-router-dom';
export default function 
() {
    const location=useLocation().pathname
  return (
    <div>
        
             {/* footer-1 Start */}
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
      {/* footer-1 end */}
        {/* footer-2 start   */}
      { location!="/ai" &&
        <div className='FOOTER'>

<div className='  w-full bg-neutral-100 px-20 py-5 space-y-10'>
  <div className='Footer-1 flex justify-between items-center px-10'>
    <div className='LOGO text-3xl font-bold  '>
      <Link to='/'>AvAz</Link>
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
</div>}
{/* footer-2 end  */}
    
    </div>
  )
}
