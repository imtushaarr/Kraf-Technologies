import { Helmet } from "react-helmet-async";
import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Brands from '../components/Brands';
import Portfolio from "./../components/portfolio";


function Home() {
  return (
    <>
      <Helmet>
          <title>Kraf Technologies – Building Next-Gen Solutions</title>
          <meta name="description" content="At Kraf Technologies, we are pioneers in delivering cutting-edge Software-as-a-Service (SaaS) solutions tailored for B2B enterprises." />
          <meta name="keywords" content="B2B SaaS, AI solutions, Web Technologies, Block-Chain, Kraf Technologies" />
          <meta name="robots" content="index, follow" />
          <link rel="canonical" href="https://www.kraftechnologies.com" />
        </Helmet>
        
      <div className="min-h-screen bg-black">
        <Hero />
        <About />
        <Portfolio />
        <Brands />
      </div>
    </>
  );
}

export default Home;