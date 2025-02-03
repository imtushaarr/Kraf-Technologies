import { motion, useScroll, useTransform } from "framer-motion";
import { FaLinkedinIn, FaTwitter, FaGithub } from "react-icons/fa";
import { SiBlockchaindotcom, SiOpenai, SiQuantcast, SiAmazons3 } from "react-icons/si";
import AnimatedText from "../components/AnimatedText";

const founders = [
  {
    name: "Tushar Gupta",
    role: "Founder & Lead Developer",
    image: "../assets/Avatar1.jpeg",
    bio: "With over 3 years of experience in tech leadership, Tushar drives the vision and strategy of TechNova Solutions.",
    social: {
      linkedin: "https://linkedin.com/in/imtushaarr",
      twitter: "https://twitter.com/imtushaarr",
      github: "https://github.com/imtushaarr",
    },
  },
  {
    name: "Animesh Upadhyay",
    role: "Co-Founder & Software Developer",
    image: "../assets/Avatar2.jpg",
    bio: "Sarah's expertise in AI and machine learning shapes our innovative product development.",
    social: {
      linkedin: "https://linkedin.com/in/sarahjohnson",
      twitter: "https://twitter.com/sarahjohnson",
      github: "https://github.com/sarahjohnson",
    },
  },
  {
    name: "Puneet",
    role: "Co-Founder & Java Developer",
    image: "../assets/Avatar3.jpeg",
    bio: "Michael's background in operations and finance ensures smooth scaling of our solutions.",
    social: {
      linkedin: "https://linkedin.com/in/michaellee",
      twitter: "https://twitter.com/michaellee",
      github: "https://github.com/michaellee",
    },
  },
  {
    name: "Yash Singh",
    role: "Co-founder & Lead Data Analyst",
    image: "../assets/Avatar4.jpg",
    bio: "Emily's innovative marketing strategies have positioned TechNova as a leader in the B2B SaaS space.",
    social: {
      linkedin: "https://linkedin.com/in/emilyrodriguez",
      twitter: "https://twitter.com/emilyrodriguez",
      github: "https://github.com/emilyrodriguez",
    },
  },
];

export default function AboutUs() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  return (
    <div className="min-h-screen bg-black text-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div style={{ opacity, scale }} className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6">
              <AnimatedText text="About Kraf Technologies" />
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-400">
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
            <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center text-white">Our Story</h2>
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <p className="text-lg mb-6 leading-relaxed text-justify text-gray-400">
                  Founded in 2018 by a team of visionary tech entrepreneurs, TechNova Solutions emerged from a shared
                  passion for leveraging cutting-edge technology to solve complex business challenges. Our journey began
                  with a simple yet powerful idea: to create B2B software solutions that not only meet the current needs
                  of businesses but anticipate and adapt to future demands.
                </p>
                <p className="text-lg mb-6 leading-relaxed text-justify text-gray-400">
                  In our early days, we focused on developing robust analytics tools for small to medium-sized
                  enterprises. Our flagship product, DataInsight Pro, quickly gained traction for its user-friendly
                  interface and powerful predictive capabilities. This early success fueled our growth and allowed us to
                  expand our offerings.
                </p>
              </div>
              <div>
                <p className="text-lg mb-6 leading-relaxed text-justify text-gray-400">
                  By 2020, TechNova had established itself as a key player in the B2B SaaS market. We broadened our
                  portfolio to include cloud-based project management tools, AI-driven customer relationship management
                  systems, and blockchain-enabled supply chain solutions. Our commitment to innovation and
                  customer-centric approach has been the cornerstone of our success.
                </p>
                <p className="text-lg mb-6 leading-relaxed text-justify text-gray-400">
                  Today, TechNova Solutions serves over 500 clients across 30 countries, ranging from agile startups to
                  Fortune 500 companies. Our team has grown to over 200 talented individuals, including expert
                  developers, visionary designers, data scientists, and dedicated customer success managers.
                </p>
                <p className="text-lg mb-6 leading-relaxed text-justify text-gray-400">
                  We pride ourselves on our culture of continuous learning and adaptation. Our annual "InnovateTech"
                  conference has become a much-anticipated event in the tech industry, showcasing emerging technologies
                  and fostering collaboration between innovators and businesses.
                </p>
                {/* <img
                  src="/placeholder.svg?height=400&width=600&text=TechNova+Team"
                  alt="TechNova Team"
                  className="rounded-lg shadow-2xl mb-6 hover:shadow-blue-200 transition-shadow duration-300"
                />*/}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-white">Meet Our Founders</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {founders.map((founder, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <img
                  src={founder.image || "/placeholder.svg"}
                  alt={founder.name}
                  className="rounded-full mx-auto mb-6 border-4 border-blue-100"
                />
                <h3 className="text-xl font-semibold mb-2 text-center text-gray-900">{founder.name}</h3>
                <p className="text-blue-600 mb-4 text-center">{founder.role}</p>
                <p className="text-sm mb-6 text-gray-600">{founder.bio}</p>
                <div className="flex justify-center space-x-4">
                  <a
                    href={founder.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-600 transition-colors"
                  >
                    <FaLinkedinIn className="w-5 h-5" />
                  </a>
                  <a
                    href={founder.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    <FaTwitter className="w-5 h-5" />
                  </a>
                  <a
                    href={founder.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-gray-900 transition-colors"
                  >
                    <FaGithub className="w-5 h-5" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation & Technologies Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center text-gray-900">
              Our Innovations & Technologies
            </h2>
            <p className="text-lg md:text-xl mb-12 text-center max-w-3xl mx-auto text-gray-600">
              At TechNova Solutions, we leverage cutting-edge technologies to deliver innovative solutions that drive
              business growth and efficiency.
            </p>
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
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-gray-900">Success Stories</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                title: "E-commerce Giant Boosts Sales by 200%",
                image: "/placeholder.svg?height=400&width=600&text=E-commerce+Case+Study",
              },
              {
                title: "Fintech Startup Scales to 1M Users",
                image: "/placeholder.svg?height=400&width=600&text=Fintech+Case+Study",
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
                  <a href="/case-studies" className="inline-block">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-blue-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-blue-700 transition-all duration-300 flex items-center"
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