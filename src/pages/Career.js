import React from 'react';
import { Briefcase, GraduationCap, TrendingUp, Users } from 'lucide-react';
import { Helmet } from "react-helmet";

const benefits = [
  {
    icon: <Users className="w-8 h-8 text-[#18CB96]" />,
    title: "Teamwork",
    description: "Join a high-performing team with a shared goal of excellence"
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-[#18CB96]" />,
    title: "Personal Future",
    description: "Clear career growth path and skill development opportunities"
  },
  {
    icon: <GraduationCap className="w-8 h-8 text-[#18CB96]" />,
    title: "Learning Opportunity",
    description: "Access to training resources and mentorship programs"
  },
  {
    icon: <Briefcase className="w-8 h-8 text-[#18CB96]" />,
    title: "Upskill Skills",
    description: "Regular workshops and professional development sessions"
  }
];

const openings = [
  {
    position: "Wordpress Developer",
    experience: "2 Years",
    date: "2024-05-08"
  },
  {
    position: "Javascript Developer",
    experience: "1 Years",
    date: "2025-01-08"
  },
  {
    position: "Apps Developer",
    experience: "3 Years",
    date: "2023-05-08"
  },
  {
    position: "iOS Developer",
    experience: "2 Years",
    date: "2023-05-08"
  },
  {
    position: "Node JS Developer",
    experience: "3 Years",
    date: "2023-05-08"
  }
];

export default function Career() {
  return (
    <div className="min-h-screen bg-black text-white">
            <Helmet>
              <title>Careers at Kraf Technologies - Join Our Team</title>
              <meta name="description" content="Join Kraf Technologies and be part of an innovative team. Explore exciting career opportunities in software development, AI, and cloud computing." />
              <meta name="keywords" content="Careers, Jobs, Software Development, AI, Cloud Computing, Kraf Technologies" />
              <meta property="og:title" content="Careers at Kraf Technologies - Join Our Team" />
              <meta property="og:description" content="Explore job openings and work with the best in the industry at Kraf Technologies." />
              <meta property="og:image" content="https://kraftechnologies.com/assets/careers-og-image.jpg" />
              <meta property="og:url" content="https://kraftechnologies.com/careers/" />
              <link rel="canonical" href="https://kraftechnologies.com/careers/" />
            </Helmet>
      {/* Hero Section */}
      <div className="relative h-[400px] flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4"><span className="text-[#18CB96] bg-clip-text animate-pulse">Shape the Future with Kraf Technologies</span></h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Be part of our growing team and experience the bright future of innovation in a workplace setting.
          </p>
          <div className="space-x-4">
            <a href='/careers/registration' target='_blank' rel='noreferrer'>
            <button className="bg-[#18CB96] text-white px-6 py-2 rounded-md hover:bg-[#15b587] transition">
              Apply Now
            </button>
            </a>
            <a href='/about'>
            <button className="border border-white px-6 py-2 rounded-md hover:bg-white/10 transition">
              Learn More
            </button>
            </a>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
            Why you Should Join Our Awesome Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 rounded-lg bg-zinc-900 hover:bg-zinc-800 transition">
                <div className="flex justify-center mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Openings Section */}
      <section className="py-16 px-4 md:px-8 bg-zinc-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">Career Openings</h2>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b border-zinc-700">
                  <th className="text-left py-4 px-6">Position</th>
                  <th className="text-left py-4 px-6">Experience</th>
                  <th className="text-left py-4 px-6">Date</th>
                  <th className="text-left py-4 px-6">Action</th>
                </tr>
              </thead>
              <tbody>
                {openings.map((job, index) => (
                  <tr key={index} className="border-b border-zinc-800 hover:bg-zinc-800/50">
                    <td className="py-4 px-6">{job.position}</td>
                    <td className="py-4 px-6">{job.experience}</td>
                    <td className="py-4 px-6">{job.date}</td>
                    <td className="py-4 px-6">
                      <button className="bg-gray-600 text-red-200 px-4 py-1 rounded-md text-sm hover:bg-[#15b587] transition">
                        Application Closed
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}