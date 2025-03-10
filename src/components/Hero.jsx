import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const heroContent = [
  {
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Crafting Scalable & Secure Digital Solutions",
    description: "We create scalable, secure digital solutions, including SaaS applications, AI-driven automation, and enterprise software for businesses, educational institutions, and fintech startups, ensuring seamless efficiency and innovation.",
  },
  {
    image: "https://images.unsplash.com/photo-1712062403111-978e36b01d1c?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Innovating the Future of B2B Software Solutions",
    description: "Kraf Technologies specializes in developing cutting-edge B2B software solutions, helping businesses scale with AI-powered tools, SaaS platforms, and enterprise applications for startups, universities, and large organizations.",
  },
  {
    image: "https://images.unsplash.com/photo-1637073849667-91120a924221?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Building Long-Term Success with Industry Leaders",
    description: "We work with universities, tech startups, and corporate enterprises, delivering customized digital solutions that enhance operations, drive efficiency, and support innovation across various industries.",
  },
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % heroContent.length);
        setIsTransitioning(false);
      }, 500);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentContent = heroContent[currentIndex];

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div className={`absolute inset-0 transition-opacity duration-1000 ${isTransitioning ? "opacity-0" : "opacity-100"}`}>
        <img 
          src={currentContent.image} 
          alt="Hero background" 
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/30" />
      </div>

      <div className="relative z-10 flex h-full flex-col justify-center px-4 sm:px-6 md:px-12 lg:px-16 text-white">
        <div 
          className={`w-full max-w-4xl mx-auto transition-all duration-1000 ${
            isTransitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
          }`}
        >
          <h1 className="mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold w-full leading-tight">
            {currentContent.title}
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl w-full">
            {currentContent.description}
          </p>
        </div>
      </div>

      {/* Scroll Down Icon */}
      <div className="absolute bottom-8 sm:bottom-12 md:bottom-16 left-1/2 z-20 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-6 w-6 sm:h-8 sm:w-8 text-[#18CB96]" />
      </div>
    </div>
  );
}