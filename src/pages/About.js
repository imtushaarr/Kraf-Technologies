import { motion, useScroll, useTransform } from "framer-motion";
import { SiBlockchaindotcom, SiOpenai, SiQuantcast, SiAmazons3 } from "react-icons/si";
import { FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';
import AnimatedText from "../components/AnimatedText";
import animesh from "../assets//founders/animesh.JPG"
import punnet from "../assets/founders/puneet.JPG"
import yash from "../assets/founders/yash.JPG"
import tushar from "../assets/founders/tushar.JPG"
import allFounders from '../assets/founders/all.jpg'


export default function AboutUs() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  return (
    <div className="min-h-screen bg-black text-gray-900">
      {/* Hero Section */}
      <section className="relative py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div style={{ opacity, scale }} className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 animate-fade-in">
              <span className="text-[#18CB96] bg-clip-text animate-pulse"><AnimatedText text="About Kraf Technologies" /></span>
            </h1>
            <p className="text-base md:text-xl mb-8 max-w-3xl mx-auto text-gray-300 md:mb-8 max-w-2xl">
              Revolutionizing B2B Software Solutions with Cutting-Edge Technology and Innovative Approaches
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Information */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-2 md:mb-2 text-center bg-clip-text text-transparent bg-white to-emerald-300">Our Story</h2>
            <div className="w-40 h-1 bg-[#18CB96] mx-auto mb-16"></div>
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <p className="text-lg mb-6 leading-relaxed text-justify text-gray-400">
                Kraf Technologies, founded in 2022, is a cutting-edge software and B2B development company dedicated to delivering innovative solutions across multiple industries. With a strong focus on technology-driven advancements, Kraf Technologies specializes in building software products that streamline business operations, enhance user experiences, and drive digital transformation. The company was established with a vision to revolutionize the tech industry by offering robust, scalable, and secure solutions tailored to meet the evolving needs of businesses and consumers alike. Through a commitment to innovation, Kraf Technologies has successfully developed a diverse portfolio of products and brands, catering to a wide range of industries, from fintech and event management to e-commerce and project collaboration.
                </p>
                <p className="text-lg mb-6 leading-relaxed text-justify text-gray-400">
                One of Kraf Technologies’ flagship and most successful products is KRAFX-Q1, a futuristic event management system designed to revolutionize large-scale events with seamless organization, digital transactions, and real-time data insights. This advanced solution integrates NFC-based cashless payments, automated attendee management, and live event analytics, providing organizers with a comprehensive tool to enhance efficiency and engagement. KRAFX-Q1 ensures secure, contactless transactions using NFC-enabled cards, eliminating the hassle of cash handling and long queues. Event organizers and merchants can leverage this cutting-edge system to streamline ticketing, access control, vendor payments, and financial operations, offering attendees a smooth and hassle-free experience. 
                </p>
                <p className="text-lg mb-6 leading-relaxed text-justify text-gray-400">
                Another key product developed by Kraf Technologies is InnovateX, a bill management system designed to simplify and automate financial transactions for businesses. This solution helps companies manage their invoices, track expenses, and generate reports, reducing the complexities associated with manual financial handling. InnovateX is built with smart analytics and AI-powered automation, allowing businesses to gain real-time insights into their financial data. Whether it’s subscription-based billing, utility payments, or business-to-business transactions, InnovateX ensures transparency and efficiency, making it a vital tool for organizations looking to modernize their billing processes.
                </p>
              </div>
              <div>
                <p className="text-lg mb-6 leading-relaxed text-justify text-gray-400">
                Beyond its B2B solutions, Kraf Technologies has also expanded its reach into consumer-facing markets with its in-house brands. Krafcool is an e-commerce clothing brand tailored for the youth, offering trendy and stylish apparel. With a focus on quality, affordability, and the latest fashion trends, Krafcool aims to redefine the online shopping experience for young consumers. Additionally, the company has launched ProjectVerse, a developer collaboration platform designed to connect professionals, students, and tech enthusiasts. ProjectVerse acts as a hub for project management, idea sharing, and team collaborations, making it easier for developers to work on software projects, find partners, and contribute to open-source initiatives.
                </p>
                <p className="text-lg mb-6 leading-relaxed text-justify text-gray-400">
                With a strong foundation in technology and a vision for future innovation, Kraf Technologies continues to push the boundaries of digital transformation. The company is committed to expanding its product line, exploring emerging technologies like AI, blockchain, and IoT, and fostering an ecosystem where businesses and individuals can thrive. As it grows, Kraf Technologies remains dedicated to delivering high-quality, scalable, and user-centric solutions that empower businesses and consumers alike, shaping the future of technology with its innovative approach.
                </p>
                <img
                  src={allFounders}
                  alt="TechNova Team"
                  className="rounded-lg shadow-2xl mb-6"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-2 md:mb-2 text-center bg-clip-text text-transparent bg-white to-emerald-300">Meet Our Founders</h2>
        {/* Team Section */}
        <div className="max-w-6xl mx-auto relative">
          <div className="w-40 h-1 bg-[#18CB96] mx-auto mb-16"></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            <TeamMember
              image={tushar}
              name="Tushar Gupta"
              role="Founder & Lead Developer"
              bio="Software Developer skilled in designing, developing, and optimizing scalable applications across various platforms and technologies."
              linkedin="https://www.linkedin.com/in/imtushaarr"
              instagram="https://www.instagram.com/imtushaarr"
              twitter="https://twitter.com/imtushaarr"
              />
            <TeamMember
              image={animesh}
              name="Animesh Upadhyay"
              role="Co-Founder & Software Developer"
              bio="Software Developer crafted innovative solutions and seamless user experiences."
              linkedin="https://www.linkedin.com/in/animesh-upadhyay-74a32a1b5/"
              instagram="https://www.instagram.com/aniiiimeshhh/"
              twitter="https://twitter.com/Animesh09528786"
              />
            <TeamMember
              image={punnet}
              name="Puneet"
              role="Co-Founder & Java Developer"
              bio="Java Developer with expertise in building scalable, efficient, and secure applications using Java technologies"
              linkedin="https://www.linkedin.com/in/puneetyadav09"
              instagram="https://www.instagram.com/yadav_puneet_009"
              twitter="https://twitter.com/PuneetY45565355"
            />
            <TeamMember
              image={yash}
              name="Yash Singh"
              role="Co-founder & Lead Data Analyst"
              bio="Data Engineer with expertise in building and optimizing data pipelines for efficient processing and storage"
              linkedin="https://www.linkedin.com/in/yash-singh2109"
              instagram="https://www.instagram.com/yash_ys_23"
              twitter="https://twitter.com/yash-singh2109"
            />
          </div>
        </div>
        </div>
      </section>

      {/* Innovation & Technologies Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h2 className="text-4xl md:text-5xl font-bold mb-2 md:mb-2 text-center bg-clip-text text-black">
              Our Innovations & Technologies
            </h2>
            <div className="w-40 h-1 bg-[#18CB96] mx-auto mb-16"></div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: SiOpenai,
                  title: "AI-Powered Analytics",
                  description: "Harness the power of machine learning for predictive insights",
                },
                {
                  icon: SiQuantcast,
                  title: "Quantum Computing Ready",
                  description: "Future-proof solutions leveraging quantum algorithms",
                },
                {
                  icon: SiBlockchaindotcom,
                  title: "Blockchain Integration",
                  description: "Secure and transparent data management solutions",
                },
                {
                  icon: SiAmazons3,
                  title: "Edge Computing",
                  description: "Faster processing with distributed cloud architecture",
                },
              ].map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                >
                  <tech.icon className="w-16 h-16 text-blue-600 mb-6 mx-auto" />
                  <h3 className="text-xl font-semibold mb-3 text-center text-gray-900">{tech.title}</h3>
                  <p className="text-sm text-center text-gray-600">{tech.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-2 md:mb-2 text-center bg-clip-text text-transparent bg-white to-emerald-300">Success Stories</h2>
          <div className="w-40 h-1 bg-[#18CB96] mx-auto mb-16"></div>
          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                title: "KrafX-Q: The Future of Hackathon Management",
                image: "https://media.licdn.com/dms/image/v2/D4D12AQHx_s7GnKZxFA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1738789892377?e=1744243200&v=beta&t=xp4EdyRp0lrPL7406-9mWrCII023gJVeerUpkvwwI3s",
              },
              {
                title: "Fintech Startup Scales to 1M Users",
                image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              },
            ].map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <img
                  src={study.image || "/placeholder.svg"}
                  alt={study.title}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{study.title}</h3>
                  <p className="text-gray-600 mb-4">Learn how our solutions transformed their business</p>
                  <a href="https://www.linkedin.com/pulse/krafx-q-future-hackathon-management-kraftechnologies-gj06f/"  target="_blank" className="inline-block">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-[#18CB96] text-task px-6 py-2 rounded-md font-base flex items-center"
                    >
                      Read Case Study
                    </motion.button>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
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
        <h3 className="text-white text-xl font-bold mb-1">{name}</h3>
        <p className="text-[#18CB96]">{role}</p>
      </div>
      <div className="flex justify-center gap-4 mt-4">
        {linkedin && (
          <a href={linkedin} target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-white text-2xl hover:text-[#18CB96] transition-colors duration-300" />
          </a>
        )}
        {instagram && (
          <a href={instagram} target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-white text-2xl hover:text-[#18CB96] transition-colors duration-300" />
          </a>
        )}
        {twitter && (
          <a href={twitter} target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-white text-2xl hover:text-[#18CB96] transition-colors duration-300" />
          </a>
        )}
      </div>
    </div>
  );
}
