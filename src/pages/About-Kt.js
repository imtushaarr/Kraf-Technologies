import React, { useState } from 'react';
import { 
  Trophy, 
  Award, 
  Medal, 
  Calendar, 
  Mail, 
  MapPin, 
  Send, 
  Users, 
  Code, 
  Presentation as FilePresentation, 
  Timer, 
  Github, 
  Globe, 
  Gift, 
  Target, 
  Rocket, 
  Zap, 
  Building2, 
  Cpu, 
  Brain, 
  Lightbulb, 
  Laptop 
} from 'lucide-react';
import { motion } from "framer-motion";
import logo from "../assets/favicon.png";
import tushar from '../assets/Avatar1.jpeg';
import animesh from '../assets/Avatar2.jpg';
import punnet from '../assets/Avatar3.jpeg';
import yash from '../assets/Avatar4.JPG'

function AboutKt() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm">
        <div className="flex items-center justify-between p-4 lg:px-8 max-w-7xl mx-auto">
          <a href="/" className="flex items-center gap-2">
            <img src={logo} alt="KrafThink Logo" className="h-6 w-auto" />
            <span className="font-semibold text-xl tracking-tight">KRAFTHINK</span>
          </a>
          <div className="hidden md:flex items-center gap-8">
            <a href="/kraf-think-2025" className="text-sm hover:text-emerald-400 transition-colors">
              Home
            </a>
            <a href="/kraf-think-2025/about" className="text-sm hover:text-emerald-400 transition-colors">
              About Us
            </a>
            <a href="/kraf-think-2025/about" className="text-sm hover:text-emerald-400 transition-colors">
              Our Team
            </a>
            <a href="/contact-  us" className="text-sm hover:text-emerald-400 transition-colors">
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
            <a href="/kraf-think-2025" className="block text-sm hover:text-emerald-400 transition-colors py-2">
              Home
            </a>
            <a href="/kraf-think-2025/about" className="block text-sm hover:text-emerald-400 transition-colors py-2">
              About Us
            </a>
            <a href="/kraf-think-2025/about" className="block text-sm hover:text-emerald-400 transition-colors py-2">
              Our Team
            </a>
            <a href="/contact-us" className="block text-sm hover:text-emerald-400 transition-colors py-2">
              Contact
            </a>
            <button className="bg-emerald-400 hover:bg-emerald-500 text-black rounded-full px-6 py-1.5 text-sm font-normal transition-colors w-full mt-2">
              Apply With Unstop
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80"
            alt="Hackathon Background"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black"></div>
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <div className="flex items-center justify-center gap-3 mb-6 animate-fade-in">
            <span className="text-xl font-semibold">Organized by</span>
          </div>
          <div className="flex items-center justify-center gap-2 mb-8 animate-slide-up">
            <div className="text-xl font-normal text-white">KRAFCOOL</div>
            <div className="text-xl text-white">X</div>
            <div className="text-xl font-normal text-white">KRAF TECHNOLOGIES</div>
          </div>
          <h1 className="text-[#18CB96] text-8xl font-semibold mb-6 animate-fade-in bg-clip-text text-transparent bg-gradient-to-r from-[#18CB96] to-[#13A87D]">
            KrafThink 2025
          </h1>
          <div className="flex flex-wrap justify-center gap-8 text-lg animate-slide-up delay-200">
            <div className="flex items-center gap-2 bg-black/30 px-6 py-3 rounded-full backdrop-blur-sm border border-[#18CB96]/20 hover:border-[#18CB96]/50 transition-all duration-300">
              <Calendar className="text-[#18CB96]" />
              <span>Feb 15 to March 05, 2024</span>
            </div>
            <div className="flex items-center gap-2 bg-black/30 px-6 py-3 rounded-full backdrop-blur-sm border border-[#18CB96]/20 hover:border-[#18CB96]/50 transition-all duration-300">
              <MapPin className="text-[#18CB96]" />
              <span>Chandigarh University</span>
            </div>
            <div className="flex items-center gap-2 bg-black/30 px-6 py-3 rounded-full backdrop-blur-sm border border-[#18CB96]/20 hover:border-[#18CB96]/50 transition-all duration-300">
              <Globe className="text-[#18CB96]" />
              <span>Hybrid Event</span>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
      </div>

      {/* Enhanced About Section */}
      <section className="py-10 px-8 relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80"
            alt="Innovation Background"
            className="w-full h-full object-cover opacity-5"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black"></div>
        </div>
        <div className="max-w-6xl mx-auto relative">
          <h2 className="text-white text-5xl font-bold mb-8 text-center animate-on-scroll">About KrafThink 2025</h2>
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="space-y-6 animate-on-scroll">
              <p className="text-xl text-gray-300 leading-relaxed text-justify">
              KrafThink 2025 is Kraf Technologies premier hackathon, bringing together over 500 innovators, developers, and creative minds from across the globe. This 36-hour intensive coding competition pushes the boundaries of technology and innovation.
              </p>
              <p className="text-xl text-gray-300 leading-relaxed text-justify">
                Organized by industry leaders Krafcool and Kraf Technologies, this event offers participants the unique opportunity to transform their groundbreaking ideas into working prototypes while competing for substantial prizes and networking with industry experts.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <div className="flex items-center gap-2 bg-[#18CB96]/10 px-4 py-2 rounded-lg">
                  <Users className="text-[#18CB96]" />
                  <span>500+ Participants</span>
                </div>
                <div className="flex items-center gap-2 bg-[#18CB96]/10 px-4 py-2 rounded-lg">
                  <Globe className="text-[#18CB96]" />
                  <span>20+ Countries</span>
                </div>
                <div className="flex items-center gap-2 bg-[#18CB96]/10 px-4 py-2 rounded-lg">
                  <Trophy className="text-[#18CB96]" />
                  <span>$17,500 in Prizes</span>
                </div>
              </div>
            </div>
            <div className="relative group animate-on-scroll">
              <img 
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80"
                alt="Hackathon Collaboration"
                className="rounded-xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
            <ThemeCard
              icon={<Cpu className="w-8 h-8" />}
              title="AI & Machine Learning"
              description="Develop cutting-edge AI solutions and ML models"
            />
            <ThemeCard
              icon={<Globe className="w-8 h-8" />}
              title="Web3 & Blockchain"
              description="Create decentralized applications and smart contracts"
            />
            <ThemeCard
              icon={<Brain className="w-8 h-8" />}
              title="Healthcare Tech"
              description="Innovate in digital health and medical technology"
            />
            <ThemeCard
              icon={<Laptop className="w-8 h-8" />}
              title="Climate Tech"
              description="Build solutions for environmental sustainability"
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative group animate-on-scroll order-2 lg:order-1">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
                alt="Team Collaboration"
                className="rounded-xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="space-y-6 animate-on-scroll order-1 lg:order-2">
              <h3 className="text-3xl font-bold text-white">Why Participate?</h3>
              <ul className="space-y-4">
                <WhyParticipateItem
                  icon={<Lightbulb className="w-6 h-6" />}
                  title="Innovation Platform"
                  description="Access to cutting-edge tools, APIs, and technologies to bring your ideas to life"
                />
                <WhyParticipateItem
                  icon={<Users className="w-6 h-6" />}
                  title="Networking"
                  description="Connect with industry leaders, mentors, and fellow innovators"
                />
                <WhyParticipateItem
                  icon={<Target className="w-6 h-6" />}
                  title="Career Growth"
                  description="Opportunities for internships and full-time positions with leading tech companies"
                />
                <WhyParticipateItem
                  icon={<Trophy className="w-6 h-6" />}
                  title="Amazing Prizes"
                  description="Win from a prize pool of $17,500 and additional perks worth over $50,000"
                />
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Prize Section */}
      <section className="py-32 px-8 bg-gradient-to-b from-black via-gray-900/50 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] opacity-5 bg-cover bg-center"></div>
        <div className="max-w-6xl mx-auto relative">
          <h2 className="text-white text-5xl font-bold mb-16 text-center animate-on-scroll">Prizes & Awards</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <PrizeCard
              icon={<Trophy className="w-12 h-12" />}
              place="1st Place"
              prize="$10,000"
              perks={[
                'Direct VC Pitch Opportunity',
                'AWS Credits worth $5,000',
                '1-Year Business Mentorship',
                'Featured at Krafcool Tech Summit'
              ]}
            />
            <PrizeCard
              icon={<Award className="w-12 h-12" />}
              place="2nd Place"
              prize="$5,000"
              perks={[
                'Startup Incubator Access',
                'AWS Credits worth $3,000',
                '6-Month Business Mentorship',
                'Kraf Technologies Internship'
              ]}
            />
            <PrizeCard
              icon={<Gift className="w-12 h-12" />}
              place="3rd Place"
              prize="$2,500"
              perks={[
                'Networking Event Access',
                'AWS Credits worth $1,000',
                '3-Month Business Mentorship',
                'Tech Workshop Access'
              ]}
            />
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-10 px-8 bg-black relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-white text-5xl font-bold mb-16 text-center animate-on-scroll">Event Timeline</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TimelineCard 
              icon={<Users />}
              title="Registration Opens"
              date="February 15, 2024"
              description="Early bird registration begins with team formation"
            />
            <TimelineCard 
              icon={<Github />}
              title="Project Submission"
              date="March 15, 2024"
              description="Submit your project proposal and team details"
            />
            <TimelineCard 
              icon={<FilePresentation />}
              title="PPT Presentation"
              date="March 20, 2024"
              description="Present your initial concept and implementation plan"
            />
            <TimelineCard 
              icon={<Code />}
              title="36-Hour Coding Round"
              date="March 25-26, 2024"
              description="Intense coding sprint to bring your ideas to life"
            />
            <TimelineCard 
              icon={<Send />}
              title="Prototype Submission"
              date="March 26, 2024 (11:59 PM PST)"
              description="Submit your working prototype for evaluation"
            />
            <TimelineCard 
              icon={<Trophy />}
              title="Final Results"
              date="March 30, 2024"
              description="Winners announcement and prize distribution ceremony"
            />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-32 px-8 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative">
          <h2 className="text-white text-5xl font-bold mb-16 text-center animate-on-scroll">Our Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            <TeamMember 
              image={tushar}
              name="Tushar Gupta"
              role="Team KT"
              bio="Former Google Tech Lead with 15+ years of experience in organizing tech events"
            />
            <TeamMember 
              image={animesh}
              name="Animesh Upadhyay"
              role="Team KT"
              bio="AI/ML expert and startup founder with multiple successful exits"
            />
            <TeamMember 
              image={punnet}
              name="Puneet"
              role="Team KT"
              bio="Community building expert with a focus on developer relations"
            />
            <TeamMember 
              image={yash}
              name="Yash Singh"
              role="Team KT"
              bio="Serial entrepreneur and tech evangelist with global event experience"
            />
          </div>
        </div>
      </section>

      {/* Platform & Venue Section */}
      <section className="py-10 px-8 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492571350019-22de08371fd3?auto=format&fit=crop&q=80')] opacity-5 bg-cover bg-fixed"></div>
        <div className="max-w-6xl mx-auto relative">
          <h2 className="text-white text-5xl font-bold mb-16 text-center animate-on-scroll">Event Details</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-black/50 p-8 rounded-xl border border-[#18CB96]/20 backdrop-blur-sm hover:border-[#18CB96]/50 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-6 text-white/8">Venue Information</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="text-[#18CB96] mt-1" />
                  <div>
                    <p className="font-semibold">Chandigarh University</p>
                    <p className="text-gray-400">2000 Innovation Drive</p>
                    <p className="text-gray-400">Ludhiana Highway, Mohali, Punjab</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="text-[#18CB96]" />
                  <p>March 25-26, 2024 (9:00 AM PST Start)</p>
                </div>
              </div>
            </div>
            <div className="bg-black/50 p-8 rounded-xl border border-[#18CB96]/20 backdrop-blur-sm hover:border-[#18CB96]/50 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-6 text-white/8">Virtual Platform</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Globe className="text-[#18CB96] mt-1" />
                  <div>
                    <p className="font-semibold">HackEdge</p>
                    <p className="text-gray-400">Team collaboration via Discord</p>
                    <p className="text-gray-400">Presentations and workshops via Zoom</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Code className="text-[#18CB96]" />
                  <p>GitHub for project submissions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Added Snippet */}
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
    </div>
  );
}

function TimelineCard({ icon, title, date, description }) {
  return (
    <div className="bg-gray-900/50 p-8 rounded-xl hover:transform hover:scale-105 transition-all duration-300 border border-[#18CB96]/10 hover:border-[#18CB96]/30 backdrop-blur-sm group">
      <div className="text-[#18CB96] mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">{icon}</div>
      <h3 className="text-xl font-bold mb-2 text-center">{title}</h3>
      <p className="text-[#18CB96] text-sm mb-4 text-center">{date}</p>
      <p className="text-gray-400 text-center">{description}</p>
    </div>
  );
}

function TeamMember({ image, name, role, company, bio }) {
  return (
    <div className="group">
      <div className="relative mb-6">
        <div className="aspect-square overflow-hidden rounded-2xl">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
            <p className="text-sm text-gray-300">{bio}</p>
          </div>
        </div>
        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-[#18CB96] text-black px-4 py-1 rounded-full text-sm font-medium">
          {company}
        </div>
      </div>
      <div className="text-center">
        <h3 className="text-xl font-bold mb-1">{name}</h3>
        <p className="text-[#18CB96]">{role}</p>
      </div>
    </div>
  );
}

function PrizeCard({ icon, place, prize, perks }) {
  return (
    <div className="bg-gray-900/50 p-8 rounded-xl border border-[#18CB96]/20 hover:border-[#18CB96]/50 transition-all duration-300 backdrop-blur-sm group">
      <div className="text-[#18CB96] mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">{icon}</div>
      <h3 className="text-2xl font-bold mb-2 text-center">{place}</h3>
      <p className="text-[#18CB96] text-4xl font-bold mb-8 text-center">{prize}</p>
      <ul className="space-y-4">
        {perks.map((perk, index) => (
          <li key={index} className="flex items-center gap-3 text-gray-300">
            <div className="w-1.5 h-1.5 rounded-full bg-[#18CB96]"></div>
            {perk}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ThemeCard({ icon, title, description }) {
  return (
    <div className="bg-gradient-to-br from-[#18CB96]/10 to-transparent p-6 rounded-xl border border-[#18CB96]/20 hover:border-[#18CB96]/50 transition-all duration-300 group animate-on-scroll">
      <div className="text-[#18CB96] mb-4 group-hover:scale-110 transition-transform duration-300">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}

function WhyParticipateItem({ icon, title, description }) {
  return (
    <li className="flex gap-4 items-start p-4 rounded-lg bg-[#18CB96]/5 hover:bg-[#18CB96]/10 transition-colors duration-300">
      <div className="text-[#18CB96] mt-1">{icon}</div>
      <div>
        <h4 className="font-semibold mb-1">{title}</h4>
        <p className="text-gray-400">{description}</p>
      </div>
    </li>
  );
}

export default AboutKt;