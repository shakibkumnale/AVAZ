import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Routes,Route, useLocation} from "react-router-dom"
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Document from './components/Document';
import Chatbot from './components/Chatbot';
import Footer from './components/Footer';
import SignLog from './components/SignLog';
import Profile from './components/Profile';
import Auth from './components/Auth';



function App() {
  
  return (
    <div >

      <Router>
        
      <Navbar/>
        <Routes>
          <Route path='/' element={<Auth com="Home"/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/document' element={<Document/>}/>
          <Route path='/ai' element={<Auth com="Chatbot"/>}/>
          <Route path='/sign' element={<Auth com="SignLog"/>}/>
          <Route path='/profile' element={<Profile/>}/>


          

        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
