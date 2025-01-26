import React from "react";
import logo from "../assets/favicon.png"

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

    {/* Placeholder for Additional Content */}
    <div>
      <h4 className="text-lg font-semibold mb-4">Kraf Technologies</h4>
      <p className="text-sm text-gray-400 text-justify">
      Kraf Technologies delivers innovative software and B2B solutions, empowering businesses with AI, cloud, and advanced digital technologies.
      </p>
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