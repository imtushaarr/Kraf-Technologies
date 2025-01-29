import React from "react";
import { Linkedin, Github, Twitter, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
          {/* Logo and Contact */}
          <div>
            <p className="text-lg font-semibold mb-4">Contact us:</p>
            <p className="text-sm">Email: info@kraftechnologies.com</p>
            <p className="text-sm">Phone: +91 9425 929637</p>
            <p className="text-sm">Office: 11/2, Tech Park, Mohali, Punjab, 140301</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-1">
              <li>
                <a href="#" className="hover:text-[#18CB96] transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#18CB96] transition">
                  Products
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#18CB96] transition">
                  Career
                </a>
              </li>
            </ul>
          </div>

          {/* Connect With Us */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex gap-6">
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-6 h-6 text-blue-600 hover:text-blue-800 transition-colors" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="w-6 h-6 text-gray-900 hover:text-black transition-colors" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Twitter className="w-6 h-6 text-blue-400 hover:text-blue-500 transition-colors" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-6 h-6 text-pink-500 hover:text-pink-600 transition-colors" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <Facebook className="w-6 h-6 text-blue-700 hover:text-blue-800 transition-colors" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="border-t border-gray-700 pt-4 text-center">
          <p className="text-sm">&copy; 2025 Kraf Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}