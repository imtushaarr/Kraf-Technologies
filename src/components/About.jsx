import React from 'react';
import { Code2, Rocket, Target, Trophy } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-black py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#18CB96] rounded-full filter blur-[128px]"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#18CB96] rounded-full filter blur-[128px]"></div>
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://media.licdn.com/dms/image/v2/D4D22AQHS3M392goqbA/feedshare-shrink_1280/B4DZT4pfn2HwAk-/0/1739338415267?e=1743033600&v=beta&t=nZ48BzE13goKxpjpH-N1N50MxD4VeRNsdV_67GdDPLE"
                alt="Modern office space"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
               
              <div className="absolute bottom-0 left-0 right-0 p-8 grid grid-cols-2 gap-8">
                <div>
                  <div className="text-[#18CB96] text-4xl font-bold mb-2">3+</div>
                  <div className="text-white text-sm">Years Experience</div>
                </div>
                <div>
                  <div className="text-[#18CB96] text-4xl font-bold mb-2">20+</div>
                  <div className="text-white text-sm">Projects Completed</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-4xl font-semibold text-white mb-6">
            Transforming Businesses Through Next-Gen SaaS Innovation
            </h2>
            <p className="text-gray-400 mb-8 text-lg leading-relaxed text-justify">
            At Kraf Technologies, we are pioneers in delivering cutting-edge Software-as-a-Service (SaaS) solutions tailored for B2B enterprises. Our mission is to empower businesses with tools that not only solve today’s challenges but also unlock tomorrow’s opportunities. By blending technical excellence with industry insights, we craft scalable platforms that drive efficiency, fuel growth, and redefine what’s possible.
            </p>

            <div className="grid grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#18CB96]/10 rounded-lg">
                  <Code2 className="text-[#18CB96] w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Custom SaaS Development:</h3>
                  <p className="text-gray-400">Tailored solutions for unique challenges</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#18CB96]/10 rounded-lg">
                  <Rocket className="text-[#18CB96] w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Rapid Deployment</h3>
                  <p className="text-gray-400">Swift and efficient implementation</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#18CB96]/10 rounded-lg">
                  <Target className="text-[#18CB96] w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Strategic Focus</h3>
                  <p className="text-gray-400">Results-driven methodology</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#18CB96]/10 rounded-lg">
                  <Trophy className="text-[#18CB96] w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Award Winning</h3>
                  <p className="text-gray-400">Industry recognized excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}