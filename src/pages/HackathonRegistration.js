import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { db, collection, addDoc } from "../services/firebase";
import { Trophy, Users, Brain, Rocket } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function RegistrationForm() {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [teamSize, setTeamSize] = useState(3);
    const [teamLeader, setTeamLeader] = useState({
        teamName: "",
        name: "",
        email: "",
        mobile: "",
        universityId: "",
        universityName: "Chandigarh University",
        branch: "",
        currentSemester: "",
        passingYear: "",
    });
    const [teamMembers, setTeamMembers] = useState([]);
    const [problemStatement, setProblemStatement] = useState({
        selectedStatement: "",
        customStatement: "",
    });
    const [loading, setLoading] = useState(false);

    const resetForm = () => {
        setTeamLeader({
            teamName: "",
            name: "",
            email: "",
            mobile: "",
            universityId: "",
            universityName: "Chandigarh University",
            branch: "",
            currentSemester: "",
            passingYear: "",
        });
        setTeamMembers([]);
        setProblemStatement({ selectedStatement: "", customStatement: "" });
    };

    const handleTeamLeaderSubmit = (e) => {
        e.preventDefault();
        setStep(2);
    };

    const handleTeamSizeSubmit = (e) => {
        e.preventDefault();
        setTeamMembers(
            Array(teamSize - 1).fill({
                name: "",
                email: "",
                mobile: "",
                universityId: "",
                universityName: "Chandigarh University",
                branch: "",
                currentSemester: "",
                passingYear: "",
            })
        );
        setStep(3);
    };

    const updateTeamMember = (index, field, value) => {
        const updatedMembers = [...teamMembers];
        updatedMembers[index] = { ...updatedMembers[index], [field]: value };
        setTeamMembers(updatedMembers);
    };

    const handleMembersSubmit = (e) => {
        e.preventDefault();
        setStep(4);
    };

    const handleFinalSubmit = async (e) => {
        e.preventDefault();

        if (!problemStatement.selectedStatement && !problemStatement.customStatement) {
            alert("Please select a problem statement or provide your own.");
            return;
        }

        try {
            setLoading(true);
            localStorage.setItem("teamLeaderName", teamLeader.name);
            
            await addDoc(collection(db, "hackathon_registrations"), {
                teamName: teamLeader.teamName,
                teamLeader,
                teamMembers,
                problemStatement: problemStatement.selectedStatement || problemStatement.customStatement,
                timestamp: new Date(),
            });

            resetForm();
            navigate("/kraf-think-2025/thank-you");
        } catch (error) {
            console.error("Error adding document: ", error);
            alert("Error in registration. Try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-black text-gray-300 py-12 px-4">
            <div className="container max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-[1.2fr,1fr] gap-12">
                    <div>
                        <div className="bg-gray-900 shadow-xl rounded-lg overflow-hidden">
                            <div className="p-8">
                            <AnimatePresence mode="wait">
                            <motion.div
                                key={step}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.3 }}
                            >
                                        <div className="text-center space-y-2">
                                            <h2 className="text-3xl font-bold text-white">Kraf Think 2025 Registration</h2>
                                            <div className="flex justify-center mb-12">
                                            {[1, 2, 3, 4].map((num) => (
                                                <div key={num} className="flex items-center">
                                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center 
                                                        ${step >= num ? "bg-[#18CB96] text-black" : "bg-gray-700"}`}>
                                                        {num}
                                                    </div>
                                                    {num < 4 && <div className={`h-1 w-16 ${step > num ? "bg-[#18CB96]" : "bg-gray-700"}`} />}
                                                </div>
                                            ))}
                                            </div>
                                        </div>

                                        {/* Step 1: Team Leader Details */}
                                        {step === 1 && (
                                            <form onSubmit={handleTeamLeaderSubmit} className="space-y-2">
                                                <div className="mt-4">
                                                    <label className="text-sm text-white">Team Name</label>
                                                    <input
                                                        type="text"
                                                        placeholder="Enter Team Name"
                                                        className="w-full bg-gray-800 border-2 border-gray-700 text-white px-4 py-2 rounded-md focus:outline-none focus:border-[#18CB96] transition duration-300"
                                                        value={teamLeader.teamName}
                                                        onChange={(e) => setTeamLeader({ ...teamLeader, teamName: e.target.value })}
                                                        required
                                                    />
                                                </div>

                                                <div className="mt-4">
                                                    <label className="text-sm text-white">Leader Name</label>
                                                    <input
                                                        type="text"
                                                        placeholder="Enter Full Name"
                                                        className="w-full bg-gray-800 border-2 border-gray-700 text-white px-4 py-2 rounded-md focus:outline-none focus:border-[#18CB96] transition duration-300"
                                                        value={teamLeader.name}
                                                        onChange={(e) => setTeamLeader({ ...teamLeader, name: e.target.value })}
                                                        required
                                                    />
                                                </div>

                                                <div className="mt-4">
                                                    <label className="text-sm text-white">Email</label>
                                                    <input
                                                        type="email"
                                                        placeholder="user@example.com"
                                                        className="w-full bg-gray-800 border-2 border-gray-700 text-white px-4 py-2 rounded-md focus:outline-none focus:border-[#18CB96] transition duration-300"
                                                        value={teamLeader.email}
                                                        onChange={(e) => setTeamLeader({ ...teamLeader, email: e.target.value })}
                                                        required
                                                    />
                                                </div>

                                                <div className="mt-4">
                                                    <label className="text-sm text-white">Mobile Number</label>
                                                    <input
                                                        type="tel"
                                                        pattern="[0-9]{10}"
                                                        placeholder="8839XXXXX59"
                                                        className="w-full bg-gray-800 border-2 border-gray-700 text-white px-4 py-2 rounded-md focus:outline-none focus:border-[#18CB96] transition duration-300"
                                                        value={teamLeader.mobile}
                                                        onChange={(e) => setTeamLeader({ ...teamLeader, mobile: e.target.value })}
                                                        required
                                                    />
                                                </div>

                                                <div className="mt-4">
                                                    <label className="text-sm text-white">University UID</label>
                                                    <input
                                                        type="text"
                                                        placeholder="21XXX51"
                                                        className="w-full bg-gray-800 border-2 border-gray-700 text-white px-4 py-2 rounded-md focus:outline-none focus:border-[#18CB96] transition duration-300"
                                                        value={teamLeader.universityId}
                                                        onChange={(e) => setTeamLeader({ ...teamLeader, universityId: e.target.value })}
                                                        required
                                                    />
                                                </div>

                                                <div className="mt-4">
                                                    <label className="text-sm text-white">University Name</label>
                                                    <input
                                                        placeholder="Chandigarh University"
                                                        className="w-full bg-gray-800 border-2 border-gray-700 text-white px-4 py-2 rounded-md focus:outline-none focus:border-[#18CB96] transition duration-300"
                                                        value={teamLeader.universityName}
                                                        readOnly
                                                        required
                                                    />
                                                </div>

                                                <div className="mt-4">
                                                    <label className="text-sm text-white">Branch</label>
                                                    <input
                                                        type="text"
                                                        placeholder="Bachelor of Technology"
                                                        className="w-full bg-gray-800 border-2 border-gray-700 text-white px-4 py-2 rounded-md focus:outline-none focus:border-[#18CB96] transition duration-300"
                                                        value={teamLeader.branch}
                                                        onChange={(e) => setTeamLeader({ ...teamLeader, branch: e.target.value })}
                                                        required
                                                    />
                                                </div>

                                                <div className="mt-4">
                                                    <label className="text-sm text-white">Current Semester</label>
                                                    <input
                                                        type="number"
                                                        placeholder="7"
                                                        className="w-full bg-gray-800 border-2 border-gray-700 text-white px-4 py-2 rounded-md focus:outline-none focus:border-[#18CB96] transition duration-300"
                                                        value={teamLeader.currentSemester}
                                                        onChange={(e) => setTeamLeader({ ...teamLeader, currentSemester: e.target.value })}
                                                        required
                                                    />
                                                </div>

                                                <div className="mt-4">
                                                    <label className="text-sm text-white">Passing Year</label>
                                                    <input
                                                        type="number"
                                                        placeholder="2026"
                                                        className="w-full bg-gray-800 border-2 border-gray-700 text-white px-4 py-2 rounded-md focus:outline-none focus:border-[#18CB96] transition duration-300"
                                                        value={teamLeader.passingYear}
                                                        onChange={(e) => setTeamLeader({ ...teamLeader, passingYear: e.target.value })}
                                                        required
                                                    />
                                                </div>

                                                <button type="submit" className="w-full bg-[#18CB96] py-2 rounded-md text-black">
                                                    Next Step
                                                </button>
                                            </form>
                                        )}

                                        {/* Step 2: Team Size Selection */}
                                        {step === 2 && (
                                            <form onSubmit={handleTeamSizeSubmit} className="space-y-6">
                                                <select
                                                    value={teamSize}
                                                    onChange={(e) => setTeamSize(parseInt(e.target.value))}
                                                    className="w-full mt-6 bg-gray-800 border-2 border-gray-700 text-white px-4 py-2 rounded-md focus:outline-none focus:border-[#18CB96] transition duration-300"
                                                >
                                                    <option value="3">3 Members</option>
                                                    <option value="4">4 Members</option>
                                                    <option value="5">5 Members</option>
                                                </select>
                                                <div className="flex gap-4">
                                                    <button type="submit" className="w-full bg-[#18CB96] py-2 rounded-md text-black">
                                                        Next Step
                                                    </button>
                                                    <button
                                                        type="button"
                                                        onClick={() => setStep(1)}
                                                        className="w-full bg-gray-600 py-2 rounded-md text-black"
                                                    >
                                                        Previous
                                                    </button>
                                                </div>
                                            </form>
                                        )}

                                        {/* Step 3: Team Member Details */}
                                        {step === 3 && (
                                            <form onSubmit={handleMembersSubmit} className="space-y-8">
                                                {teamMembers.map((member, index) => (
                                                    <div key={index} className="space-y-4">
                                                        <div className="mt-4">
                                                            <label className="text-sm text-white">{`Member ${index + 1} Name`}</label>
                                                            <input
                                                                type="text"
                                                                placeholder="Enter Full Name"
                                                                className="w-full bg-gray-800 border-2 border-gray-700 text-white px-4 py-2 rounded-md focus:outline-none focus:border-[#18CB96] transition duration-300"
                                                                onChange={(e) => updateTeamMember(index, "name", e.target.value)}
                                                                required
                                                            />
                                                        </div>

                                                        <div className="mt-4">
                                                            <label className="text-sm text-white">{`Member ${index + 1} Email`}</label>
                                                            <input
                                                                type="email"
                                                                placeholder="user@example.com"
                                                                className="w-full bg-gray-800 border-2 border-gray-700 text-white px-4 py-2 rounded-md focus:outline-none focus:border-[#18CB96] transition duration-300"
                                                                onChange={(e) => updateTeamMember(index, "email", e.target.value)}
                                                                required
                                                            />
                                                        </div>

                                                        <div className="mt-4">
                                                            <label className="text-sm text-white">{`Member ${index + 1} Mobile`}</label>
                                                            <input
                                                                type="tel"
                                                                placeholder="8839XXXXX59"
                                                                pattern="[0-9]{10}"
                                                                className="w-full bg-gray-800 border-2 border-gray-700 text-white px-4 py-2 rounded-md focus:outline-none focus:border-[#18CB96] transition duration-300"
                                                                onChange={(e) => updateTeamMember(index, "mobile", e.target.value)}
                                                                required
                                                            />
                                                        </div>

                                                        <div className="mt-4">
                                                            <label className="text-sm text-white">{`Member ${index + 1} University UID`}</label>
                                                            <input
                                                                type="text"
                                                                placeholder="21XXX51"
                                                                className="w-full bg-gray-800 border-2 border-gray-700 text-white px-4 py-2 rounded-md focus:outline-none focus:border-[#18CB96] transition duration-300"
                                                                onChange={(e) => updateTeamMember(index, "universityId", e.target.value)}
                                                                required
                                                            />
                                                        </div>

                                                        <div className="mt-4">
                                                            <label className="text-sm text-white">{`Member ${index + 1} University Name`}</label>
                                                            <input
                                                                placeholder="Chandigarh University"
                                                                className="w-full bg-gray-800 border-2 border-gray-700 text-white px-4 py-2 rounded-md focus:outline-none focus:border-[#18CB96] transition duration-300"
                                                                readOnly
                                                                required
                                                            />
                                                        </div>

                                                        <div className="mt-4">
                                                            <label className="text-sm text-white">{`Member ${index + 1} Branch`}</label>
                                                            <input
                                                                type="text"
                                                                placeholder="Bachelor of Engineering"
                                                                className="w-full bg-gray-800 border-2 border-gray-700 text-white px-4 py-2 rounded-md focus:outline-none focus:border-[#18CB96] transition duration-300"
                                                                onChange={(e) => updateTeamMember(index, "branch", e.target.value)}
                                                                required
                                                            />
                                                        </div>

                                                        <div className="mt-4">
                                                            <label className="text-sm text-white">{`Member ${index + 1} Current Semester`}</label>
                                                            <input
                                                                type="number"
                                                                placeholder="7"
                                                                className="w-full bg-gray-800 border-2 border-gray-700 text-white px-4 py-2 rounded-md focus:outline-none focus:border-[#18CB96] transition duration-300"
                                                                onChange={(e) => updateTeamMember(index, "currentSemester", e.target.value)}
                                                                required
                                                            />
                                                        </div>

                                                        <div className="mt-4">
                                                            <label className="text-sm text-white">{`Member ${index + 1} Passing Year`}</label>
                                                            <input
                                                                type="number"
                                                                placeholder="2026"
                                                                className="w-full bg-gray-800 border-2 border-gray-700 text-white px-4 py-2 rounded-md focus:outline-none focus:border-[#18CB96] transition duration-300"
                                                                onChange={(e) => updateTeamMember(index, "passingYear", e.target.value)}
                                                                required
                                                            />
                                                        </div>
                                                    </div>
                                                ))}
                                                <div className="flex gap-4">
                                                    <button type="submit" className="w-full bg-[#18CB96] py-2 rounded-md text-black">
                                                        Next Step
                                                    </button>
                                                    <button
                                                        type="button"
                                                        onClick={() => setStep(2)}
                                                        className="w-full bg-gray-600 py-2 rounded-md text-black"
                                                    >
                                                        Previous
                                                    </button>
                                                </div>
                                            </form>
                                        )}

                                        {/* Step 4: Problem Statement */}
                                        {step === 4 && (
                                            <form onSubmit={handleFinalSubmit} className="space-y-6">
                                                <h3 className="text-2xl font-bold text-white mt-6">Select Problem Statement</h3>
                                                <select
                                                    value={problemStatement.selectedStatement}
                                                    onChange={(e) => setProblemStatement({ ...problemStatement, selectedStatement: e.target.value })}
                                                    className="w-full bg-gray-800 border-2 border-gray-700 text-white px-4 py-2 rounded-md focus:outline-none focus:border-[#18CB96] transition duration-300"
                                                >
                                                    <option value="">Select a Problem Statement</option>
                                                    <option value="AI for Climate Change">AI Solutions for Climate Change</option>
                                                    <option value="Smart Education">Smart Education Systems</option>
                                                    <option value="Healthcare Access">Democratizing Healthcare Access</option>
                                                </select>

                                                <p className="text-center text-gray-400">OR</p>

                                                <textarea
                                                    placeholder="Describe your problem statement"
                                                    value={problemStatement.customStatement}
                                                    onChange={(e) => setProblemStatement({ ...problemStatement, customStatement: e.target.value })}
                                                    className="w-full bg-gray-800 border-2 border-gray-700 text-white px-4 py-2 rounded-md h-32 focus:outline-none focus:border-[#18CB96] transition duration-300"
                                                />

                                                <div className="flex gap-4">
                                                    <button
                                                        type="submit"
                                                        className="w-full bg-[#18CB96] py-2 rounded-md text-black disabled:opacity-50"
                                                        disabled={loading}
                                                    >
                                                        {loading ? "Submitting..." : "Final Submission"}
                                                    </button>
                                                    <button
                                                        type="button"
                                                        onClick={() => setStep(3)}
                                                        className="w-full bg-gray-600 py-2 rounded-md text-black"
                                                    >
                                                        Previous
                                                    </button>
                                                </div>
                                            </form>
                                        )}
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Hackathon Info */}
                    <div className="space-y-8">
                        <div className="text-center bg-gray-900 p-8 rounded-lg shadow-lg space-y-4">
                            <Trophy className="w-12 h-12 mx-auto text-[#18CB96]" />
                            <h3 className="text-2xl font-bold text-white">Prizes</h3>
                            <p className="text-gray-400">Cash prizes, internships, and more!</p>
                        </div>
                        <div className="text-center bg-gray-900 p-8 rounded-lg shadow-lg space-y-4">
                            <Users className="w-12 h-12 mx-auto text-[#18CB96]" />
                            <h3 className="text-2xl font-bold text-white">Team Formation</h3>
                            <p className="text-gray-400">Teams of 3-5 members</p>
                        </div>
                        <div className="text-center bg-gray-900 p-8 rounded-lg shadow-lg space-y-4">
                            <Brain className="w-12 h-12 mx-auto text-[#18CB96]" />
                            <h3 className="text-2xl font-bold text-white">Innovation</h3>
                            <p className="text-gray-400">Submit unique and innovative ideas</p>
                        </div>
                        <div className="text-center bg-gray-900 p-8 rounded-lg shadow-lg space-y-4">
                            <Rocket className="w-12 h-12 mx-auto text-[#18CB96]" />
                            <h3 className="text-2xl font-bold text-white">Fast Track</h3>
                            <p className="text-gray-400">Get direct access to experts and mentors</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}