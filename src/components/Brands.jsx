import React from 'react';
import { Building2, Shield, Briefcase, Building } from 'lucide-react';

export default function Brands() {
  return (
    <div className="bg-black py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold text-white mb-4">Trusted by Industry Leaders</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We're proud to work with forward-thinking companies across various sectors,
            helping them achieve their digital transformation goals.
          </p>
        </div>

        {/* Brand Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {[Building2, Shield, Briefcase, Building].map((Icon, index) => (
            <div key={index} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#18CB96]/20 to-[#18CB96]/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative flex flex-col items-center p-8 bg-gray-900/50 backdrop-blur-lg rounded-xl border border-gray-800 hover:border-[#18CB96]/50 transition-all duration-300">
                <Icon className="w-12 h-12 text-[#18CB96] mb-4" />
                <div className="text-white font-semibold mb-2">Enterprise {index + 1}</div>
                <div className="text-gray-400 text-sm text-center">Industry Leader</div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              quote: "Their expertise in software development has been instrumental in our digital transformation journey.",
              author: "Sarah Johnson",
              role: "CTO, TechCorp"
            },
            {
              quote: "Exceptional service and innovative solutions that have helped us stay ahead of the competition.",
              author: "Michael Chen",
              role: "CEO, InnovateTech"
            },
            {
              quote: "A reliable partner that consistently delivers high-quality software solutions on time.",
              author: "Emily Rodriguez",
              role: "Director of IT, GlobalCorp"
            }
          ].map((testimonial, index) => (
            <div key={index} className="bg-gray-900/50 p-8 rounded-xl border border-gray-800">
              <div className="text-[#18CB96] text-6xl font-serif mb-4">"</div>
              <p className="text-gray-400 mb-6 italic">{testimonial.quote}</p>
              <div>
                <div className="text-white font-semibold">{testimonial.author}</div>
                <div className="text-[#18CB96]">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}