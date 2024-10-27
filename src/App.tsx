import './App.css'
import AboutMe from './Components/AboutMe/AboutMe'
import SideNav from './Components/SideNav/SideNav'
import Education from './Components/Education/Education'
import Experience from './Components/Experience/Experience'
import Artwork from './Components/3DArtwork/Artwork'
import Websites from './Components/Websites/Websites'
import ContactInfo from './Components/ContactInfo/ContactInfo'
import { darkContext } from './Components/CommonLogicStyles/DarkContext'
import { useState } from 'react'
// dont forget to import css files and to render react components
//with <> tag rather than calling it as {function}

function App() {
  const [theme, setTheme] = useState(true)

  function toggleMode() {
    document.body.classList.toggle('light-mode');
    setTheme(theme => !theme);
  }

  return (
    < darkContext.Provider value={theme}>
      <div className="RootContainer">
        <img src='contrasticon.png' className={`ContrastButton ${theme ? "" : "ContrastButtonLight"}`} onClick={() => toggleMode()}
          style={{ position: 'absolute', right: '50px', zIndex: '1000' }} />
        <SideNav />
        <AboutMe />
        <Education />
        <Experience />
        <Artwork />
        <Websites />
        <ContactInfo />
      </div>
    </darkContext.Provider>
  )
}


export default App
