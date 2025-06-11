import React from 'react'
import Navbar from '../components/Navbar'
import Digital from '../components/Digital'
import Clients from '../components/Clients'
import AboutSection from '../components/AboutSection'
import Status from '../components/Status'
import SwitchTabSection from '../components/SwitchTabSection'
import Services from '../components/Services'
import Portfolio from '../components/Portfolio'

const Home = () => {
  return (
   
    <>

    <Navbar />
    <Digital />
    <Clients />
    <AboutSection />
    <Status />
    <SwitchTabSection />
    <Services />
    <Portfolio />

    


    </>
  )
}

export default Home;