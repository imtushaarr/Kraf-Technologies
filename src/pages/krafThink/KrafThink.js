import React, { useState, useEffect } from "react";
import { FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Trophy, 
Award, 
Calendar, 
MapPin, 
Send, 
Users, 
Code, 
Presentation as FilePresentation, 
Github, 
Globe, 
Gift, 
Target,
Cpu, 
Brain, 
Lightbulb, 
Laptop } from 'lucide-react';
import { motion } from "framer-motion";
import heroImage from "../../assets/Serendale.png";
import tushar from "../../assets/founders/tushar.JPG";
import animesh from '../../assets/founders/animesh.JPG';
import punnet from '../../assets/founders/puneet.JPG';
import yash from '../../assets/founders/yash.JPG';
import {useNavigate} from "react-router-dom";
import sonu from '../../assets/sonu.png';
import tarveen from "../../assets/tarveen.jpg";
import { Helmet } from "react-helmet";

const KrafThink = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
            <Helmet>
              <title>Kraf Think 2025 Hackathon - Kraf Technologies</title>
              <meta name="description" content="Join the biggest premier Hackathon, Kraf Think 2025, organized by Kraf Technologies." />
              <meta name="keywords" content="Hackathon, IT solutions, Kraf Think 2025, AI, Blockchain, SaaS, kt, kraftechnologies" />
              <meta property="og:title" content="Kraf Think 2025 Hackathon" />
              <meta property="og:description" content="Empowering innovation and collaboration at Chandigarh University." />
              <meta property="og:image" content="https://kraftechnologies.com/og-image.jpg" />
              <meta property="og:url" content="https://kraftechnologies.com/kraf-think-2025/" />
              <link rel="canonical" href="https://kraftechnologies.com/kraf-think-2025/" />
            </Helmet>
      <main>
        {/* Hero Section */}
        <section className="relative text-center md:py-16 bg-cover bg-center h-screen" style={{ backgroundImage: `url(${heroImage})` }}>
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative z-10 flex flex-col items-center justify-start h-full text-white px-4 pt-8 sm:pt-4 md:pt-32">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-6xl md:text-8xl font-medium mb-4 tracking-tighter"
            >
              Kraf Think 2025 Hackathon
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-[#18CB96] max-w-3xl mb-12 animate-fade-in-delay-1 leading-relaxed"
            >
              Empowering innovation, fostering collaboration, and transforming ideas into reality – join the Kraf Think 2025 Hackathon revolution!
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
              className="absolute bottom-32 md:bottom-24 left-8 flex items-center"
            >
              <div className="flex -space-x-2">
                  <img src={tushar} alt="Avatar 1" className="w-10 h-10 rounded-full border-2 border-black object-cover" />
                  <img src={animesh} alt="Avatar 2" className="w-10 h-10 rounded-full border-2 border-black object-cover" />
                  <img src={punnet} alt="Avatar 3" className="w-10 h-10 rounded-full border-2 border-black object-cover" />
                  <img src={yash} alt="Avatar 4" className="w-10 h-10 rounded-full border-2 border-black object-cover" />
              </div>
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
              Kraf Think 2025 is Kraf Technologies premier hackathon, bringing together over 500 innovators, developers, and creative minds from across the globe. An exciting coding competition designed to test creativity, problem-solving, and innovation in technology.
              </p>
              <p className="text-xl text-gray-300 leading-relaxed text-justify">
                Organized by industry leaders Krafcool and Kraf Technologies, this event offers participants the unique opportunity to transform their groundbreaking ideas into working softwares while competing for substantial prizes and networking with industry experts.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <div className="flex items-center gap-2 bg-[#18CB96]/10 px-4 py-2 rounded-lg">
                  <Users className="text-[#18CB96]" />
                  <span>500+ Participants</span>
                </div>
                <div className="flex items-center gap-2 bg-[#18CB96]/10 px-4 py-2 rounded-lg">
                  <Globe className="text-[#18CB96]" />
                  <span>Chandigarh University</span>
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
              description="Develop cutting-edge AI and ML models to solve real-world challenges and drive innovation"
            />
            <ThemeCard
              icon={<Globe className="w-8 h-8" />}
              title="Blockchain & Web3 Development"
              description="Create decentralized applications and smart contracts that solve real-world challenges in security and transparency."
            />
            <ThemeCard
              icon={<Brain className="w-8 h-8" />}
              title="FinTech & Smart Solutions"
              description="Build transformative solutions in FinTech that solve real-world challenges in finance and sustainability."
            />
            <ThemeCard
              icon={<Laptop className="w-8 h-8" />}
              title="Open Innovation"
              description="Bring your unique ideas to the table, leveraging AI, Blockchain, and Full Stack Development to solve real-world challenges."
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
                  title="Grand Prizes"
                  description="Win from a prize pool of &#8377;10,000 and additional perks"
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
              title="Winner"
              amount="&#8377;5K"
              items={[
                'Internship Opportunity at Kraf Technologies',
                'Get 50% off vouchers for Krafcool',
                'Certificates from Chandigarh University & Kraf Technologies',
              ]}
            />
            <PrizeCard
              icon={<Award className="w-12 h-12" />}
              title="1st Runner-Up"
              amount="&#8377;3K"
              items={[
                'Internship Opportunity at Kraf Technologies',
                'Get 30% off vouchers for Krafcool',
                'Certificates from Chandigarh University & Kraf Technologies',
                
              ]}
            />
            <PrizeCard
              icon={<Gift className="w-12 h-12" />}
              title="2nd Runner-Up"
              amount="&#8377;2K"
              items={[
                'One-on-One Meeting with Our Industrial Members',
                'Get 20% off vouchers for Krafcool',
                'Certificates from Chandigarh University & Kraf Technologies',
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
              title="Registrations"
              date="February 04 to 18, 2025"
              description="Early bird registration begins with team formation at Kraf Technology"
            />
            <TimelineCard 
              icon={<Github />}
              title="PPT Submissions"
              date="February 22 to 24, 2025"
              description="Submit your project's presentaion at KrafX-Q1"
            />
            <TimelineCard 
              icon={<FilePresentation />}
              title="Presentation Result" 
              date="February 26, 2025"
              description="Result will be declared at KrafX-Q1 and top 20 teams will move to next phase"
            />
            <TimelineCard 
              icon={<Send />}
              title="Mentoring Session"
              date="February 28, 2025"
              description="We will provide ideas to enhance and improve your project at KrafX-Q1 Platform"
            />
            <TimelineCard 
              icon={<Code />}
              title="Code Submission"
              date="March 02, 2025"
              description="Intense coding to bring your ideas to life and submission of project at KrafX-Q1"
            />
            <TimelineCard 
              icon={<Trophy />}
              title="Grand Finale"
              date="March 06, 2025"
              description="Winners announcement and prize distribution ceremony at D-7 Block, Seminar Hall Chandigarh University"
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
                    <p className="font-semibold">D-7 Block, Seminar Hall, Chandigarh University</p>
                    {/* <p className="text-gray-400">2000 Innovation Drive</p> */}
                    <p className="text-gray-400">NH05, Chandigarh-Ludhiana Highway, Gharuan, Mohali, Punjab, India</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="text-[#18CB96]" />
                  <p>March 06, 2025 (9:30 AM IST Start)</p>
                </div>
              </div>
            </div>
            <div className="bg-black/50 p-8 rounded-xl border border-[#18CB96]/20 backdrop-blur-sm hover:border-[#18CB96]/50 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-6 text-white/8">Platform</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Globe className="text-[#18CB96] mt-1" />
                  <div>
                    <p className="font-semibold">Kraf Technology KrafX-Q1 Platform</p>
                    <p className="text-gray-400">Team registration, presentations, and mentoring sessions conducted by Kraf Technologies and Chandigarh University.</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  {/* <Code className="text-[#18CB96]" /> */}
                  {/* <p>GitHub for project submissions</p> */}
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
              <EventDetail title="Register" value="At Kraf Technologies" />
              <EventDetail title="Registration Start" value="04 February 2025" />
              <EventDetail title="Grand Finale" value="06 March 2025" />
            </div>
          </div>
        </div>

      {<section className="py-20 px-8 bg-white text-black rounded-t-[3rem] mt-10 mx-4">
  {/* Team Section */}
  <div className="max-w-4xl mx-auto relative">
  <h2 className="text-black text-5xl font-bold mb-2 text-center animate-on-scroll">
    Meet Our Team
  </h2>
  <div className="w-40 h-1 bg-[#18CB96] mx-auto mb-16"></div>

  {/* Team Members Grid */}
  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
    {/* Team Member 1 */}
    <TeamMember
      image={tushar}
      name="Tushar Gupta"
      role="Founder & Lead Developer"
      bio="Software Developer skilled in designing, developing, and optimizing scalable applications across various platforms and technologies."
      linkedin="https://www.linkedin.com/in/imtushaarr"
      instagram="https://www.instagram.com/imtushaarr"
      twitter="https://x.com/imtushaarr"
    />
    
    {/* Team Member 2 */}
    <TeamMember
      image={animesh}
      name="Animesh Upadhyay"
      role="Co-Founder & Software Developer"
      bio="Software Developer crafted innovative solutions and seamless user experiences."
      linkedin="https://www.linkedin.com/in/animesh-upadhyay-74a32a1b5/"
      instagram="https://www.instagram.com/aniiiimeshhh/"
      twitter="https://x.com/Animesh09528786"
    />
    
    {/* Team Member 3 */}
    <TeamMember
      image={punnet}
      name="Puneet"
      role="Co-Founder & Java Developer"
      bio="Java Developer with expertise in building scalable, efficient, and secure applications using Java technologies"
      linkedin="https://www.linkedin.com/in/puneetyadav09"
      instagram="https://www.instagram.com/yadav_puneet_009"
      twitter="https://x.com/PuneetY45565355"
    />
    
    {/* Team Member 4 */}
    <TeamMember
      image={yash}
      name="Yash Singh"
      role="Co-founder & Lead Data Analyst"
      bio="Data Engineer with expertise in building and optimizing data pipelines for efficient processing and storage"
      linkedin="https://www.linkedin.com/in/yash-singh2109"
      instagram="https://www.instagram.com/yash_ys_23"
      twitter="https://x.com/yash-singh2109"
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
          <button onClick={() => navigate("/contact-us")}
          className="bg-emerald-400 text-black px-10 py-3 rounded-full text-sm font-normal hover:bg-emerald-500 transition-all">
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
function redirectContactUs(){
  window.location.href="/contact-us";
}

function PrizeCard({ icon, title, amount, color, items = [] }) {
  return (
    <div className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-emerald-400/30 transition-all">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className={`text-2xl font-bold text-center mb-4 text-${color}-400`}>{title}</h3>
      <p className={`text-4xl font-bold text-center mb-6 text-${color}-500`}>{amount}</p>
      <ul className="space-y-2 text-gray-300">
        {items.length > 0 ? (
          items.map((item, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className={`w-2 h-2 bg-${color}-400 rounded-full`}>
              <svg width="10" height="10" className="mt-2">
                  <circle cx="5" cy="5" r="5" fill="#18CB96" />
              </svg>
              </span>
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

  function TeamMember({ image, name, role, bio, linkedin, instagram, twitter }) {
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
      </div>
      <div className="text-center">
        <h3 className="text-black text-xl font-bold mb-1">{name}</h3>
        <p className="text-[#18CB96]">{role}</p>
      </div>
      <div className="flex justify-center gap-4 mt-4">
        {linkedin && (
          <a href={linkedin} target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-black text-2xl hover:text-[#18CB96] transition-colors duration-300" />
          </a>
        )}
        {instagram && (
          <a href={instagram} target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-black text-2xl hover:text-[#18CB96] transition-colors duration-300" />
          </a>
        )}
        {twitter && (
          <a href={twitter} target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-black text-2xl hover:text-[#18CB96] transition-colors duration-300" />
          </a>
        )}
      </div>
    </div>
  );
}


function TimelineCard({ icon, title, date, platform, description }) {
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