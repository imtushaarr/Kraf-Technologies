import React from 'react';
import { 
  LineChart, Server, Shield, Globe, Box, Terminal, 
  Cpu, Brain, Command, Layers, Database, Network 
} from 'lucide-react';
import KrafX from '../assets/MacBook.png';

import { Helmet } from "react-helmet";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#0a0a0a] to-black text-white">
            <Helmet>
              <title>Our Products -  Kraf Technologies</title>
              <meta
                name="description"
                content="Explore our cutting-edge SaaS solutions, AI-powered analytics, and enterprise-grade cloud infrastructure. Built for scale and security."
              />
              <meta name="keywords" content="SaaS, AI, Cloud, Security, Analytics, Kraf Technologies" />
              <meta property="og:title" content="Enterprise Solutions & SaaS Products | Kraf Technologies" />
              <meta property="og:description" content="Explore our latest innovations in AI, cloud computing, and security solutions for enterprises." />
              <meta property="og:image" content="https://kraftechnologies.com/assets/products-og-image.jpg" />
              <meta property="og:url" content="https://kraftechnologies.com/products/" />
              <link rel="canonical" href="https://kraftechnologies.com/products/" />
            </Helmet>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-12 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="relative max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 animate-fade-in">
              <span className="text-[#18CB96] bg-clip-text animate-pulse">Enterprise Solutions</span>
              <br />Built for Scale
            </h1>
            <p className="text-base md:text-xl text-gray-300 mb-6 md:mb-8 max-w-2xl">
              Powering the next generation of business transformation with advanced SaaS solutions
            </p>
            <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
              <a href='/contact-us' target="_blank" aria-label="Schedule a 30-minute call with Kraf Technologies">
              <button className="bg-[#18CB96] text-black px-6 py-3 md:px-8 md:py-3 rounded-lg font-semibold hover:bg-[#15b585] transition-all flex items-center justify-center gap-2">
                Book a Demo 
              </button>
              </a>
              <a href='https://calendly.com/kraftechnologies-info/30min' target="_blank" aria-label="Schedule a 30-minute call with Kraf Technologies">
              <button className="border border-[#18CB96] text-[#18CB96] px-6 py-3 md:px-8 md:py-3 rounded-lg font-semibold hover:bg-[#18CB96]/10 focus:outline-none focus:ring-2 focus:ring-[#18CB96] transition-all">
                Schedule A Call
              </button>
              </a>
            </div>
          </div>

          {/* MacBook Mockup */}
          <div className="relative w-full max-w-5xl mx-auto mt-8 md:mt-16 animate-float">
            <div className="relative rounded-xl overflow-hidden shadow-[0_0_60px_-15px_rgba(24,203,150,0.3)]">
              <img 
                src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=1200"
                alt="Dashboard"
                className="w-full rounded-xl border border-gray-800"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#18CB96]/10 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Showcase */}
      <section className="py-16 md:py-32 relative overflow-hidden">
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 md:mb-6 bg-clip-text text-transparent bg-white to-emerald-300">
              What We've Built
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto text-base md:text-xl">
              Explore our latest projects and innovative solutions that have helped our clients achieve their business objectives.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {projects.map((project, index) => (
              <div key={index} className="group perspective-1000">
                <div className="relative transform transition-all duration-500 group-hover:rotate-y-2 group-hover:translate-y-[-4px]">
                  <div className="bg-[#0d0d0d] rounded-xl overflow-hidden shadow-[0_8px_32px_rgba(24,203,150,0.1)]">
                    <div className="bg-[#151515] p-3 md:p-4 flex items-center gap-2 border-b border-gray-800/50">
                      <div className="flex gap-2">
                        <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-[#ff5f56]"></div>
                        <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-[#ffbd2e]"></div>
                        <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-[#27c93f]"></div>
                      </div>
                      <div className="ml-2 md:ml-4 px-2 md:px-4 py-1 bg-[#0d0d0d] rounded-md text-xs md:text-sm text-gray-400 flex-grow text-center font-mono truncate">
                        {project.url}
                      </div>
                    </div>
                    
                    <div className="relative overflow-hidden">
                      <div className="relative group-hover:scale-105 transition-transform duration-700">
                        <img 
                          src={project.image} 
                          alt={project.name}
                          className="w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent"></div>
                      </div>
                    </div>
                    
                    <div className="p-4 md:p-8 bg-gradient-to-b from-[#0d0d0d]/80 to-[#0d0d0d]">
                      <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                        {project.name}
                      </h3>
                      <p className="text-gray-400 mb-4 md:mb-6 text-sm md:text-base leading-relaxed">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <span key={i} className="px-2 md:px-4 py-1 bg-[#151515] rounded-md text-xs md:text-sm text-[#18CB96] border border-[#18CB96]/20 shadow-[0_0_20px_-12px_rgba(24,203,150,0.5)]">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Products */}
      <section className="py-16 md:py-32 relative">
        <div className="container mx-auto px-4 relative">
          <h2 className="text-4xl md:text-5xl font-bold mb-2 md:mb-2 text-center bg-clip-text text-transparent bg-white to-emerald-300">
            Enterprise Solutions
          </h2>
          <div className="w-40 h-1 bg-[#18CB96] mx-auto mb-16"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {products.map((product, index) => (
              <div key={index} 
                className="group bg-gradient-to-b from-[#0d0d0d] to-[#151515] p-6 md:p-8 rounded-xl border border-gray-800/50 hover:border-[#18CB96]/30 transition-all duration-500 hover:shadow-[0_8px_32px_rgba(24,203,150,0.1)] hover:translate-y-[-4px]"
              >
                <div className="mb-4 md:mb-6 relative">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-[#18CB96]/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <product.icon className="w-6 h-6 md:w-7 md:h-7 text-[#18CB96]" />
                  </div>
                  <div className="absolute inset-0 bg-[#18CB96]/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">{product.name}</h3>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed">{product.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Projects */}
      <section className="py-16 md:py-32 relative">
        <div className="container mx-auto px-4 relative">
          <h2 className="text-4xl md:text-5xl font-bold mb-2 md:mb-2 text-center bg-clip-text text-transparent bg-white to-emerald-300">
            Future Innovations
          </h2>
          <div className="w-40 h-1 bg-[#18CB96] mx-auto mb-16"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {futureProjects.map((project, index) => (
              <div key={index} className="relative group">
                <div className="relative bg-gradient-to-b from-[#0d0d0d] to-[#151515] p-6 md:p-10 rounded-xl border border-gray-800/50 hover:border-[#18CB96]/30 transition-all duration-500">
                  <div className="mb-6 md:mb-8 relative">
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-[#18CB96]/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <project.icon className="w-7 h-7 md:w-8 md:h-8 text-[#18CB96]" />
                    </div>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">{project.name}</h3>
                  <p className="text-gray-400 text-sm md:text-base mb-4 md:mb-6 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="px-3 md:px-4 py-1 bg-[#0d0d0d] rounded-md text-xs md:text-sm text-[#18CB96] border border-[#18CB96]/20">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const projects: Project[] = [
  {
    name: "KrafX-Q1: Business Solution & Hackathon Management Platform",
    description: "KrafX-Q1 is a B2B SaaS solution designed to help companies and organizations efficiently manage hackathons. It streamlines the entire hackathon process, from listing and registration to evaluation, team collaboration, and final submission.",
    image: KrafX,
    url: "krafx-q1.kraftechnologies.com",
    technologies: ["React", "Redux", "WebRTC", "Blockchain"]
  },
  {
    name: "Fintech Mobile Platform",
    description: "Secure and intuitive mobile banking solution with advanced features, biometric authentication, and AI-powered financial insights.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200",
    url: "fintech-mobile.app",
    technologies: ["Flutter", "Firebase", "AI", "Cloud"]
  }
];

const products: Product[] = [
  {
    name: "Enterprise Analytics",
    description: "Advanced data analytics platform with real-time insights and predictive modeling powered by machine learning.",
    icon: LineChart
  },
  {
    name: "Cloud Infrastructure",
    description: "Scalable cloud solutions with automated deployment and intelligent resource management.",
    icon: Server
  },
  {
    name: "Security Suite",
    description: "Enterprise-grade security with AI-powered threat detection and zero-trust architecture.",
    icon: Shield
  },
  {
    name: "Global Operations",
    description: "Unified platform for managing worldwide business operations with real-time synchronization.",
    icon: Globe
  },
  {
    name: "Integration Hub",
    description: "Seamless integration platform connecting enterprise systems through smart APIs and workflows.",
    icon: Box
  },
  {
    name: "DevOps Platform",
    description: "Streamlined development and deployment pipeline with automated testing and monitoring.",
    icon: Terminal
  }
];

const futureProjects: FutureProject[] = [
  {
    name: "AI-Powered Business Intelligence",
    description: "Next-generation analytics platform leveraging artificial intelligence for predictive insights and automated decision-making, with advanced visualization capabilities.",
    icon: Brain,
    technologies: ["AI/ML", "Big Data", "Cloud Native", "React"]
  },
  {
    name: "Unified Enterprise Dashboard",
    description: "Comprehensive command center for monitoring and managing all aspects of enterprise operations in real-time, featuring 3D visualization and predictive analytics.",
    icon: Layers,
    technologies: ["TypeScript", "GraphQL", "WebGL", "Node.js"]
  }
];

export default App;