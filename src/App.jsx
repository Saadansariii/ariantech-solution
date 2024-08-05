import './App.css'
import Navbar from './component/Navbar'
import Card  from './component/Card'
import Hero from './component/Hero'
import Home from './Home'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import OurClient from './component/OurClient'
import Member from './component/Member'
import Collegue from './component/Collegue'
import Values from './component/Values'
import Testimonial from './component/Testimonial'
import Heroimg from './component/Heroimg'


function App() {
 

  return (
    <>
      <Navbar/>
      <Heroimg/>
      <Hero/>
      <Card/>
      <OurClient/>
      <Collegue/>
      <Member/>
      <Values/>
      <Testimonial/>
    {/* <Home/> */}
    
    </>
  )
}



export default App
