// import { useState } from "react";
// import { db } from "../services/firebase";
// import { collection, query, where, getDocs, addDoc } from "firebase/firestore";
// import { FaUser, FaEnvelope, FaPhone, FaFileUpload } from "react-icons/fa";
// import { motion } from "framer-motion";

// export default function SubmissionForm() {
//     const [step, setStep] = useState(1);
//     const [teamLeader, setTeamLeader] = useState({
//         teamName: "",
//         name: "",
//         email: "",
//         phone: ""
//     });
//     const [teamDetails, setTeamDetails] = useState(null);
//     const [problemStatement, setProblemStatement] = useState("");
//     const [pptLink, setPptLink] = useState("");
//     const [loading, setLoading] = useState(false);

//     const handleVerifyTeam = async (e) => {
//         e.preventDefault();
//         setLoading(true);
//         try {
//             const q = query(
//                 collection(db, "hackathon_registrations"),
//                 where("teamLeader.email", "==", teamLeader.email),
//                 where("teamLeader.mobile", "==", teamLeader.phone)
//             );
            
//             const querySnapshot = await getDocs(q);
//             if (!querySnapshot.empty) {
//                 const data = querySnapshot.docs[0].data();
//                 setTeamDetails(data);
//                 setProblemStatement(data.problemStatement);
//                 setStep(2);
//             } else {
//                 alert("No matching team found. Please check your details.");
//             }
//         } catch (error) {
//             console.error("Error fetching team data:", error);
//             alert("Error verifying team. Try again.");
//         }
//         setLoading(false);
//     };

//     const handleSubmitPpt = async (e) => {
//         e.preventDefault();
//         if (!pptLink) {
//             alert("Please enter the PPT link.");
//             return;
//         }
//         try {
//             setLoading(true);
//             await addDoc(collection(db, "ppt_submission"), {
//                 teamName: teamDetails.teamName,
//                 teamLeader: teamDetails.teamLeader.name,
//                 email: teamDetails.teamLeader.email,
//                 phone: teamDetails.teamLeader.mobile,
//                 problemStatement: problemStatement,
//                 pptLink: pptLink,
//                 timestamp: new Date()
//             });
//             alert("PPT Submitted Successfully!");
//             setStep(1);
//         } catch (error) {
//             console.error("Error submitting PPT:", error);
//             alert("Error submitting. Try again.");
//         }
//         setLoading(false);
//     };

//     return (
//         <div className="flex items-center justify-center min-h-screen bg-black text-white">
//             <motion.div 
//                 initial={{ opacity: 0, scale: 0.9 }} 
//                 animate={{ opacity: 1, scale: 1 }} 
//                 transition={{ duration: 0.5 }}
//                 className="p-8 rounded-xl shadow-xl backdrop-blur-lg bg-gray-800 w-full max-w-lg border border-gray-700"
//             >
//                 {step === 1 && (
//                     <form onSubmit={handleVerifyTeam} className="space-y-5">
//                         <h2 className="text-2xl font-bold text-green-400 text-center">Step 1: Verify Team</h2>
//                         <div className="flex items-center space-x-3 bg-gray-700 p-3 rounded-lg">
//                             <FaUser className="text-green-400" />
//                             <input type="text" placeholder="Team Name" className="bg-transparent outline-none flex-1 text-white placeholder-gray-400" value={teamLeader.teamName} onChange={(e) => setTeamLeader({ ...teamLeader, teamName: e.target.value })} required />
//                         </div>
//                         <div className="flex items-center space-x-3 bg-gray-700 p-3 rounded-lg">
//                             <FaEnvelope className="text-green-400" />
//                             <input type="email" placeholder="Leader Email" className="bg-transparent outline-none flex-1 text-white placeholder-gray-400" value={teamLeader.email} onChange={(e) => setTeamLeader({ ...teamLeader, email: e.target.value })} required />
//                         </div>
//                         <div className="flex items-center space-x-3 bg-gray-700 p-3 rounded-lg">
//                             <FaPhone className="text-green-400" />
//                             <input type="text" placeholder="Leader Phone No" className="bg-transparent outline-none flex-1 text-white placeholder-gray-400" value={teamLeader.phone} onChange={(e) => setTeamLeader({ ...teamLeader, phone: e.target.value })} required />
//                         </div>
//                         <button type="submit" className="w-full py-2 rounded-lg bg-green-400 text-gray-900 font-bold hover:bg-green-500 transition duration-200" disabled={loading}>{loading ? "Verifying..." : "Next"}</button>
//                     </form>
//                 )}

//                 {step === 2 && teamDetails && (
//                     <form onSubmit={handleSubmitPpt} className="space-y-5">
//                         <h2 className="text-2xl font-bold text-green-400 text-center">Step 2: Submit PPT</h2>
//                         <p><strong>Team Name:</strong> {teamDetails.teamName}</p>
//                         <p><strong>Problem Statement:</strong> {problemStatement}</p>
//                         <div className="flex items-center space-x-3 bg-gray-700 p-3 rounded-lg">
//                             <FaFileUpload className="text-green-400" />
//                             <input type="url" placeholder="Enter PPT Link" className="bg-transparent outline-none flex-1 text-white placeholder-gray-400" value={pptLink} onChange={(e) => setPptLink(e.target.value)} required />
//                         </div>
//                         <button type="submit" className="w-full py-2 rounded-lg bg-green-400 text-gray-900 font-bold hover:bg-green-500 transition duration-200" disabled={loading}>{loading ? "Submitting..." : "Submit"}</button>
//                     </form>
//                 )}
//             </motion.div>
//         </div>
//     );
// }



import { useState } from "react";
import { db } from "../services/firebase";
import { collection, query, where, getDocs, addDoc } from "firebase/firestore";
import { FaUser, FaEnvelope, FaPhone, FaFileUpload, FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";

export default function SubmissionForm() {
    const [step, setStep] = useState(1);
    const [teamLeader, setTeamLeader] = useState({
        teamName: "",
        name: "",
        email: "",
        phone: ""
    });
    const [teamDetails, setTeamDetails] = useState(null);
    const [problemStatement, setProblemStatement] = useState("");
    const [pptLink, setPptLink] = useState("");
    const [loading, setLoading] = useState(false);

    const handleVerifyTeam = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const q = query(
                collection(db, "hackathon_registrations"),
                where("teamLeader.email", "==", teamLeader.email),
                where("teamLeader.mobile", "==", teamLeader.phone)
            );
            
            const querySnapshot = await getDocs(q);
            if (!querySnapshot.empty) {
                const data = querySnapshot.docs[0].data();
                setTeamDetails(data);
                setProblemStatement(data.problemStatement);
                setStep(2);
            } else {
                alert("No matching team found. Please check your details.");
            }
        } catch (error) {
            console.error("Error fetching team data:", error);
            alert("Error verifying team. Try again.");
        }
        setLoading(false);
    };

    const handleSubmitPpt = async (e) => {
        e.preventDefault();
        if (!pptLink) {
            alert("Please enter the PPT link.");
            return;
        }
        try {
            setLoading(true);
            await addDoc(collection(db, "ppt_submission"), {
                teamName: teamDetails.teamName,
                teamLeader: teamDetails.teamLeader.name,
                email: teamDetails.teamLeader.email,
                phone: teamDetails.teamLeader.mobile,
                problemStatement: problemStatement,
                pptLink: pptLink,
                timestamp: new Date()
            });
            alert("PPT Submitted Successfully!");
            setStep(1);
        } catch (error) {
            console.error("Error submitting PPT:", error);
            alert("Error submitting. Try again.");
        }
        setLoading(false);
    };

    return (
        <div className="flex flex-col gap-8 md:flex-row items-center justify-center min-h-screen bg-black text-white px-4 md:px-12">
            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ duration: 0.5 }}
                className="w-full md:w-1/2 p-8 rounded-xl shadow-xl backdrop-blur-lg bg-gray-800 border border-gray-700"
            >
                {step === 1 && (
                    <form onSubmit={handleVerifyTeam} className="space-y-5">
                        <h2 className="text-2xl font-bold text-white text-center">Step 1: Verify Team</h2>
                        <div className="flex items-center space-x-3 bg-gray-700 p-3 rounded-lg">
                            <FaUser className="text-green-400" />
                            <input type="text" placeholder="Team Name" className="bg-transparent outline-none flex-1 text-white placeholder-gray-400" value={teamLeader.teamName} onChange={(e) => setTeamLeader({ ...teamLeader, teamName: e.target.value })} required />
                        </div>
                        <div className="flex items-center space-x-3 bg-gray-700 p-3 rounded-lg">
                            <FaEnvelope className="text-green-400" />
                            <input type="email" placeholder="Leader Email" className="bg-transparent outline-none flex-1 text-white placeholder-gray-400" value={teamLeader.email} onChange={(e) => setTeamLeader({ ...teamLeader, email: e.target.value })} required />
                        </div>
                        <div className="flex items-center space-x-3 bg-gray-700 p-3 rounded-lg">
                            <FaPhone className="text-green-400" />
                            <input type="text" placeholder="Leader Phone No" className="bg-transparent outline-none flex-1 text-white placeholder-gray-400" value={teamLeader.phone} onChange={(e) => setTeamLeader({ ...teamLeader, phone: e.target.value })} required />
                        </div>
                        <button type="submit" className="w-full py-2 rounded-lg bg-green-400 text-gray-900 font-semibold hover:bg-green-500 transition duration-200" disabled={loading}>{loading ? "Verifying..." : "Next"}</button>
                    </form>
                )}

                {step === 2 && teamDetails && (
                    <form onSubmit={handleSubmitPpt} className="space-y-5">
                        <h2 className="text-2xl font-bold text-green-400 text-center">Step 2: Submit PPT</h2>
                        <p><strong>Team Name:</strong> {teamDetails.teamName}</p>
                        <p><strong>Problem Statement:</strong> {problemStatement}</p>
                        <div className="flex items-center space-x-3 bg-gray-700 p-3 rounded-lg">
                            <FaFileUpload className="text-green-400" />
                            <input type="url" placeholder="Enter PPT Link" className="bg-transparent outline-none flex-1 text-white placeholder-gray-400" value={pptLink} onChange={(e) => setPptLink(e.target.value)} required />
                        </div>
                        <button type="submit" className="w-full py-2 rounded-lg bg-green-400 text-gray-900 font-bold hover:bg-green-500 transition duration-200" disabled={loading}>{loading ? "Submitting..." : "Submit"}</button>
                    </form>
                )}
            </motion.div>
            <div className="w-full md:w-1/2 p-8 relative">

        {/* Background Blur Effect */}
            <div className="absolute inset-0 bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-xl"></div>

                <div className="relative z-10 text-white text-center md:text-left p-6 rounded-xl border border-gray-700 shadow-lg bg-gray-900 bg-opacity-80">
                    <h2 className="text-3xl font-bold text-white flex items-center justify-center md:justify-start gap-2">
                    PPT Submission Guidelines
                    </h2>
                    <ul className="mt-6 text-gray-300 space-y-4">
                        <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-green-400" /> The registered email & phone number must match the details used during hackathon registration.
                        </li>
                        <li className="flex items-center gap-2">
                            <FaCheckCircle className="text-green-400" /> Ensure your PPT is in Google Drive with view access.
                        </li>
                        <li className="flex items-center gap-2">
                            <FaCheckCircle className="text-green-400" /> Follow the hackathon format for slides.
                        </li>
                        <li className="flex items-center gap-2">
                            <FaCheckCircle className="text-green-400" /> No plagiarism; original content only.
                        </li>
                        <li className="flex items-center gap-2">
                            <FaCheckCircle className="text-green-400" /> Submit before the deadline.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}