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
import Jar from './components/jarvis';




function App() {
  
  return (
    <div >
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

          <Route path='/profile' element={<Auth Component={Profile}/>}/>


          

        </Routes>
        <Footer/>
      </Router>
      </NoteState>
    </div>
  );
}

export default App;
