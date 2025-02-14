import React, { useState } from 'react';
import {Instagram, Linkedin, Github } from 'lucide-react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { db, collection, addDoc } from "../services/firebase";
function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await addDoc(collection(db, "kt_contact"), formData);
      setSuccessMessage("Message sent successfully! We will get back to you soon.");
      setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error("Error submitting form: ", error);
    }
    setLoading(false);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen flex items-center relative">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: 'black',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.6)'
        }}
      />

      {/* Content Container */}
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* Left Column */}
          <div className="text-white md:w-1/2">
            <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-lg text-gray-200 mb-8">
            Want to get in touch? We'd love to hear from you. Here's how you can reach us. 
            </p>
            <div className="space-y-6 mb-8">
        <div className="flex items-center gap-3">
          <Phone className="h-5 w-5 text-muted-foreground" />
          <a href="tel:+918839800059" className="text-muted-foreground hover:text-foreground transition-colors">
          +91 9588746232
          </a>
        </div>

        <div className="flex items-center gap-3">
          <Mail className="h-5 w-5 text-muted-foreground" />
          <a href="mailto:info@kraftechnologies.com" className="text-muted-foreground hover:text-foreground transition-colors">
            info@kraftechnologies.com
          </a>
        </div>

        <div className="flex items-center gap-3">
          <MapPin className="h-5 w-5 text-muted-foreground" />
          
          <a href="https://maps.app.goo.gl/jkSKJQPSfYv9Nznm9?g_st=ac" className="text-muted-foreground">11/2, Tech Park, Mohali, Punjab, 160055</a>
        </div>
      </div>
            
            {/* Social Media Links */}
            <div className="flex gap-6">
              <a href="https://www.linkedin.com/company/kraftechnologies/?viewAsMember=true" className="text-blue-400 hover:text-blue-300 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="https://github.com/Kraf-Technologies" className="text-blue-600 hover:text-blue-500 transition-colors">
                <Github size={24} />
              </a>
              <a href="https://instagram.com/kraftechnologies" className="text-pink-600 hover:text-pink-500 transition-colors">
                <Instagram size={24} />
              </a>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="md:w-1/2 w-full">
            <div className="bg-[#111827] bg-opacity-80 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-white mb-2">Raise a ticket</h2>
              <p className="text-gray-400 mb-6">We will get back to you in 24 hours</p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required className="bg-[#1F2937] text-white px-4 py-3 rounded-md w-full"/>
                  <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required className="bg-[#1F2937] text-white px-4 py-3 rounded-md w-full"/>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required className="bg-[#1F2937] text-white px-4 py-3 rounded-md w-full"/>
                  <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required className="bg-[#1F2937] text-white px-4 py-3 rounded-md w-full"/>
                </div>

                <textarea name="message" placeholder="Type a message here" value={formData.message} onChange={handleChange} required rows={6} className="bg-[#1F2937] text-white px-4 py-3 rounded-md w-full"/>

                <button type="submit" disabled={loading} className="w-full bg-green-500 hover:bg-green-600 text-white font-normal py-3 px-6 rounded-md transition-colors">
                  {loading ? "Sending..." : "Submit"}
                </button>
                {successMessage && <p className="text-green-500">{successMessage}</p>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;