import React from 'react';
import { Code2, Cpu, Database, Globe } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Vector background elements */}
      <div className="absolute inset-0">
        {/* Grid lines */}
        <div className="absolute inset-0" style={{ 
          backgroundImage: `linear-gradient(to right, #111 1px, transparent 1px),
                           linear-gradient(to bottom, #111 1px, transparent 1px)`,
          backgroundSize: '4rem 4rem'
        }}></div>
        
        {/* Animated vector elements */}
        <div className="absolute w-full h-full">
          <div className="absolute top-20 left-20 w-96 h-96 animate-float-slow">
            <div className="absolute inset-0 border-2 border-[#18CB96]/20 rounded-full transform rotate-45"></div>
            <div className="absolute inset-4 border-2 border-[#18CB96]/20 rounded-full"></div>
            <div className="absolute inset-8 border-2 border-[#18CB96]/20 rounded-full transform -rotate-45"></div>
          </div>
          <div className="absolute top-40 right-20 w-80 h-80 animate-float-medium">
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <path d="M10,50 Q50,10 90,50 Q50,90 10,50" 
                    fill="none" 
                    stroke="rgba(24, 203, 150, 0.2)" 
                    strokeWidth="0.5"
                    className="animate-draw" />
              <path d="M20,50 Q50,20 80,50 Q50,80 20,50" 
                    fill="none" 
                    stroke="rgba(24, 203, 150, 0.2)" 
                    strokeWidth="0.5"
                    className="animate-draw-delay" />
            </svg>
          </div>
          <div className="absolute bottom-20 left-1/3 w-72 h-72 animate-float-fast">
            <div className="absolute inset-0 border-2 border-[#18CB96]/20 transform rotate-[30deg]"></div>
            <div className="absolute inset-4 border-2 border-[#18CB96]/20 transform rotate-[60deg]"></div>
            <div className="absolute inset-8 border-2 border-[#18CB96]/20 transform rotate-[90deg]"></div>
          </div>
        </div>

        {/* Glowing orbs */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-[#18CB96]/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-4 h-4 bg-[#18CB96]/20 rounded-full blur-xl animate-pulse delay-700"></div>
        <div className="absolute bottom-1/4 right-1/4 w-4 h-4 bg-[#18CB96]/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-6 py-32">
        <div className="flex flex-col items-center text-center">
          <div className="mb-8 animate-fade-in">
            <div className="inline-block p-2  backdrop-blur-sm ">
              <h1 className="text-5xl md:text-7xl font-semibold text-white">
                Building Next-Gen Solutions
              </h1>
            </div>
          </div>
          
          <p className="text-xl text-[#18CB96] max-w-2xl mb-12 animate-fade-in-delay-1 leading-relaxed">
            Transforming businesses through cutting-edge software development and B2B solutions that drive growth and efficiency.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 animate-fade-in-delay-2">
            <Feature icon={<Code2 size={32} />} title="Custom Development" />
            <Feature icon={<Database size={32} />} title="Enterprise Solutions" />
            <Feature icon={<Globe size={32} />} title="Cloud Services" />
            <Feature icon={<Cpu size={32} />} title="Digital Innovation" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Feature({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="group relative">
      <div className="absolute inset-0 bg-gradient-to-r from-[#18CB96]/20 to-[#18CB96]/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="relative flex flex-col items-center p-6 bg-white/5 backdrop-blur-lg rounded-xl hover:bg-white/10 transition-all duration-300 cursor-pointer border border-[#18CB96]/10">
        <div className="text-[#18CB96] mb-4 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="text-white text-lg font-semibold">{title}</h3>
      </div>
    </div>
  );
}