export default function Header({ setActiveContent }) {
  return (
    <div id="header" >
      <div class='wrapper flex-hori'>
        <span id='siteTitle'>Ray Lam - Software Engineer</span>
        <div class="flex-hori">
            <a class="navUrl" onClick={() => setActiveContent('home')}>Home</a>
            <a class="navUrl" onClick={() => setActiveContent('resume')}>Resume</a>
            <a class="navUrl" href="/">Blog</a>
            <a class="navUrl" onClick={() => setActiveContent('demo')}>Demo</a>
        </div>
      </div>
    </div>
  )
}