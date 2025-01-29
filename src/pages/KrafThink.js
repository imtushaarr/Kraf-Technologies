import React, { useState } from "react";
import { Trophy, 
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
Laptop } from 'lucide-react';
import { motion } from "framer-motion";
import logo from "../assets/favicon.png";
import heroImage from "../assets/Serendale.png";
import avatar1 from "../assets/Avatar1.jpeg";
import avatar2 from "../assets/Avatar2.jpg";
import avatar3 from "../assets/Avatar3.jpeg";
import avatar4 from "../assets/Avatar4.JPG";
import tushar from '../assets/Avatar1.jpeg';
import animesh from '../assets/Avatar2.jpg';
import punnet from '../assets/Avatar3.jpeg';
import yash from '../assets/Avatar4.JPG'

const KrafThink = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <main>
        {/* Hero Section */}
        <section className="relative text-center py-16 bg-cover bg-center h-screen" style={{ backgroundImage: `url(${heroImage})` }}>
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative z-10 flex flex-col items-center justify-start h-full text-white px-4 pt-24 md:pt-32">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-9xl md:text-8xl font-medium mb-4 tracking-tighter"
            >
              Kraf Think 2025
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-emerald-300 text-xl md:text-2xl max-w-5xl mx-auto mb-8 leading-snug"
            >
              Empowering innovation, fostering collaboration, and transforming ideas into reality – join the Kraf Think 2025 Hackathon revolution!
            </motion.p>
            {/* Register Now Button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-emerald-500 hover:bg-emerald-600 text-black px-10 py-2 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 hover:text-white"
            >
              Coming Soon
            </motion.button>
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
              <a href="/kraf-think-2025">
                <span className="ml-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
                  Meet Our Team <span aria-hidden="true">&rarr;</span>
                </span>
              </a>
            </motion.div>
          </div>
        </section>

        {/* Enhanced About Section */}
      <section className="py-20 px-8 relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80"
            alt="Innovation Background"
            className="w-full h-full object-cover opacity-5"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black"></div>
        </div>
        <div className="max-w-6xl mx-auto relative">
          <h2 className="text-white text-5xl font-bold mb-2 text-center animate-on-scroll">About Kraf Think 2025</h2>
          <div className="w-40 h-1 bg-[#18CB96] mx-auto mb-6"></div>
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
                  <span>20+ Universities</span>
                </div>
                <div className="flex items-center gap-2 bg-[#18CB96]/10 px-4 py-2 rounded-lg">
                  <Trophy className="text-[#18CB96]" />
                  <span>₹10,000 in Prizes</span>
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
      <section className="py-20 px-8 bg-gradient-to-b from-black via-gray-900/50 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] opacity-5 bg-cover bg-center"></div>
        <div className="max-w-6xl mx-auto relative">
          <h2 className="text-white text-5xl font-bold mb-2 text-center animate-on-scroll">Prizes & Awards</h2>
          <div className="w-40 h-1 bg-[#18CB96] mx-auto mb-16"></div>
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
          <h2 className="text-white text-5xl font-bold mb-2 text-center animate-on-scroll">Event Timeline</h2>
          <div className="w-40 h-1 bg-[#18CB96] mx-auto mb-16"></div>
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

            {/* Platform & Venue Section */}
            <section className="py-10 px-8 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492571350019-22de08371fd3?auto=format&fit=crop&q=80')] opacity-5 bg-cover bg-fixed"></div>
        <div className="max-w-6xl mx-auto relative">
          <h2 className="text-white text-5xl font-bold mb-2 text-center animate-on-scroll">Event Details</h2>
          <div className="w-40 h-1 bg-[#18CB96] mx-auto mb-16"></div>
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

      {<section className="py-20 px-8 bg-white text-black rounded-t-[3rem] mt-10 mx-4">
  {/* Team Section */}
  <div className="max-w-6xl mx-auto relative">
    <h2 className="text-black text-5xl font-bold mb-2 text-center animate-on-scroll">Our Team</h2>
    <div className="w-40 h-1 bg-[#18CB96] mx-auto mb-16"></div>
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
      <TeamMember
        image={tushar}
        name="Tushar Gupta"
        role="Founder Of Kraf Technologies"
        bio="Former Google Tech Lead with 15+ years of experience in organizing tech events"
      />
      <TeamMember
        image={animesh}
        name="Animesh Upadhyay"
        role="Co-Founder Of Kraf Technologies"
        bio="AI/ML expert and startup founder with multiple successful exits"
      />
      <TeamMember
        image={punnet}
        name="Puneet"
        role="Co-Founder Of Kraf Technologies"
        bio="Community building expert with a focus on developer relations"
      />
      <TeamMember
        image={yash}
        name="Yash Singh"
        role="Co-Founder Of Kraf Technologies"
        bio="Serial entrepreneur and tech evangelist with global event experience"
      />
    </div>
  </div>
  <div className="border-t border-gray-400 mt-20 text-center"></div>
  {/* Contact Section */}
  <div className="relative z-10 bg-white text-black rounded-t-[3rem] mt-10 mx-4">
    <div className="container mx-auto px-4 md:px-6 py-10">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to showcase your skills and ideas to the world? Join us at Kraf Think 2025
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
    </div>
  </div>
</section>
}
      </main>
    </div>
  );
};


function PrizeCard({ icon, title, amount, color, items = [] }) {
  return (
    <div className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-emerald-400/30 transition-all">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className={`text-2xl font-bold text-center mb-4 text-${color}-400`}>{title}</h3>
      <p className={`text-4xl font-bold text-center mb-6 text-${color}-500`}>{amount}</p>
      <ul className="space-y-2 text-gray-300">
        {items.length > 0 ? (
          items.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              <span className={`w-2 h-2 bg-${color}-400 rounded-full`}></span>
              {item}
            </li>
          ))
        ) : (
          <li>No items available</li> // Handle case when items are empty
        )}
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

export default KrafThink;