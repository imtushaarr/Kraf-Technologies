import React from 'react';
import { ArrowRight, BarChart, Cloud, Code, Cog, Database, Lock, Users } from 'lucide-react';

export default function Services() {
  return (
    <div className="bg-black py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-[#18CB96] text-center mb-16">
          Our Services
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            icon={<Code />}
            title="Custom Software Development"
            description="Tailored solutions built to address your specific business challenges and requirements."
          />
          <ServiceCard
            icon={<Cloud />}
            title="Cloud Solutions"
            description="Scalable and secure cloud infrastructure to power your business applications."
          />
          <ServiceCard
            icon={<Database />}
            title="Data Management"
            description="Enterprise-grade data solutions for better insights and decision-making."
          />
          <ServiceCard
            icon={<Users />}
            title="Team Augmentation"
            description="Expert developers and engineers to strengthen your existing team."
          />
          <ServiceCard
            icon={<Lock />}
            title="Security Solutions"
            description="Robust security implementations to protect your business assets."
          />
          <ServiceCard
            icon={<BarChart />}
            title="Digital Transformation"
            description="Strategic guidance to modernize your business processes."
          />
        </div>
      </div>
    </div>
  );
}

function ServiceCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="group p-8 bg-gray-900/50 backdrop-blur-lg rounded-xl hover:bg-gray-800/50 transition-all duration-300 border border-gray-800">
      <div className="text-[#18CB96] mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      <div className="flex items-center text-[#18CB96] group-hover:translate-x-2 transition-transform duration-300">
        <span className="mr-2">Learn more</span>
        <ArrowRight size={16} />
      </div>
    </div>
  );
}