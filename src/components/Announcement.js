import { useState, useEffect } from "react";
import { X, Twitter, Instagram, Linkedin } from "lucide-react";

const Announcement = () => {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(false);
    }, 15000); // Closes after 15 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-70 p-4 z-50">
      <div className="bg-white rounded-2xl shadow-lg p-6 max-w-md w-full text-center relative">
        {/* Close Button */}
        <button onClick={() => setIsOpen(false)} className="absolute top-3 right-3 text-gray-600 hover:text-red-500">
          <X size={24} />
        </button>

        {/* Heading */}
        <h2 className="text-green-600 text-2xl font-bold mb-2">
          Kraf Think 2025 Hackathon Update 🚀
        </h2>

        {/* Message */}
        <p className="text-gray-700 text-lg mb-4">
          Registrations are closed, but the innovation doesn’t stop here! Stay tuned and be patient for upcoming surprises...
        </p>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-4 mt-4">
          <a href="https://www.instagram.com/kraftechnologies/" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-700">
            <Instagram size={24} />
          </a>
          <a href="https://www.linkedin.com/company/kraftechnologies/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900">
            <Linkedin size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Announcement;