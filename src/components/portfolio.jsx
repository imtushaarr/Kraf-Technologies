import React from 'react';
import { Monitor, Laptop, Phone, BarChart, Users, Cog, ArrowRight, Globe, Shield, Database } from 'lucide-react';
import KrafX from '../assets/MacBook.png';

export default function Showcase() {
  return (
    <div className="bg-black py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Grid */}
        <div className="absolute inset-0" style={{ 
          backgroundImage: `linear-gradient(to right, rgba(24, 203, 150, 0.1) 1px, transparent 1px),
                           linear-gradient(to bottom, rgba(24, 203, 150, 0.1) 1px, transparent 1px)`,
          backgroundSize: '2rem 2rem'
        }}></div>
        
        {/* Animated Glow */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#18CB96]/5 rounded-full filter blur-[100px] animate-glow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#18CB96]/5 rounded-full filter blur-[100px] animate-glow delay-1000"></div>
        </div>
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-white mb-4">What We’ve Built</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore our latest projects and innovative solutions that have helped our clients
            achieve their business objectives.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Enterprise Dashboard */}
          <div className="group animate-slide-up hover-lift flex flex-col">
            <div className="glass-effect rounded-xl overflow-hidden border border-[#18CB96]/10 group-hover:border-[#18CB96]/30 transition-colors duration-300 flex-1 flex flex-col">
              <div className="bg-gray-800/50 p-3 flex items-center gap-2">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="bg-gray-700/50 rounded-md px-3 py-1 text-sm text-gray-400">
                    krafx-q1.kraftechnologies.com
                  </div>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <img 
                  src={KrafX}
                  alt="Enterprise Dashboard"
                  className="rounded-lg shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="mt-6 flex-1">
                  <h3 className="text-white/3 text-xl font-semibold mb-2">KrafX-Q1: Business Solution & Hackathon Management Platform</h3>
                  <p className="text-gray-400 mb-4">KrafX-Q1 is a B2B SaaS solution designed to help companies and organizations efficiently manage hackathons. It streamlines the entire hackathon process, from listing and registration to evaluation, team collaboration, and final submission.</p>
                  <div className="flex gap-3">
                    <span className="px-3 py-1 bg-[#18CB96]/10 text-[#18CB96] rounded-full text-sm">React</span>
                    <span className="px-3 py-1 bg-[#18CB96]/10 text-[#18CB96] rounded-full text-sm">Redux</span>
                    <span className="px-3 py-1 bg-[#18CB96]/10 text-[#18CB96] rounded-full text-sm">WebRTC</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile App */}
          <div className="group animate-slide-up hover-light flex flex-col" style={{ animationDelay: '200ms' }}>
            <div className="glass-effect rounded-xl overflow-hidden border border-[#18CB96]/10 group-hover:border-[#18CB96]/30 transition-colors duration-300 flex-1 flex flex-col">
              <div className="bg-gray-800/50 p-3 flex items-center gap-2">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="bg-gray-700/50 rounded-md px-3 py-1 text-sm text-gray-400">
                    fintech-mobile.app
                  </div>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <img 
                  src="https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&q=80&w=2426"
                  alt="Fintech Mobile App"
                  className="rounded-lg shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="mt-6 flex-1">
                  <h3 className="text-white/3 text-xl font-semibold mb-2">Fintech Mobile Platform</h3>
                  <p className="text-gray-400 mb-4">Secure and intuitive mobile banking solution with advanced features.</p>
                  <div className="flex gap-3">
                    <span className="px-3 py-1 bg-[#18CB96]/10 text-[#18CB96] rounded-full text-sm">React Native</span>
                    <span className="px-3 py-1 bg-[#18CB96]/10 text-[#18CB96] rounded-full text-sm">Node.js</span>
                    <span className="px-3 py-1 bg-[#18CB96]/10 text-[#18CB96] rounded-full text-sm">GraphQL</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* View More Projects Button */}
        <div className="text-center">
          <a href="/products" className="inline-block text-[#18CB96] hover:text-[#18CB96]/90 transition-colors">
          <button className="bg-[#18CB96] text-black px-8 py-3 rounded-full text-sm font-semibold hover:bg-[#18CB96]/90 transition-colors">
            View More Projects
          </button>
          </a>
        </div>
      </div>
    </div>
  );
}