import React, { useState } from 'react'

const Pop1l=(props)=>{

	const [chckbox,setChckbox]= useState("password");

// // value={usern} onChange={usrchng()}

const toggleckbox=()=>{
	
	if(chckbox==="password"){
     setChckbox("text")
	}else{
		setChckbox("password")

	}}



 
return (<>{
	props.poplog!==false  &&
<div className="w-full top-0 h-full flex z-[1] fixed items-center justify-center bg-gray-500/60">
	<div className=" overflow-hidden rounded-3xl  w-11/12 h-4/6 fixed md:w-6/12 md:h-80 flex flex-col md:flex-row z-10">
		<div className=' absolute cursor-pointer right-5
	 top-3 text-3xl '>
	<span className="material-symbols-outlined relative">
<input type='checkbox' checked className='absolute top-0 left-0 w-8 h-8 opacity-0 cursor-pointer' onChange={(event)=>{props.onChange(event.target.checked)}}/>close

{/* <button onClick={(event)=>{props.onClick(event.target.value===true? event.target.value=false: event.target.value=true)}}>close</button> */}
 
{/* <button >close</button> */}
</span>	</div>	
		<div className="w-full h-1/2 md:w-1/2 md:h-full overflow-hidden" >
			<img  className="w-full h-full  "src="http://localhost:3000/popl1.png" alt=""/>
		</div>
		<div className="w-full h-1/2 md:w-1/2 md:h-full bg-white ">
			<form className='w-full h-full flex-col'>
				<div className="w-full p-2 h-auto">
					<h1  className="w-full text-center p-2 h-auto font-bold text-gray-950 text-3xl ">login </h1>
				</div>
				<div className="w-full h-16 flex mb-3 justify-center items-center">
				<div className="relative h-10 w-64 flex mt-4 justify-center items-center  ">
					<input id="user" type="text" required placeholder='shakib' className='   bg-transparent peer focus:outline-none  pl-4 pt-3 pb-2  rounded-lg w-full  border border-b-4 focus:border-blue-500 border-gray-300 placeholder-transparent '>
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
					<input id="ps" type={chckbox} required placeholder='' className='   bg-transparent peer focus:outline-none  pl-4 pt-3 pb-2  rounded-lg w-full  border border-b-4 focus:border-blue-500 border-gray-300 placeholder-transparent '>
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
				<span className='ml-2'>show password</span>
				<a href="#" className='absolute right-32 ' >forgot</a>

			</div>
			<div className=' w-full my-4 flex justify-center items-center h-12'>
				<input className='w-24 bg-blue-500 rounded- cursor-pointer text-white font-serif h-9 ' type='submit' value="Login"></input>
			</div>
			<div>
				<a>sp</a>
			</div>
			
			</form>
		</div>
</div>
</div>
}
</>   )
        }
		export default Pop1l;
	
// import React, { useState } from 'react';

// export default function Login() {
//   return (
//     <div className="w-full top-0 h-full flex z-[1] fixed justify-center items-center bg-gray-500/60">
//       <div className="overflow-hidden rounded-3xl w-11/12 h-4/6 fixed md:w-6/12 md:h-80 flex flex-col md:flex-row z-10">
//         <div className="w-full h-1/2 md:w-1/2 md:h-full overflow-hidden">
//           <img className="w-full h-full" src="http://localhost:3000/popl1.png" alt="" />
//         </div>
//         <div className="w-full h-1/2 md:w-1/2 md:h-full bg-slate-100">
//           <form className='w-full h-full flex-col'>
//             {/* ... other form elements ... */}
//             <div className="w-full border-4 flex flex-colborder-solid border-green-900 text-center p-2 h-auto">
//               <input type='text' className="border-4 border-solid border-red-600 outline-none relative text-sm h-10 bg-transparent w-60 p-1 flex justfy-center" name="username" />
//               <div className="w-28 border-4 absolute border-solid border-blue-900 h-7 mx-[1.5px]"> user name </div>
//             </div>
//             <div className="w-full text-center p-2 h-auto">
//               <input type='password' name="password" className="outline-none p-2 text-sm h-8 bg-transparent border-b-3 border-solid border-red-600 w-60" />
//               <span>Passw</span>
//               <i></i>
//             </div>
//             <div className="w-full text-center p-2 h-auto">
//               <input type='checkbox' name='show' />
//               <span>show password</span>
//             </div>
//             <div>
//               <input type='submit' value="Login" />
//             </div>
//             <div>
//               <a>sp</a>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }
