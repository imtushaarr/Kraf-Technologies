import React from 'react';
import { Monitor, Laptop, Phone, BarChart, Users, Cog, ArrowRight } from 'lucide-react';

export default function Showcase() {
  return (
    <div className="bg-black py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Grid */}
        <div className="absolute inset-0" style={{ 
          backgroundImage: `linear-gradient(to right, #111 1px, transparent 1px),
                           linear-gradient(to bottom, #111 1px, transparent 1px)`,
          backgroundSize: '2rem 2rem'
        }}></div>
        
        {/* Animated Glow */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#18CB96]/5 rounded-full filter blur-[100px] animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#18CB96]/5 rounded-full filter blur-[100px] animate-pulse delay-1000"></div>
        </div>
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold text-white mb-4">Project Showcase</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore our latest projects and innovative solutions that have helped our clients
            achieve their business objectives.
          </p>
        </div>

        {/* Featured Project */}
        <div className="mb-24">
          <div className="relative bg-gray-900 rounded-lg shadow-2xl overflow-hidden border border-gray-800">
            {/* Browser Header */}
            <div className="bg-gray-800 p-3 flex items-center gap-2">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="flex-1 flex justify-center">
                <div className="bg-gray-700 rounded-md px-3 py-1 text-sm text-gray-400 w-64 text-center">
                  enterprise-kraftechnologies.app
                </div>
              </div>
            </div>

            {/* Dashboard Content */}
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Analytics Card */}
                <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-[#18CB96]/50 transition-colors duration-300">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-[#18CB96] font-semibold">Analytics Overview</h3>
                    <BarChart className="text-[#18CB96]" size={20} />
                  </div>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-400">Revenue</span>
                        <span className="text-[#18CB96]">+24%</span>
                      </div>
                      <div className="h-2 bg-gray-700 rounded-full">
                        <div className="h-2 bg-[#18CB96] rounded-full w-3/4 animate-pulse"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-400">Growth</span>
                        <span className="text-[#18CB96]">+12%</span>
                      </div>
                      <div className="h-2 bg-gray-700 rounded-full">
                        <div className="h-2 bg-[#18CB96] rounded-full w-1/2 animate-pulse delay-100"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Users Card */}
                <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-[#18CB96]/50 transition-colors duration-300">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-[#18CB96] font-semibold">Active Users</h3>
                    <Users className="text-[#18CB96]" size={20} />
                  </div>
                  <div className="flex items-end space-x-2 h-32">
                    {[40, 60, 75, 90, 100].map((height, index) => (
                      <div key={index} className="flex-1">
                        <div 
                          className="bg-[#18CB96] rounded-t opacity-60 hover:opacity-100 transition-all duration-300"
                          style={{ height: `${height}%` }}
                        ></div>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between mt-4 text-sm text-gray-400">
                    <span>Mon</span>
                    <span>Tue</span>
                    <span>Wed</span>
                    <span>Thu</span>
                    <span>Fri</span>
                  </div>
                </div>

                {/* Performance Card */}
                <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-[#18CB96]/50 transition-colors duration-300">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-[#18CB96] font-semibold">System Performance</h3>
                    <Cog className="text-[#18CB96]" size={20} />
                  </div>
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-400">CPU Usage</span>
                        <span className="text-[#18CB96]">45%</span>
                      </div>
                      <div className="h-2 bg-gray-700 rounded-full">
                        <div className="h-2 bg-[#18CB96] rounded-full w-5/12 animate-pulse"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-400">Memory</span>
                        <span className="text-[#18CB96]">72%</span>
                      </div>
                      <div className="h-2 bg-gray-700 rounded-full">
                        <div className="h-2 bg-[#18CB96] rounded-full w-8/12 animate-pulse"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-400">Storage</span>
                        <span className="text-[#18CB96]">64%</span>
                      </div>
                      <div className="h-2 bg-gray-700 rounded-full">
                        <div className="h-2 bg-[#18CB96] rounded-full w-7/12 animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Responsive Design Section */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Responsive Across All Devices</h3>
          <div className="flex justify-center gap-12">
            {[
              { icon: Monitor, label: "Desktop", size: "2560 x 1440" },
              { icon: Laptop, label: "Laptop", size: "1920 x 1080" },
              { icon: Phone, label: "Mobile", size: "390 x 844" }
            ].map(({ icon: Icon, label, size }) => (
              <div key={label} className="group text-center">
                <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-12 h-12 text-[#18CB96] mx-auto" />
                </div>
                <h4 className="text-white font-semibold mb-1">{label}</h4>
                <p className="text-gray-400 text-sm">{size}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}