import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Routes,Route, useLocation} from "react-router-dom"
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Document from './components/Document';
import ChatbotNew from './components/ChatbotNew';
import Footer from './components/Footer';
import SignLog from './components/SignLog';
import Profile from './components/Profile';
import Auth from './components/Auth';
import NoteState from './context/NodeState'
import Jar from './components/jarvisbot';
import Jar2 from './components/imgtext';
import Avaz from './components/AVAZ';
import Objdetec from './components/objdetect';
import ErrorPage from './components/ErrorPage';
import Forget from './components/Forget';



function App() {
  
  return (
    <div classname="overflow-x-hidden w-full h-screen">
      <NoteState>
      <Router>
        
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/document' element={<Document/>}/>
          <Route path='/ai' element={<Auth Component={ChatbotNew}/>}/>
          <Route path='/sign' element={<SignLog/>}/>
          <Route path='/jar' element={<Jar/>}/>
          {/* <Route path='/jar' element={<Jar2/>}/> */}
          <Route path='/AVAZ' element={<Avaz/>}/>
          <Route path='/obj' element={<Objdetec/>}/>
          <Route path='/*' element={<ErrorPage/>}/>
          <Route path='/forgot' element={<Forget/>}/>


          
          

          <Route path='/profile' element={<Auth Component={Profile}/>}/>


          

        </Routes>
        {/* <Footer/> */}
      </Router>
      </NoteState>
    </div>
  );
}

export default App;
