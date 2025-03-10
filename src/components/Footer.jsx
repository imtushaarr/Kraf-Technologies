// import React from "react";
// import { Linkedin, Github, Twitter, Instagram, Facebook } from 'lucide-react';

// export default function Footer() {
//   return (
//     <footer className="bg-black text-white py-8">
//       <div className="container mx-auto px-4">
//         {/* Footer Content */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
//           {/* Logo and Contact */}
//           <div>
//             <p className="text-lg font-semibold mb-4">Contact us:</p>
//             <p className="text-gray-400 text-sm">Email: info@kraftechnologies.com</p>
//             <p className="text-gray-400 text-sm">Phone: +91 9588746232</p>
//             <p className="text-gray-400 text-sm">Office: 11/2, Tech Park, Mohali, Punjab, 160055</p>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
//             <ul className="space-y-1">
//               <li>
//                 <a href="/" className="text-gray-400 hover:text-[#18CB96] transition">
//                   Home
//                 </a>
//               </li>
//               <li>
//                 <a href="/products" className="text-gray-400 hover:text-[#18CB96] transition">
//                   Products
//                 </a>
//               </li>
//               <li>
//                 <a href="/our-servies" className="text-gray-400 hover:text-[#18CB96] transition">
//                   Services
//                 </a>
//               </li>
//               <li>
//                 <a href="/career" className="text-gray-400 hover:text-[#18CB96] transition">
//                   Career
//                 </a>
//               </li>
//               <li>
//                 <a href="/contact-us" className="text-gray-400 hover:text-[#18CB96] transition">
//                   Contact Us
//                 </a>
//               </li>
//             </ul>
//           </div>

//           <div>
//             <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
//             <div className="flex gap-6">
//             <a href="https://www.linkedin.com/company/kraftechnologies/?viewAsMember=true" target="_blank" rel="noopener noreferrer">
//               <Linkedin className="w-6 h-6 text-gray-400 hover:text-[#18CB96] transition-colors" />
//             </a>
//             <a href="https://github.com/Kraf-Technologies" target="_blank" rel="noopener noreferrer">
//               <Github className="w-6 h-6 text-gray-400 hover:text-[#18CB96] transition-colors" />
//             </a>
//             <a href="https://x.com/kraftechnologies" target="_blank" rel="noopener noreferrer">
//               <Twitter className="w-6 h-6 text-gray-400 hover:text-[#18CB96] transition-colors" />
//             </a>
//             <a href="https://instagram.com/kraftechnologies" target="_blank" rel="noopener noreferrer">
//               <Instagram className="w-6 h-6 text-gray-400 hover:text-[#18CB96] transition-colors" />
//             </a>
//             <a href="https://facebook.com/kraftechnologies" target="_blank" rel="noopener noreferrer">
//               <Facebook className="w-6 h-6 text-gray-400 hover:text-[#18CB96] transition-colors" />
//             </a>
//           </div>
//         </div>
//           </div>

//         {/* Bottom Line */}
//         <div className="border-t border-gray-700 pt-4 text-center">
//           <p className="text-sm">&copy; 2025 Kraf Technologies. All rights reserved.</p>
//         </div>
//       </div>
//     </footer>
//   );
// }


import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail } from "lucide-react";
import { db } from "../services/firebase"; // Import Firebase
import { collection, addDoc } from "firebase/firestore";
import logo from "../assets/kt.png";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isChecked) {
      setMessage("Please accept the Privacy Policy.");
      return;
    }

    if (!email) {
      setMessage("Please enter a valid email address.");
      return;
    }

    try {
      await addDoc(collection(db, "newsletter_subscriptions"), {
        email,
        timestamp: new Date(),
      });

      setMessage("Subscription successful! Thank you for signing up.");
      setEmail(""); // Clear email input
      setIsChecked(false); // Reset checkbox
    } catch (error) {
      setMessage("Error subscribing. Please try again later.");
      console.error("Error adding document: ", error);
    }
  };

  return (
    <footer className="bg-black text-[#858585] min-h-screen">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 py-20 border-b border-[#1f1f1f]">
          {/* Newsletter Section */}
          <div className="lg:col-span-5">
            <h2 className="text-white text-2xl font-light leading-normal mb-8">
              Subscribe to our newsletter for industry insights and company news!
            </h2>
            <form onSubmit={handleSubmit} className="relative mb-6">
              <input
                type="email"
                placeholder="Email address*"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-transparent border-b border-[#333] rounded-none px-0 py-2 focus:border-white focus:ring-0 placeholder:text-[#858585] w-full"
              />
              <button
                type="submit"
                className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center gap-2"
              >
                <Mail className="w-5 h-5 text-[#858585]" />
                <span className="text-2xl text-[#858585]">→</span>
              </button>
            </form>
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="privacy"
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
                className="mt-1.5 border-[#333]"
              />
              <label htmlFor="privacy" className="text-sm leading-relaxed">
                I agree to the{" "}
                <Link to="/privacy-policy" className="text-white hover:opacity-80">
                  Privacy Policy
                </Link>{" "}
                and give my permission to process my personal data for the purposes specified in the Privacy Policy.
              </label>
            </div>
            {message && <p className="text-white mt-4">{message}</p>}
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="space-y-6">
              <h3 className="text-white text-lg">About</h3>
              <nav className="space-y-4">
                <Link to="/about" className="block hover:text-white transition-colors">
                  About us
                </Link>
                <Link to="/products" className="block hover:text-white transition-colors">
                  Products
                </Link>
                <Link to="/services" className="block hover:text-white transition-colors">
                  Services
                </Link>
                <Link to="/portfolio" className="block hover:text-white transition-colors">
                  Portfolio
                </Link>
                <Link to="/careers" className="block hover:text-white transition-colors">
                  Careers
                </Link>
                <Link to="/contact-us" className="block hover:text-white transition-colors">
                  Contact us
                </Link>
              </nav>
            </div>
            <div className="space-y-6">
              <h3 className="text-white text-lg">Social Media</h3>
              <nav className="space-y-4">
                <Link to="https://www.linkedin.com/company/kraftechnologies" target="_blank" className="block hover:text-white transition-colors">
                  LinkedIn
                </Link>
                <Link to="https://instagram.com/kraftechnologies" target="_blank" className="block hover:text-white transition-colors">
                  Instagram
                </Link>
                <Link to="https://x.com/kraftechnologies" target="_blank" className="block hover:text-white transition-colors">
                  X (formerly Twitter)
                </Link>
                <Link to="https://facebook.com/kraftechnologies" target="_blank" className="block hover:text-white transition-colors">
                  Facebook
                </Link>
              </nav>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="space-y-8">
              <Link to="/" className="block">
                <h2 className="text-white text-4xl font-light">
                  <img src={logo} alt="Kraf Technologies Logo" className="w-60" />
                </h2>
              </Link>
              <div className="space-y-2 text-sm text-justify">
                <p>
                  At Kraf Technologies, we are pioneers in delivering cutting-edge Software-as-a-Service (SaaS)
                  solutions tailored for B2B enterprises. Our mission is to empower businesses with tools that not only
                  solve today’s challenges but also unlock tomorrow’s opportunities.
                </p>
              </div>
            </div>
            <div className="space-y-8">
              <div className="space-y-1 text-sm">
                <p>
                  E-mail:{" "}
                  <a href="mailto:info@kraftechnologies.com" className="text-white hover:opacity-80">
                    info@kraftechnologies.com
                  </a>
                </p>
                <p>
                  Team E-mail:{" "}
                  <a href="mailto:team@kraftechnologies.com" className="text-white hover:opacity-80">
                    team@kraftechnologies.com
                  </a>
                </p>
                <p>
                  Contact:{" "}
                  <a href="tel:+919588746232" className="text-white hover:opacity-80">
                    +919588746232
                  </a>
                </p>
                <p>
                  HQ Office Address:{" "}
                  <span className="text-white hover:opacity-80">11/2, Tech Park, Mohali, Punjab, 160055</span>
                </p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-4 text-center">
            <p className="text-sm">&copy; 2025 Kraf Technologies. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}