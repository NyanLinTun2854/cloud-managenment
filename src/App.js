import React from 'react'
import About from './components/About'
import AllInOne from './components/AllInOne'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Nav from './components/Nav'
import Pricing from './components/Pricing'
import Support from './components/Support'

const App = () => {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Support />
      <AllInOne />
      <Pricing />
      <Footer />
    </>
  )
}

export default App