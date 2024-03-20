import React, { useState } from "react";
export default function Profile(props) {
  const {Fname, Lname, Email, Phone, City }=props.data;
  const [imgsrc, setImgsrc] = useState("http://localhost:3000/dp.png");
  const [ct, setCt] = useState({
            "Fname":Fname,
            "Lname":Lname,
            "Email":Email,
            "Phone":Phone,
            "City":City});

  const bd = "";
  return (
    <div className="flex h-[100%] bg-[#fafafa] justify-center item-center relative top-0 ">
      <div className="w-[43%] my-8 border-[#e5e5e5] border-2 shadow-lg bg-[#ffffff] h-8/12 rounded-3xl ">
        <form>
        <div className="  flex  items-center justify-center h-52">
          <div className="flex  items-center justify-center flex-col  w-60  ">
            <div className="img w-36 h-36  items-center my-auto border-2 border-black rounded-full">
              <img className="w-full h-full rounded-full " src={imgsrc}></img>
            </div>
          </div>
        </div>
        <div className="w-full h-12 my-2   rounded-xl flex justify-between items-center px-5 ">
          <div className="w-[45%] px-4 text-center text-xl font-semibold">
            <span>Frist Name</span>
          </div>
          <div className="w-[55%] gap-5 flex  items-center ` ">
            <div className="relative ">
              <div className="absolute top-0 left-0 w-52 bg-transparent   h-9  "></div>
              <input
                type="text"
                id="F-name"
                className="   top-0 z-10  bg-transparent  peer h-9 focus:outline-none   outline-none border-0 pl-4 p-1  text-xl  transition-all  w-52 duration-300 border-b-2 focus:border-b-3 focus:border-black border-gray-400 "
                required
                value={ct.Fname}
                onChange={(event) => {
                  setCt(event.target.value);
                }}
              />
            </div>
            <div className="img w-7 h-7 items-center my-auto ">
              <label htmlFor="F-name">
                <img
                  className="w-full h-full  "
                  src="http://localhost:3000/e.svg"
                ></img>
              </label>
            </div>
          </div>
        </div>
        <div className="w-full h-12 my-2   rounded-xl flex justify-between items-center px-5 ">
          <div className="w-[45%] px-4 text-center text-xl font-semibold">
            <span>last Name</span>
          </div>
          <div className="w-[55%] gap-5 flex  items-center ` ">
            <div className="relative ">
              <div className="absolute top-0 left-0 w-52 bg-transparent   h-9  "></div>
              <input
                type="text"
                id="L-name"
                className="   top-0 z-10  bg-transparent  peer h-9 focus:outline-none   outline-none border-0 pl-4 p-1  text-xl  transition-all  w-52 duration-300 border-b-2 focus:border-b-3 focus:border-black border-gray-400 "
                required
                value={ct.Lname}
                onChange={(event) => {
                  setCt(event.target.value);
                }}
              />
            </div>
            <div className="img w-7 h-7 items-center my-auto ">
              <label htmlFor="L-name">
                <img
                  className="w-full h-full  "
                  src="http://localhost:3000/e.svg"
                ></img>
              </label>
            </div>
          </div>
        </div>
        <div className="w-full h-12 my-2   rounded-xl flex justify-between items-center px-4 ">
          <div className="w-[45%] px-4 text-center text-xl font-semibold">
            <span>Email :-</span>
          </div>
          <div className="w-[55%] gap-5 flex  items-center ` ">
            <div className="relative ">
              <div className="absolute top-0 left-0 w-52 bg-transparent   h-9  "></div>
              <input
                type="text"
                id="Email"
                value={ct.Email}
                className="   top-0 z-10  bg-transparent  peer h-9 focus:outline-none   outline-none border-0 pl-4 p-1  text-xl  transition-all  w-48 duration-300 border-b-2 focus:border-b-3 focus:border-black border-gray-400 "
                required
                readOnly
              />
            </div>
            <div className="img w-20  items-center my-auto  text-center">
              <label htmlFor="Email">You Can't Change</label>
            </div>
          </div>
        </div>{" "}
        <div className="w-full h-12 my-2   rounded-xl flex justify-between items-center px-5 ">
          <div className="w-[45%] px-4 text-center text-xl font-semibold">
            <span>Contact</span>
          </div>
          <div className="w-[55%] gap-5 flex  items-center ` ">
            <div className="relative ">
              <div className="absolute top-0 left-0 w-52 bg-transparent   h-9  "></div>
              <input
                type="text"
                id="number"
                className="   top-0 z-10  bg-transparent  peer h-9 focus:outline-none   outline-none border-0 pl-4 p-1  text-xl  transition-all  w-52 duration-300 border-b-2 focus:border-b-3 focus:border-black border-gray-400 "
                required
                value={ct.Phone}
                onChange={(event) => {
                  setCt(event.target.value);
                }}
              />
            </div>
            <div className="img w-7 h-7 items-center my-auto ">
              <label htmlFor="number">
                <img
                  className="w-full h-full  "
                  src="http://localhost:3000/e.svg"
                ></img>
              </label>
            </div>
          </div>
        </div>
        <div className="w-full h-12 my-2   rounded-xl flex justify-between items-center px-5 ">
          <div className="w-[45%] px-4 text-center text-xl font-semibold">
            <span>City Name</span>
          </div>
          <div className="w-[55%] gap-5 flex  items-center ` ">
            <div className="relative ">
              <div className="absolute top-0 left-0 w-52 bg-transparent   h-9  "></div>
              <input
                type="text"
                id="City"
                className="   top-0 z-10  bg-transparent  peer h-9 focus:outline-none   outline-none border-0 pl-4 p-1  text-xl  transition-all  w-52 duration-300 border-b-2 focus:border-b-3 focus:border-black border-gray-400 "
                required
                value={ct.City}
                onChange={(event) => {
                  setCt(event.target.value);
                }}
              />
            </div>
            <div className="img w-7 h-7 items-center my-auto ">
              <label htmlFor="City">
                <img
                  className="w-full h-full  "
                  src="http://localhost:3000/e.svg"
                ></img>
              </label>
            </div>
          </div>
        </div>
        <div className="w-full h-12 mt-6  rounded-xl flex justify-center items-center px-5 ">
           <button className=" w-28 p-1 hover:bg-black hover:text-white transition duration-500 border-2 border-[#333] justify-center items-center text-xl text-center rounded-full cursor-pointer text-black font-serif h-10 "> Submit</button>
        </div>
        <div className="w-full h-8  mb-4  rounded-xl flex justify-center items-center px-5 ">
          <a className=" text-base font-bold text-center underline ">forgot Password ? </a>
        </div>
        </form>
      </div>
  
  </div>
  );
}
