import React, { useState, useEffect } from "react";
import { Code2, Calendar, Users, X, Trophy, Rocket } from "lucide-react";

const Popup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const hasSeenPopup = localStorage.getItem("hasSeenPopup");

    if (!hasSeenPopup) {
      // Show popup after 2 seconds
      const timer = setTimeout(() => setShowPopup(true), 2000);
      // Auto-close popup after 10 seconds
      const autoClose = setTimeout(() => setShowPopup(false), 12000);

      return () => {
        clearTimeout(timer);
        clearTimeout(autoClose);
      };
    }
  }, []);

  const handleClose = () => {
    setShowPopup(false);
    localStorage.setItem("hasSeenPopup", "true"); // Prevent future popups
  };

  if (!showPopup) return null; // Don't render if popup is hidden

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full relative overflow-hidden">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600" />
          <Code2 className="absolute top-10 left-10 w-20 h-20" />
          <Rocket className="absolute bottom-10 right-10 w-20 h-20" />
        </div>

        {/* Content */}
        <div className="relative p-8">
          <div className="flex items-center justify-center mb-6">
            <Trophy className="w-12 h-12 text-yellow-500 mr-3" />
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Code Revolution 2025
            </h2>
          </div>

          <h3 className="text-xl font-semibold text-center mb-6">
            Join the Ultimate Hackathon Experience!
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="flex items-center">
              <Calendar className="w-6 h-6 text-blue-600 mr-3" />
              <div>
                <p className="font-semibold">March 15-17, 2025</p>
                <p className="text-sm text-gray-600">48 Hours of Innovation</p>
              </div>
            </div>
            <div className="flex items-center">
              <Users className="w-6 h-6 text-purple-600 mr-3" />
              <div>
                <p className="font-semibold">500+ Participants</p>
                <p className="text-sm text-gray-600">Global Community</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 mb-8">
            <h4 className="font-semibold mb-3">What's in store:</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• $50,000 in Total Prizes</li>
              <li>• Mentorship from Industry Experts</li>
              <li>• Networking Opportunities</li>
              <li>• Swag and Resources</li>
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => window.open("https://example.com/register", "_blank")}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:opacity-90 transition-opacity"
            >
              Register Now
            </button>
            <button
              onClick={() => window.open("https://example.com/learn-more", "_blank")}
              className="px-8 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-full hover:bg-gray-50 transition-colors"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;