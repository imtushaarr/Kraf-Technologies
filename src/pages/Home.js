import React from 'react'
import Headers from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Brands from '../components/Brands';
import Footer from '../components/Footer';
import Showcase from '../components/Showcase';
import LogoCloud from '../components/LogoCloud';

function Home() {
  return (
    <div className="min-h-screen bg-black">
     <Headers />
     <Hero />
     <About />
     <LogoCloud />
     <Showcase />
     <Brands />
     <Footer />
    </div>
  )
}

export default Home