import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ProfilePic from './assets/Ray_Photo.jpg'
import './App.css'

function Header() {
  return (
    <div class='flex-hori'>
      <span id='siteTitle'>Ray Lam - Software Engineer</span>
      <div class="flex-hori">
        <a class="navUrl" href="/">Home</a>
        <a class="navUrl" href="/">Resume</a>
        <a class="navUrl" href="/">Blog</a>
        <a class="navUrl" href="/">Demo</a>
      </div>
    </div>
  )
}

function Main(){
  return (
    <div>
      <h2>Welcome to Ray Lam’s Portfolio</h2>
      <p>Hi, I’m Ray (Wai Man Lam), a results-driven software engineer with over 12 years of experience in backend development, specializing in scalable Java solutions. I have a proven track record of leading secure, high-uptime deployments and mentoring high-performing teams.</p>
      <img id='profilePic' src={ProfilePic} alt='My Profile Pic'/>
      <p>Explore my <a href=''>Resume</a> to learn more about my skills and experience!</p>
      <p>Github project <a href='/'>Demo</a></p>
    </div>
  )
}

function Footer(){
  return (
    <div id="footer">
      <div class='flex-hori'>
        <div class='flex-vertical'>
          <span>Ray Lam - Software Engineer</span>
          <a href="mailto:lamwaiman1988@gmail.com">lamwaiman1988@gmail.com</a>
          <span>Whatsapp: +852 57190470</span>
        </div>
        <p>Personal portfolio and resume of Wai Man Lam (Ray), a backend development specialist with over 12 years of experience.</p>
      </div>
      
    </div>
  )
}

function App() {
  
  return (
    <div>
    <Header/>
    <hr/>
    <Main/>
    <hr/>
    <br/>
    <Footer/>
    <br/>
    <br/>
    </div>
  )
}

export default App
