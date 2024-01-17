// import React, { useState } from 'react'
// export default function 
// () { return (
// <div className="w-full top-0 h-full flex z-[1] fixed justify-center items-center bg-gray-500/60">
// 	<div className=" overflow-hidden rounded-3xl w-11/12 h-4/6 fixed md:w-6/12 md:h-80 flex flex-col md:flex-row z-10">		
// 		<div className="w-full h-1/2 md:w-1/2 md:h-full overflow-hidden" >
// 			<img  className="w-full h-full  "src="http://localhost:3000/popl1.png" alt=""/>
// 		</div>
// 		<div className="w-full h-1/2 md:w-1/2 md:h-full bg-slate-100 ">
// 			<form className='w-full h-full flex-col'>
// 				<div className="w-full text-center p-2 h-auto">
// 					<h1  className="w-full text-center p-2 h-auto font-bold text-gray-950 text-3xl ">login</h1>
// 				</div>
// 				<div className="w-full  border-4  border-solid border-blue-900  h-14 flex flex-col justify-center items-center">
// 					<input type='text' className=" border-4  border-solid border-red-600 outline-none relative text-sm h-10 bg-transparent w-60 p-1" name="username" >
// 					</input>
// 					<div className=" w-28 border-4  absolute border-solid border-blue-900 h-7"> user name
// 					</div>
// 				</div>
// 			    <div className="w-full text-center p-2 h-auto">
// 					<input type='password' name="password" classNeme="outline-none p-2 text-sm h-8 bg-transparent border-b-3  border-solid border-red-600 w-60">
// 					</input> 
// 					<span>Password</span>
// 				    <i></i>
// 				</div>
// 			<div className="w-full text-center p-2 h-auto"> 
// 				<input type='checkbox' name='show' >
// 				</input>
// 				<span>show password</span>
// 			</div>
// 			<div>
// 				<input type='submit' value="Login"></input>
// 			</div>
// 			<div>
// 				<a>sp</a>
// 			</div>
			
// 			</form>
// 		</div>
// </div>
//         )
//         }
import React, { useState } from 'react';

export default function Login() {
  return (
    <div className="w-full top-0 h-full flex z-[1] fixed justify-center items-center bg-gray-500/60">
      <div className="overflow-hidden rounded-3xl w-11/12 h-4/6 fixed md:w-6/12 md:h-80 flex flex-col md:flex-row z-10">
        <div className="w-full h-1/2 md:w-1/2 md:h-full overflow-hidden">
          <img className="w-full h-full" src="http://localhost:3000/popl1.png" alt="" />
        </div>
        <div className="w-full h-1/2 md:w-1/2 md:h-full bg-slate-100">
          <form className='w-full h-full flex-col'>
            {/* ... other form elements ... */}
            <div className="w-full border-4 flex flex-colborder-solid border-green-900 text-center p-2 h-auto">
              <input type='text' className="border-4 border-solid border-red-600 outline-none relative text-sm h-10 bg-transparent w-60 p-1 flex justfy-center" name="username" />
              <div className="w-28 border-4 absolute border-solid border-blue-900 h-7 mx-[1.5px]"> user name </div>
            </div>
            <div className="w-full text-center p-2 h-auto">
              <input type='password' name="password" className="outline-none p-2 text-sm h-8 bg-transparent border-b-3 border-solid border-red-600 w-60" />
              <span>Passw</span>
              <i></i>
            </div>
            <div className="w-full text-center p-2 h-auto">
              <input type='checkbox' name='show' />
              <span>show password</span>
            </div>
            <div>
              <input type='submit' value="Login" />
            </div>
            <div>
              <a>sp</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
