import React from 'react'
import Hero from '../components/Hero';
import About from '../components/About';
import Brands from '../components/Brands';
import Showcase from '../components/Showcase';
// import LogoCloud from '../components/LogoCloud';

function Home() {
  return (
    <div className="min-h-screen bg-black">
     <Hero />
     <About />
     {/* <LogoCloud /> */}
     <Showcase />
     <Brands />
    </div>
  )
}

export default Home