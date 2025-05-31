import React, { useState } from 'react';
import Header from './components/Header.jsx'
import Main from './components/Main.jsx'
import Footer from './components/Footer.jsx'
import './App.css'


function App() {
  const [activeContent, setActiveContent] = useState('home'); // Default to 'home'

  return (
    <div>
    <Header setActiveContent={setActiveContent}/>
    <Main activeContent={activeContent}/>
    <Footer/>
    <br/>
    <br/>
    </div>
  )
}

export default App
