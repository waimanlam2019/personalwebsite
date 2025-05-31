export default function Header({ setActiveContent }) {
  return (
    <div id="header" >
      <div class='wrapper flex-hori'>
        <span id='siteTitle'>Ray Lam - Software Engineer</span>
        <div class="flex-hori">
            <button class="navUrl" onClick={() => setActiveContent('home')}>Home</button>
            <button class="navUrl" onClick={() => setActiveContent('resume')}>Resume</button>
            <button class="navUrl" onClick={() => setActiveContent('demo')}>Demo</button>
        </div>
      </div>
    </div>
  )
}