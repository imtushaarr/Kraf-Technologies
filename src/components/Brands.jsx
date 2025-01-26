import React from 'react';
import { Building2, Shield, Briefcase, Building, Code2, Database, Cloud, Cpu } from 'lucide-react';

export default function Brands() {
  return (
    <div className="bg-black py-24 relative">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0" style={{ 
          backgroundImage: `linear-gradient(45deg, rgba(24, 203, 150, 0.03) 1px, transparent 1px),
                           linear-gradient(-45deg, rgba(24, 203, 150, 0.03) 1px, transparent 1px)`,
          backgroundSize: '3rem 3rem'
        }}></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#18CB96] rounded-full filter blur-[128px] opacity-10 animate-glow"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#18CB96] rounded-full filter blur-[128px] opacity-10 animate-glow delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative">
        {/* Technology Stack */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Technology Excellence</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our expertise spans across cutting-edge technologies, enabling us to deliver
              innovative solutions that drive business success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: Code2,
                title: "Frontend",
                tech: ["React", "Vue.js", "Next.js", "TypeScript"],
                color: "from-[#61DAFB] to-[#41B883]"
              },
              {
                icon: Database,
                title: "Backend",
                tech: ["Node.js", "Python", "Go", "Java"],
                color: "from-[#68A063] to-[#00ADD8]"
              },
              {
                icon: Cloud,
                title: "Cloud & DevOps",
                tech: ["AWS", "Azure", "Docker", "Kubernetes"],
                color: "from-[#FF9900] to-[#0080FF]"
              },
              {
                icon: Cpu,
                title: "Data & AI",
                tech: ["TensorFlow", "PyTorch", "scikit-learn", "OpenAI"],
                color: "from-[#FF6B6B] to-[#4ECDC4]"
              }
            ].map(({ icon: Icon, title, tech, color }, index) => (
              <div
                key={index}
                className="group animate-scale-in hover-lift"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="glass-effect p-8 rounded-xl classic-border h-full">
                  <div className={`w-16 h-16 mb-6 rounded-xl bg-gradient-to-br ${color} p-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-full h-full text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
                  <div className="space-y-3">
                    {tech.map((item, i) => (
                      <div
                        key={i}
                        className="flex items-center space-x-2 text-gray-400 group-hover:text-white transition-colors duration-300"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-[#18CB96]"></div>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}