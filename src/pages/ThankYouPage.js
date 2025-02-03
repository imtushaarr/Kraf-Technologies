import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Calendar, Users, Lightbulb, Bell, CheckCircle } from "lucide-react";



export default function ThankYouPage() {
  const [teamLeaderName, setTeamLeaderName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Get the team leader's name from localStorage
    const storedName = localStorage.getItem("teamLeaderName");
    if (storedName) {
      setTeamLeaderName(storedName);
    } else {
      navigate("/kraf-think-2025");  // Redirect back if the name isn't found
    }

    // Remove the registration flag from localStorage when the Thank You page is loaded
    localStorage.removeItem("registrationCompleted");
  }, [navigate]);

  return (
    <div className="min-h-screen bg-black text-white font-sans antialiased relative overflow-hidden">
      {/* Background blur effects */}
      <div className="absolute top-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-[#18CB96] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
      <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-32 left-1/2 w-64 h-64 md:w-96 md:h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-4 py-8 md:py-16 max-w-4xl relative z-10">
        <header className="text-center mb-8 md:mb-12">
          <div className="inline-block p-2 bg-[#18CB96] bg-opacity-20 rounded-full mb-4 relative">
            <CheckCircle className="w-8 h-8 md:w-12 md:h-12 text-[#18CB96]" />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#18CB96] to-green-400">
            {teamLeaderName ? `${teamLeaderName}, Thank You for Registering!` : "Thank You for Registering!"}
          </h1>
          <p className="text-lg md:text-xl text-gray-300">
            Your spot in the hackathon is confirmed. We're excited to see what you'll create!
          </p>
        </header>

        <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg border border-white border-opacity-20 rounded-xl p-4 md:p-6 mb-8 md:mb-12">
          <p className="text-center text-base md:text-lg text-gray-200">
            A confirmation email has been sent to your registered email address. Please check your inbox (and spam
            folder, just in case) for more details.
          </p>
        </div>

        <h2 className="text-2xl md:text-3xl font-semibold mb-6 md:mb-8 text-center text-[#18CB96]">Next Steps</h2>

        <div className="grid gap-4 md:gap-8 md:grid-cols-2">
          {[
            {
              icon: Calendar,
              title: "Mark Your Calendar",
              content:
                "The hackathon starts on [Start Date] at [Start Time]. Make sure to arrive early for check-in and the opening ceremony.",
            },
            {
              icon: Users,
              title: "Form Your Team",
              content:
                "If you haven't already, start forming your team. You can have up to [Team Size] members. Don't worry if you're going solo - we'll have a team formation session!",
            },
            {
              icon: Lightbulb,
              title: "Brainstorm Ideas",
              content:
                "Start thinking about potential projects. We'll announce the hackathon theme during the opening ceremony, but it's never too early to brainstorm!",
            },
            {
              icon: Bell,
              title: "Stay Tuned",
              content:
                "Keep an eye on your email for updates, schedule information, and any last-minute announcements.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-5 backdrop-filter backdrop-blur-sm border border-white border-opacity-10 rounded-xl p-4 md:p-6 transition-all duration-300 hover:bg-opacity-10 group"
            >
              <div className="flex items-center mb-3 md:mb-4">
                <item.icon className="w-6 h-6 md:w-8 md:h-8 text-[#18CB96] mr-3 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-lg md:text-xl font-semibold text-[#18CB96]">{item.title}</h3>
              </div>
              <p className="text-sm md:text-base text-gray-300">{item.content}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 md:mt-16 text-center">
          <p className="text-gray-300 mb-4 md:mb-6">If you have any questions, please don't hesitate to contact us.</p>
          <Link
            to="/contact"
            className="inline-block bg-[#18CB96] text-black font-semibold py-2 px-6 md:py-3 md:px-8 rounded-full transition-all duration-300 hover:bg-opacity-80 hover:scale-105 transform text-sm md:text-base"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}

function PartyPopper({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M5.2 19.8L9 16m7.3 3.8L12 16m9.3-5.2L16 13m-4-7.3L16 3m-2.8 14.8L10 13M3 13l4-3M0 3l17 17" />
      <path d="M4 4l7.5 2.5L14 9l-2.5 2.5L9 14l-2.5-2.5L4 14V4z" />
    </svg>
  );
}