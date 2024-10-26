import './App.css'
import AboutMe from './Components/AboutMe/AboutMe'
import SideNav from './Components/SideNav/SideNav'
import Education from './Components/Education/Education'
import Experience from './Components/Experience/Experience'
import Artwork from './Components/3DArtwork/Artwork'
import Websites from './Components/Websites/Websites'
import ContactInfo from './Components/ContactInfo/ContactInfo'
// dont forget to import css files and to render react components
//with <> tag rather than calling it as {function}

function App() {

  return (
    <>
      <div className="RootContainer">
        <SideNav />
        <AboutMe />
        <Education />
        <Experience />
        <Artwork />
        <Websites />
        <ContactInfo />
      </div>
    </>
  )
}

export default App
