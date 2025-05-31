import MainReal from './MainReal.jsx'
import Resume from './Resume.jsx'
import Demo from './Demo.jsx'

export default function Main({ activeContent }){
  return (
    <main>
      {activeContent === 'home' && <MainReal />}
      {activeContent === 'resume' && <Resume />}
      {activeContent === 'demo' && <Demo />}
    </main>
  )
}