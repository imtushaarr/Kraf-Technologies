import { useEffect, useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { Calendar, Users, Lightbulb, Bell, CheckCircle, Send, Braces, PartyPopper } from "lucide-react";

export default function ThankYouPage() {
  const [teamLeaderName, setTeamLeaderName] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const storedName = localStorage.getItem("thankYouAccess");
    const isValidAccess = location.state?.fromRegistration || storedName;

    if (!isValidAccess) {
      navigate('/kraf-think-2025');
    } else {
      
      localStorage.setItem("thankYouAccess", "valid");
      const leaderName = localStorage.getItem("teamLeaderName") || "Participant";
      setTeamLeaderName(leaderName);
      
      
      localStorage.removeItem("teamLeaderName");
      
      
      return () => {
        localStorage.removeItem("thankYouAccess");
      };
    }
  }, [location, navigate]);

  
  useEffect(() => {
    const handleBeforeUnload = () => {
      localStorage.removeItem("thankYouAccess");
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  if (!teamLeaderName) return null;

  return (
    <div className="min-h-screen bg-black text-white font-sans antialiased relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-[#18CB96] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
      <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-32 left-1/2 w-64 h-64 md:w-96 md:h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-4 py-8 md:py-16 max-w-4xl relative z-10">
        <header className="text-center mb-8 md:mb-12">
          <div className="inline-block p-2 bg-[#18CB96] bg-opacity-20 rounded-full mb-4 relative">
            <CheckCircle className="w-8 h-8 md:w-12 md:h-12 text-[#18CB96]" />
          </div>

          <h1 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#18CB96] to-green-400"> Thank You for Registering for Kraf Think 2025 Hackathon!
          </h1>
          <p className="text-lg md:text-xl text-gray-300">
          Your registration for Kraf Think 2025 is confirmed! 🚀 We’re excited to see your innovative ideas take shape.
          </p>
        </header>

        <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg border border-white border-opacity-20 rounded-xl p-4 md:p-6 mb-8 md:mb-12">
          <p className="text-center text-base md:text-lg text-gray-200">
          Check Your Email! A confirmation email has been sent to your registered email address, along with all team members. Please check your inbox (and spam folder) for further details. Keep an eye on your email for updates, schedule information, and any last-minute announcements.
          </p>
        </div>

        <h2 className="text-2xl md:text-4xl font-semibold mb-6 md:mb-8 text-center text-white">What’s Next?</h2>

        <div className="grid gap-4 md:gap-8 md:grid-cols-2">
          {[
            {
              icon: Send,
              title: "PPT Submissions",
              content: "February 15 to 19, 2025 Submit your project presentation at KrafX-Q1",
            },
            {
              icon: Users,
              title: "Presentation Result",
              content: "February 22, 2025 Top 15 teams will be selected and announced on KrafX-Q1",
            },
            {
              icon: Braces,
              title: "Coding Round",
              content: "February 23 to 25, 2025 Bring your ideas to life with intense coding and submit your project at KrafX-Q1",
            },
            {
              icon: Lightbulb,
              title: "Mentoring Session",
              content: "February 24, 2025 Get expert guidance to refine and improve your project at D3 Block, Chandigarh University",
            },
            {
              icon: PartyPopper,
              title: "Grand Finale",
              content: "February 26, 2025 Final presentations, winners announcement, and prize distribution ceremony at D1 Seminar Hall, Chandigarh University.",
            },
            {
              icon: Bell,
              title: "Stay Tuned",
              content: "Keep an eye on your email for updates, schedule information, and any last-minute announcements.",
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
        <h2 className="text-2xl md:text-2xl font-semibold mb-6 md:mb-8 text-center text-white">Stay Updated</h2>
          <p className="text-gray-300 mb-4 md:mb-6">For any queries, reach out to us at info@kraftechnologies.com</p>
          <p className="text-gray-300 mb-4 md:mb-6">Keep an eye on your email and our official channels for important updates, schedules, and announcements.</p>
          <p className="text-gray-300 mb-4 md:mb-6">Get ready to innovate, collaborate, and compete at Kraf Think 2025! 🚀🔥</p>
        </div>
      </div>
    </div>
  );
}