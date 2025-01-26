import React, { useState } from "react";
import { Trophy, Award, Medal } from 'lucide-react';
import { motion } from "framer-motion";
import logo from "../assets/favicon.png";
import heroImage from "../assets/Serendale.png";
import avatar1 from "../assets/Avatar1.jpeg";
import avatar2 from "../assets/Avatar2.jpg";
import avatar3 from "../assets/Avatar3.jpeg";
import avatar4 from "../assets/Avatar4.JPG";

const KrafThink = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm">
        <div className="flex items-center justify-between p-4 lg:px-8 max-w-7xl mx-auto">
          <a href="/" className="flex items-center gap-2">
            <img src={logo} alt="KrafThink Logo" className="h-6 w-auto" />
            <span className="font-semibold text-xl tracking-tight">KRAFTHINK</span>
          </a>
          <div className="hidden md:flex items-center gap-8">
            <a href="/" className="text-sm hover:text-emerald-400 transition-colors">
              Home
            </a>
            <a href="/kraf-think-2025/about" className="text-sm hover:text-emerald-400 transition-colors">
              About Us
            </a>
            <a href="#" className="text-sm hover:text-emerald-400 transition-colors">
              Our Team
            </a>
            <a href="#" className="text-sm hover:text-emerald-400 transition-colors">
              Contact
            </a>
          </div>
          <button className="bg-emerald-400 hover:bg-emerald-500 text-black rounded-full px-6 py-1.5 text-sm font-normal transition-colors hidden md:block">
            Apply With Unstop
          </button>
          <button className="md:hidden text-white" onClick={toggleMenu}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/90 p-4">
            <a href="/" className="block text-sm hover:text-emerald-400 transition-colors py-2">
              Home
            </a>
            <a href="/kraf-think-2025/about" className="block text-sm hover:text-emerald-400 transition-colors py-2">
              About Us
            </a>
            <a href="/kraf-think-2025/our-team" className="block text-sm hover:text-emerald-400 transition-colors py-2">
              Our Team
            </a>
            <a href="contact-us" className="block text-sm hover:text-emerald-400 transition-colors py-2">
              Contact
            </a>
            <button className="bg-emerald-400 hover:bg-emerald-500 text-black rounded-full px-6 py-1.5 text-sm font-normal transition-colors w-full mt-2">
              Apply With Unstop
            </button>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section className="relative text-center py-8 bg-cover bg-center h-screen" style={{ backgroundImage: `url(${heroImage})` }}>
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-7xl font-normal mb-6"
            >
              #KrafThink2025
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-emerald-400 text-lg md:text-xl max-w-4xl mx-auto"
            >
              Code Like a God, Innovate Like a Sage, and Conquer Challenges—Unleash Your Divine Potential!
            </motion.p>
          </div>
          <div className="relative mt-12 max-w-6xl mx-auto">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-4 h-4 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  background: i % 2 === 0 ? "#9333ea" : "#60a5fa",
                }}
                animate={{
                  y: [0, -20, 0],
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: i * 0.3,
                }}
              />
            ))}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="absolute bottom-8 left-8 flex items-center"
            >
              <div className="flex -space-x-2">
                <img src={avatar1} alt="Avatar 1" className="w-10 h-10 rounded-full border-2 border-black object-cover" />
                <img src={avatar2} alt="Avatar 2" className="w-10 h-10 rounded-full border-2 border-black object-cover" />
                <img src={avatar3} alt="Avatar 3" className="w-10 h-10 rounded-full border-2 border-black object-cover" />
                <img src={avatar4} alt="Avatar 4" className="w-10 h-10 rounded-full border-2 border-black object-cover" />
              </div>
              <a href="/kt-about">
                <span className="ml-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
                  Meet Our Team <span aria-hidden="true">&rarr;</span>
                </span>
              </a>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <div className="relative z-20 bg-gradient-to-b from-black to-purple-900/10">
          <div className="container mx-auto px-4 md:px-8 py-24">
            <div className="flex flex-col md:flex-row justify-between items-start gap-8 md:gap-16">
              <div className="md:w-1/2">
                <h3 className="text-xl text-white font-medium mb-4">ABOUT KRAFTHINK</h3>
                <h2 className="text-3xl md:text-5xl font-semibold mb-6">What's the vibe at KrafThink?</h2>
              </div>
              <div className="md:w-1/2">
                <p className="text-gray-300 leading-relaxed text-sm">
                  We're about creating real solutions to real-world problems. With a focus on creativity,
                  collaboration, and cutting-edge tools, we make sure your KrafThink experience is
                  unforgettable (and insta-worthy).
                </p>
                <button className="mt-8 text-emerald-400 hover:text-emerald-300 transition-colors flex items-center space-x-2 group">
                  <span>More About Us</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Information Section */}
        <div className="relative z-20">
          <div className="container mx-auto px-4 md:px-8 py-16">
            <h3 className="text-xl text-white font-semibold mb-3">DETAIL INFORMATION ABOUT <br /> KRAFTHINK</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <InfoCard
                title="Workshops and Mentorship"
                description="Unlock the power of hands-on learning through expert-led workshops, guiding participants to transform ideas into reality."
              />
              <InfoCard
                title="Problem-Solving Challenges"
                description="Tackle real-world challenges and develop innovative solutions through our carefully crafted problem-solving scenarios."
              />
              <InfoCard
                title="Networking and Collaboration"
                description="Connect with like-minded innovators and industry experts to build lasting relationships and expand your professional network."
              />
              <InfoCard
                title="Prizes and Recognition"
                description="Get rewarded for your innovation and creativity with exciting prizes, certificates, and industry recognition."
              />
            </div>
          </div>
        </div>

        {/* Prize Section */}
        <div className="bg-black text-white py-16">
          <section className="container mx-auto px-4 md:px-8">
            <h2 className="text-2xl font-bold mb-8">Prizes & Rewards</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* First Prize */}
              <PrizeCard
                icon={<Trophy className="w-8 h-8 text-yellow-400" />}
                title="First Prize"
                amount="₹5,000"
                color="yellow"
                items={[
                  "Work With Kraf Team opportunities",
                  "₹500 Krafcool Coupan",
                  "Goodies",
                ]}
              />
              {/* Second Prize */}
              <PrizeCard
                icon={<Award className="w-8 h-8 text-slate-400" />}
                title="Second Prize"
                amount="₹3,000"
                color="slate"
                items={[
                  "₹100 Krafcool Coupan",
                  "Kraf Team Mentorship",
                  "Goodies"
                ]}
              />
              {/* Third Prize */}
              <PrizeCard
                icon={<Medal className="w-8 h-8 text-orange-400" />}
                title="Third Prize"
                amount="₹2,000"
                color="orange"
                items={[
                  "₹50 Krafcool Coupan",
                  "Kraf Team Mentorship",
                  "Goodies"
                ]}
              />
            </div>
          </section>
        </div>

        {/* Event Details */}
        <div className="relative z-20">
          <div className="container mx-auto px-4 md:px-8 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <EventDetail title="Location" value="Chandigarh University" />
              <EventDetail title="Registration" value="Unstop Platform" />
              <EventDetail title="Process Start" value="15 Feb 2025" />
              <EventDetail title="Result Date" value="05 March 2025" />
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="relative z-20 bg-white text-black rounded-t-[3rem] mt-10 mx-4">
          <div className="container mx-auto px-4 md:px-6 py-10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="md:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to showcase your skills and ideas to the world? Join us at KrafThink
                </h2>
              </div>
              <div className="md:w-1/2 text-center md:text-right">
                <p className="mb-4 text-gray-600 text-lg">
                  Get in touch and become part of the innovation revolution
                </p>
                <p className="text-gray-600 mb-8 text-lg">info@kraftechnologies.com</p>
                <button className="bg-emerald-400 text-black px-10 py-3 rounded-full text-sm font-normal hover:bg-emerald-500 transition-all">
                  Contact Us
                </button>
              </div>
            </div>
            <div className="mt-16 pt-8 border-t border-gray-200 text-center text-sm text-gray-900">
              Created By{" "}
              <a href="https://linkedin.com/in/imtushaarr" target="_blank" rel="noopener noreferrer">
                <span className="hover:text-[#18CB96] cursor-pointer">@imtushaarr</span>
              </a>{" "}
              X{" "}
              <a href="https://www.linkedin.com/company/kraftechnology/?viewAsMember=true" target="_blank" rel="noopener noreferrer">
                <span className="hover:text-[#18CB96] cursor-pointer">@kraftechnology</span>
                <span>.</span>
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

function InfoCard({ title, description }) {
  return (
    <div className="group p-6 md:p-8 rounded-xl bg-white/5 hover:bg-white/10 transition-all cursor-pointer backdrop-blur-sm border border-white/10">
      <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-white/10 to-white/5 mb-6 md:mb-8 group-hover:scale-110 transition-transform" />
      <h3 className="text-lg md:text-xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-400 text-sm md:text-base leading-relaxed">{description}</p>
    </div>
  );
}

function PrizeCard({ icon, title, amount, color, items }) {
  return (
    <div className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-emerald-400/30 transition-all">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className={`text-2xl font-bold text-center mb-4 text-${color}-400`}>{title}</h3>
      <p className={`text-4xl font-bold text-center mb-6 text-${color}-500`}>{amount}</p>
      <ul className="space-y-2 text-gray-300">
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            <span className={`w-2 h-2 bg-${color}-400 rounded-full`}></span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function EventDetail({ title, value }) {
  return (
    <div className="text-center">
      <h3 className="text-emerald-400 text-2xl font-medium mb-3">{title}</h3>
      <p className="text-sm font-normal">{value}</p>
    </div>
  );
}

export default KrafThink;