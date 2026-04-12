import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import GetStarted from './pages/GetStarted';
import StandardSignUp from './pages/StandardSignUp';
import PremiumSignUp from './pages/PremiumSignUp';
import DeluxeSignUp from './pages/DeluxeSignUp';
import LogIn from './pages/LogIn';
import Dashboard from './pages/Dashboard';
import ChatBot from './pages/ChatBot';
import './index.css';
import './App.css';


function App() {
  
  return (
    <div className="mainContainer">
      <div className="pageWrapper">
        <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/getstarted" element={<GetStarted />} />
          <Route path="/standardsignup" element={<StandardSignUp />} />
          <Route path="/premiumsignup" element={<PremiumSignUp />} />
          <Route path="/deluxesignup" element={<DeluxeSignUp />} />
          <Route path="/login" element={<LogIn />} />
      
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/chatbot" element={<ChatBot />} />
          
        </Routes>
        
       </BrowserRouter>
       <Footer />
      </div>
      
    </div> //End of main div element
    
  );
}

export default App;
