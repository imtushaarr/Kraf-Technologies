import React, { useState, useEffect } from 'react';
import { 
  Code2, Cloud, Brain, Blocks, Cpu, 
  Smartphone, Monitor, Database, Globe2,
  Server, Shield, Workflow, Layers,
  ChevronRight, X, ExternalLink,
  Info, Check, Terminal, Sparkles,
  Network, Bot, Braces, MessageSquare
} from 'lucide-react';

const technologies = {
  frontend: ['React', 'Vue.js', 'Next.js', 'TypeScript', 'Angular', 'Svelte'],
  backend: ['Node.js', 'Python', 'Go', 'Java', 'Ruby', 'PHP'],
  cloud: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'GCP', 'Terraform'],
  ai: ['TensorFlow', 'PyTorch', 'scikit-learn', 'OpenAI', 'Hugging Face', 'MLflow'],
  database: ['PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch', 'Cassandra'],
  security: ['OAuth 2.0', 'JWT', 'SSL/TLS', 'WAF', 'Zero Trust'],
};

const companyInfo = {
  mission: "Empowering businesses with next-generation SaaS solutions that drive innovation and growth.",
  vision: "To be the global leader in enterprise SaaS solutions, setting new standards in digital transformation.",
  values: [
    "Innovation First",
    "Customer Success",
    "Technical Excellence",
    "Continuous Learning",
    "Global Impact"
  ],
  expertise: [
    "Enterprise SaaS Development",
    "AI/ML Integration",
    "Cloud Architecture",
    "Security & Compliance",
    "Digital Transformation"
  ]
};

const aiFeatures = [
  {
    title: "Large Language Models",
    description: "State-of-the-art language models for natural text processing and generation",
    icon: MessageSquare,
    metrics: ["15B+ Parameters", "Multi-language Support", "Context-aware Responses"]
  },
  {
    title: "Neural Networks",
    description: "Deep learning networks for complex pattern recognition and prediction",
    icon: Network,
    metrics: ["99.9% Accuracy", "Real-time Processing", "Adaptive Learning"]
  },
  {
    title: "Machine Learning",
    description: "Advanced algorithms for data analysis and predictive modeling",
    icon: Brain,
    metrics: ["Automated Optimization", "Scalable Architecture", "Custom Models"]
  },
  {
    title: "AI Automation",
    description: "Intelligent automation systems for business process optimization",
    icon: Bot,
    metrics: ["24/7 Operation", "Smart Scheduling", "Error Prevention"]
  }
];

const Modal = ({ isOpen, onClose, title, content }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-black/90 border border-[#18CB96]/30 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-auto">
        <div className="p-6 border-b border-[#18CB96]/20">
          <div className="flex justify-between items-center">
            <h3 className="text-2xl font-bold text-[#18CB96]">{title}</h3>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-[#18CB96] transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
        <div className="p-6">{content}</div>
      </div>
    </div>
  );
};

const FeaturePoint = ({ x, y, label }) => (
  <div 
    className="absolute group"
    style={{ left: x, top: y }}
  >
    <div className="w-4 h-4 bg-[#18CB96] rounded-full animate-pulse" />
    <div className="hidden group-hover:block absolute bg-black/90 border border-[#18CB96]/30 rounded-lg p-3 w-48 z-10 transform -translate-x-1/2 mt-2">
      <p className="text-sm text-white">{label}</p>
    </div>
  </div>
);

const ProjectShowcase = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const projects = [
    {
      title: "Enterprise Dashboard",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2015",
      tech: ["React", "TypeScript", "GraphQL"]
    },
    {
      title: "AI Analytics Platform",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070",
      tech: ["Python", "TensorFlow", "AWS"]
    },
    {
      title: "Mobile Commerce",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=2070",
      tech: ["React Native", "Node.js", "MongoDB"]
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[400px] md:h-[700px]">
      {/* MacBook Pro */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl">
        <div className="bg-[#18CB96]/10 backdrop-blur-md rounded-t-xl p-2">
          <div className="bg-black rounded-lg aspect-video relative overflow-hidden">
            <img
              src={projects[currentIndex].image}
              alt={projects[currentIndex].title}
              className="w-full h-full object-cover transition-opacity duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/40 to-transparent">
              <div className="absolute bottom-0 left-0 p-4 md:p-6">
                <h3 className="text-lg md:text-2xl font-bold text-white mb-2">{projects[currentIndex].title}</h3>
                <div className="flex flex-wrap gap-2">
                  {projects[currentIndex].tech.map((tech) => (
                    <span key={tech} className="px-2 py-1 text-xs md:text-sm bg-[#18CB96]/20 rounded-full text-[#18CB96]">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <FeaturePoint x="20%" y="20%" label="AI-Powered Analytics" />
        <FeaturePoint x="80%" y="30%" label="Real-time Collaboration" />
        <FeaturePoint x="50%" y="70%" label="Cloud Infrastructure" />
      </div>

      {/* iPhone Pro */}
      <div className="absolute bottom-0 right-0 md:right-[10%] w-[150px] md:w-[250px] animate-float">
        <div className="bg-[#18CB96]/10 backdrop-blur-md rounded-[2rem] md:rounded-[2.5rem] p-1 md:p-2">
          <div className="bg-black rounded-[1.5rem] md:rounded-[2rem] aspect-[9/19.5] relative overflow-hidden">
            <div className="absolute inset-0 flex flex-col">
              <div className="h-4 md:h-6 bg-black flex justify-center">
                <div className="w-12 md:w-20 h-4 md:h-6 bg-black rounded-b-xl" />
              </div>
              <div className="flex-1 p-2 md:p-4">
                <div className="grid grid-cols-2 gap-1 md:gap-3">
                  {[Terminal, Database, Cloud, Shield].map((Icon, i) => (
                    <div key={i} className="bg-[#18CB96]/10 rounded-lg md:rounded-xl p-1 md:p-3 flex flex-col items-center">
                      <Icon className="w-4 h-4 md:w-6 md:h-6 text-[#18CB96] mb-1 md:mb-2" />
                      <div className="w-8 h-1 md:w-12 bg-[#18CB96]/30 rounded" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <FeaturePoint x="-20%" y="30%" label="Mobile-First Design" />
        <FeaturePoint x="120%" y="50%" label="Cross-Platform" />
      </div>
    </div>
  );
};

const AIFeatureCard = ({ feature }) => (
  <div className="bg-black/40 backdrop-blur-sm p-4 md:p-6 rounded-xl border border-[#18CB96]/20 hover:border-[#18CB96]/50 transform hover:scale-105 transition-all duration-300">
    <feature.icon className="w-8 h-8 md:w-12 md:h-12 text-[#18CB96] mb-4" />
    <h3 className="text-lg md:text-xl font-bold text-[#18CB96] mb-3">{feature.title}</h3>
    <p className="text-sm md:text-base text-gray-300 mb-4">{feature.description}</p>
    <div className="space-y-2">
      {feature.metrics.map((metric, index) => (
        <div key={index} className="flex items-center space-x-2">
          <Sparkles className="w-4 h-4 text-[#18CB96]" />
          <span className="text-xs md:text-sm text-gray-300">{metric}</span>
        </div>
      ))}
    </div>
  </div>
);

const TechCard = ({ icon: Icon, title, items }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="bg-black/40 backdrop-blur-sm p-4 md:p-6 rounded-xl border border-[#18CB96]/20 hover:border-[#18CB96]/50 transform hover:scale-105 transition-all duration-300">
        <Icon className="w-8 h-8 md:w-12 md:h-12 text-[#18CB96] mb-4" />
        <h3 className="text-[#18CB96] text-lg md:text-xl font-bold mb-3">{title}</h3>
        <ul className="space-y-2">
          {items.slice(0, 4).map((item) => (
            <li key={item} className="text-sm md:text-base text-gray-300 flex items-center space-x-2">
              <span className="w-1.5 h-1.5 bg-[#18CB96] rounded-full" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <button
          onClick={() => setIsModalOpen(true)}
          className="mt-4 flex items-center text-[#18CB96] hover:text-[#18CB96]/80 transition-colors text-sm md:text-base"
        >
          Learn More <ChevronRight className="w-4 h-4 ml-1" />
        </button>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={`${title} Technologies`}
        content={
          <div className="space-y-6">
            <p className="text-gray-300 text-sm md:text-base">
              Our comprehensive {title.toLowerCase()} stack enables us to build robust, 
              scalable solutions that meet modern enterprise needs.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {items.map((item) => (
                <div key={item} className="bg-black/50 p-3 md:p-4 rounded-lg border border-[#18CB96]/10">
                  <h4 className="text-[#18CB96] font-semibold mb-2 text-sm md:text-base">{item}</h4>
                  <p className="text-xs md:text-sm text-gray-400">
                    Enterprise-grade implementation with proven scalability and performance.
                  </p>
                </div>
              ))}
            </div>
          </div>
        }
      />
    </>
  );
};

function App() {
  const [isCompanyModalOpen, setIsCompanyModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-black" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 md:pt-20 pb-16 md:pb-32 relative z-10">
          <div className="animate-fade-in-up text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 animate-fade-in">
              <span className="text-[#18CB96] bg-clip-text animate-pulse">Our Services</span>
              <br />Pioneering SaaS Solutions
            </h1>
            <p className="text-base md:text-xl lg:text-2xl text-gray-300 mb-6 md:mb-8 px-4">
              At Kraf Technologies, we deliver cutting-edge Software-as-a-Service solutions 
              that transform B2B enterprises. We're not just solving today's challenges—we're 
              architecting tomorrow's possibilities.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4 px-4">
            <a href='/products'>
              <button className="w-full md:w-auto bg-[#18CB96] text-black px-6 py-2 md:px-8 md:py-3 rounded-full font-semibold hover:bg-[#18CB96]/90 transition-colors flex items-center justify-center group">
                Explore Our Solutions
                <ExternalLink className="w-4 h-4 md:w-5 md:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              </a>
              <button 
                onClick={() => setIsCompanyModalOpen(true)}
                className="w-full md:w-auto border border-[#18CB96] text-[#18CB96] px-6 py-2 md:px-8 md:py-3 rounded-full font-semibold hover:bg-[#18CB96]/10 transition-colors flex items-center justify-center"
              >
                About Us
                <Info className="w-4 h-4 md:w-5 md:h-5 ml-2" />
              </button>
            </div>
          </div>

          {/* Abstract Shapes */}
          <div className="absolute top-20 right-0 w-48 h-48 md:w-72 md:h-72 bg-[#18CB96]/10 rounded-full filter blur-3xl animate-pulse" />
          <div className="absolute bottom-10 left-4 md:left-10 w-32 h-32 md:w-48 md:h-48 bg-[#18CB96]/5 rounded-full filter blur-2xl animate-float" />
        </div>
      </div>

      {/* Project Showcase */}
      <div className="relative -mt-10 md:-mt-20 mb-10 md:mb-20">
        <ProjectShowcase />
      </div>

      {/* AI/ML Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
            Advanced AI & Machine Learning
          </h2>
          <p className="text-sm md:text-xl text-gray-300 max-w-3xl mx-auto">
            Leveraging cutting-edge artificial intelligence and machine learning technologies
            to deliver intelligent, scalable solutions for enterprise needs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {aiFeatures.map((feature, index) => (
            <AIFeatureCard key={index} feature={feature} />
          ))}
        </div>
      </div>

      {/* Technology Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <h2 className="text-2xl md:text-4xl font-bold text-white mb-8 md:mb-16 text-center">
          Our Technology Stack
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          <TechCard icon={Code2} title="Frontend" items={technologies.frontend} />
          <TechCard icon={Blocks} title="Backend" items={technologies.backend} />
          <TechCard icon={Cloud} title="Cloud & DevOps" items={technologies.cloud} />
          <TechCard icon={Brain} title="Data & AI" items={technologies.ai} />
          <TechCard icon={Database} title="Databases" items={technologies.database} />
          <TechCard icon={Shield} title="Security" items={technologies.security} />
        </div>
      </div>

      {/* Innovation Section */}
      <div className="relative bg-black/80 py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 md:mb-6">
                Fueling Innovation Through Technology
              </h2>
              <p className="text-gray-300 text-sm md:text-lg mb-4 md:mb-6">
                We leverage cutting-edge technologies to push the boundaries of what's possible. 
                Our solutions are built on a foundation of innovation, scalability, and 
                performance.
              </p>
              <div className="space-y-3 md:space-y-4">
                <div className="flex items-center space-x-3 p-3 md:p-4 bg-black/40 rounded-lg border border-[#18CB96]/20">
                  <Cpu className="w-6 h-6 md:w-8 md:h-8 text-[#18CB96]" />
                  <div>
                    <h3 className="text-[#18CB96] font-semibold text-sm md:text-base">Advanced AI Integration</h3>
                    <p className="text-xs md:text-sm text-gray-400">Powered by state-of-the-art machine learning</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 md:p-4 bg-black/40 rounded-lg border border-[#18CB96]/20">
                  <Globe2 className="w-6 h-6 md:w-8 md:h-8 text-[#18CB96]" />
                  <div>
                    <h3 className="text-[#18CB96] font-semibold text-sm md:text-base">Global Scale</h3>
                    <p className="text-xs md:text-sm text-gray-400">Enterprise-ready infrastructure worldwide</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative mt-8 md:mt-0">
              <img 
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000"
                alt="Technology Innovation"
                className="rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-500 w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Company Info Modal */}
      <Modal
        isOpen={isCompanyModalOpen}
        onClose={() => setIsCompanyModalOpen(false)}
        title="About Kraf Technologies"
        content={
          <div className="space-y-6 md:space-y-8">
            <div>
              <h4 className="text-[#18CB96] text-lg md:text-xl font-semibold mb-3">Our Mission</h4>
              <p className="text-gray-300 text-sm md:text-base">{companyInfo.mission}</p>
            </div>
            <div>
              <h4 className="text-[#18CB96] text-lg md:text-xl font-semibold mb-3">Our Vision</h4>
              <p className="text-gray-300 text-sm md:text-base">{companyInfo.vision}</p>
            </div>
            <div>
              <h4 className="text-[#18CB96] text-lg md:text-xl font-semibold mb-3">Our Values</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                {companyInfo.values.map((value) => (
                  <div key={value} className="flex items-center space-x-2">
                    <Check className="w-4 h-4 md:w-5 md:h-5 text-[#18CB96]" />
                    <span className="text-gray-300 text-sm md:text-base">{value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-[#18CB96] text-lg md:text-xl font-semibold mb-3">Our Expertise</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                {companyInfo.expertise.map((item) => (
                  <div key={item} className="bg-black/50 p-3 md:p-4 rounded-lg border border-[#18CB96]/10">
                    <p className="text-gray-300 text-sm md:text-base">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        }
      />
    </div>
  );
}

export default App;