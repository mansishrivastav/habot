import React from 'react'
import Hero from './components/Hero'
import Suppliers from './components/Suppliers'
import SecondBody from './components/SecondBody'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Cards from './components/Cards'
import ThirdBody from './components/ThirdBody'

const App = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <SecondBody/>
      <ThirdBody/>
      <Suppliers/>
      <Cards/>
      <Footer/>
    </>
  )
}

export default App