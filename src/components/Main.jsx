import ProfilePic from '../assets/Ray_Photo.jpg'

export default function Main(){
  return (
    <div id="main">
      <div class='wrapper'>
        <h1>Welcome to Ray Lam’s Portfolio</h1>
        <p>Hi, I’m Ray (Wai Man Lam), a results-driven software engineer with over 12 years of experience in backend development, specializing in scalable Java solutions. I have a proven track record of leading secure, high-uptime deployments and mentoring high-performing teams.</p>
        <img id='profilePic' src={ProfilePic} alt='My Profile Pic'/>
        <p>Explore my <a href=''>Resume</a> to learn more about my skills and experience!</p>
        <p>Github project <a href='/'>Demo</a></p>
      </div>
    </div>
  )
}