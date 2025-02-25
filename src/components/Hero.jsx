import React from 'react';

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-black flex justify-center items-center overflow-hidden px-4">
      {/* Grid lines */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(to right, #111 1px, transparent 1px),
                           linear-gradient(to bottom, #111 1px, transparent 1px)`,
          backgroundSize: "4rem 4rem",
        }}
      ></div>

      {/* Content */}
      <div className="relative container mx-auto text-center">
        <div className="animate-fade-in">
          <div className="inline-block p-2 backdrop-blur-sm">
            <h1 className="text-4xl md:text-7xl font-semibold text-white">
              Building Next-Gen Solutions
            </h1>
          </div>

          <p className="text-lg md:text-xl font-light text-[#18CB96] max-w-2xl mx-auto mt-4 md:mt-6 animate-fade-in-delay-1 leading-relaxed">
            Highlights your role in driving measurable outcomes through adaptable, future-ready tools.
          </p>

          {/* Buttons - Mobile Responsive */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center mt-8">
            <a
              href="/contact-us"
              target="_blank"
              aria-label="Schedule a 30-minute call with Kraf Technologies"
              className="w-full sm:w-auto"
            >
              <button className="w-full sm:w-auto bg-[#18CB96] text-black px-6 py-3 md:px-8 md:py-3 rounded-lg font-semibold hover:bg-[#15b585] transition-all flex items-center justify-center">
                Schedule a Consultation
              </button>
            </a>

            <a
              href="https://calendly.com/kraftechnologies-info/30min"
              target="_blank"
              aria-label="Schedule a 30-minute call with Kraf Technologies"
              className="w-full sm:w-auto"
            >
              <button className="w-full sm:w-auto border border-[#18CB96] text-[#18CB96] px-6 py-3 md:px-8 md:py-3 rounded-lg font-semibold hover:bg-[#18CB96]/10 focus:outline-none focus:ring-2 focus:ring-[#18CB96] transition-all">
                Request a Demo
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}