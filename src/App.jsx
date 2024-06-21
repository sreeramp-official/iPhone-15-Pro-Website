import React from 'react'
import { Navbar, Hero, Highlights, Model, Features, HowItWorks, Footer } from './components'

const App = () => {
  return (
    <main className="bg-black overflow-x-hidden">
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
      <Features />
      <HowItWorks />
      <Footer />
    </main>
  )
}

export default App