import React, { useState, useEffect } from 'react'
import { FiMenu } from "react-icons/fi";
import { LuUserCircle2 } from "react-icons/lu";
import { Link, useLocation } from 'react-router-dom';
import { BsRobot } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { TiContacts } from "react-icons/ti";
import { TiDocumentText } from "react-icons/ti";
import { FcAbout } from "react-icons/fc";
export default function () {
//   const [speehc,setSpeehc]=useState("");
// var SpeechRecognition = SpeechRecognition ;
// var SpeechGrammarList = SpeechGrammarList ;
// var voicebtn = document.getElementById("voicebtn");

// var grammer = "#JSGF V1.0;";
// var recognition = new SpeechRecognition();
// var speechRecognitionGrammerList = new SpeechGrammarList();
// speechRecognitionGrammerList.addFromString(grammer, 1);
// var google;

// recognition.grammers = speechRecognitionGrammerList;
// recognition.lang = "en-US";
// recognition.interimResults = false;
// recognition.onresult = function(event) {
//   var last = event.results.length - 1;
//   var command = event.results[last][0].transcript;
//   var message = command;
//  setSpeehc(message);

// };
// voicebtn.addEventListener("click", function() {
//   recognition.start();

// });
// recognition.onspeechend = function() {
//   recognition.stop();
//   // voicebtn.classList.remove("hidden");
//   // glens.classList.remove("hidden");
//   // keyboard.classList.remove("hidden");
//   // bar.classList.add("hidden");
//   console.log("Speech recognition has stopped.");
// };
const [speehc, setSpeehc] = useState('');
  const [recognition, setRecognition] = useState(null);

  useEffect(() => {
    const initializeSpeechRecognition = () => {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      const recognitionInstance = new SpeechRecognition();
      recognitionInstance.lang = 'en-US';
      recognitionInstance.interimResults = false;
      recognitionInstance.onresult = (event) => {
        const last = event.results.length - 1;
        const command = event.results[last][0].transcript;
        setSpeehc(command);
      };
      setRecognition(recognitionInstance);
    };

    initializeSpeechRecognition();

    return () => {
      if (recognition) {
        recognition.abort();
      }
    };
  }, []);

  const handleVoiceButtonClick = () => {
    if (recognition) {
      recognition.start();
    }
  };
  // recognition.onspeechend = function() {
  //   //   recognition.stop();
  //   //   // voicebtn.classList.remove("hidden");
  //   //   // glens.classList.remove("hidden");
  //   //   // keyboard.classList.remove("hidden");
  //   //   // bar.classList.add("hidden");
  //   //   console.log("Speech recognition has stopped.");
  //   // };



  
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
      <div className='AI-CHAT border relative border-green-500 w-[70%] h-full'>
<div className='w-full h-20  flex justify-center absolute bottom-4 '>
  <input type="text" value={speehc} onChange={(e)=>{setSpeehc(e.target.value)}} className='w-[50%] h-11 pl-5 p-2 text-xl border-2 border-blue-500 rounded-full    '></input> <button onClick={handleVoiceButtonClick} id="voicebtn" className='h-11 bg-green-400 w-16' >bt </button>
</div>

      </div>
      <div className='HISTORY border border-blue-500 w-[20%] h-full'>

      </div>
    </div>
  )
}
