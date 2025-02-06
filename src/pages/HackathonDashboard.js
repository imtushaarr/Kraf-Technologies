// import React, { useEffect, useState } from "react";
// import { db } from "../services/firebase";
// import { collection, getDocs, doc, getDoc, orderBy, query } from "firebase/firestore";
// import { FaUserTie, FaUsers } from "react-icons/fa";
// import { MdClose, MdLaptop } from "react-icons/md";

// const HackathonDashboard = () => {
//     const [applications, setApplications] = useState([]);
//     const [filteredApplications, setFilteredApplications] = useState([]);
//     const [currentPage, setCurrentPage] = useState(0);
//     const [selectedApplication, setSelectedApplication] = useState(null);
//     const applicationsPerPage = 10;
//     const [isMobile, setIsMobile] = useState(false);

    // useEffect(() => {
    //     if (window.innerWidth < 1024) {
    //         setIsMobile(true);
    //     }
    // }, []);

    // useEffect(() => {
    //     const fetchApplications = async () => {
    //         const applicationsRef = collection(db, "hackathon_registrations");
    //         const q = query(applicationsRef, orderBy("timestamp", "desc"));
    //         const snapshot = await getDocs(q);
            
    //         const apps = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    //         setApplications(apps);
    //         setFilteredApplications(apps);
    //     };
    //     fetchApplications();
    // }, []);

    // const displayApplications = filteredApplications.slice(currentPage * applicationsPerPage, (currentPage + 1) * applicationsPerPage);

    // const viewDetails = async (id) => {
    //     const docRef = doc(db, "hackathon_registrations", id);
    //     const docSnap = await getDoc(docRef);
    //     if (docSnap.exists()) {
    //         setSelectedApplication(docSnap.data());
    //     }
    // };

    // const closeModal = () => {
    //     setSelectedApplication(null);
    // };

    // const searchApplications = (event) => {
    //     const searchTerm = event.target.value.toLowerCase();
    //     setFilteredApplications(applications.filter(app =>
    //         app.teamLeader.name.toLowerCase().includes(searchTerm) ||
    //         app.problemStatement.toLowerCase().includes(searchTerm)
    //     ));
    //     setCurrentPage(0);
    // };

    // if (isMobile) {
    //     return (
    //         <div className="flex items-center justify-center min-h-screen bg-black text-white">
    //             <div className="text-center">
    //                 <MdLaptop className="text-6xl mx-auto text-gray-500" />
    //                 <p className="text-lg mt-4">This dashboard is best viewed on a laptop/PC.</p>
    //             </div>
    //         </div>
    //     );
    // }

//     return (
//         <div className="bg-black text-white min-h-screen p-6">
//             <h1 className="text-3xl font-bold text-center">KRAF THINK 2025 HACKATHON APPLICATIONS</h1>
            // <div className="flex justify-between items-center my-4">
            //     <input 
            //         type="text" 
            //         placeholder="Search Applications..." 
            //         className="p-3 bg-gray-800 rounded-md w-full max-w-xs" 
            //         onChange={searchApplications}
            //     />
            // </div>
            // <div className="space-y-4">
            //     {displayApplications.length ? displayApplications.map(app => (
            //         <div key={app.id} className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition">
            //             <h2 className="text-xl font-semibold flex items-center gap-2"><FaUserTie /> {app.teamLeader.name}</h2>
            //             <p className="text-gray-400">Problem: {app.problemStatement}</p>
            //             <button onClick={() => viewDetails(app.id)} className="mt-3 bg-blue-600 px-4 py-2 rounded hover:bg-blue-500">
            //                 View Details
            //             </button>
            //         </div>
            //     )) : <p className="text-center text-gray-400">No applications found.</p>}
            // </div>
            // <div className="flex justify-center gap-4 mt-6">
            //     <button 
            //         className={`px-4 py-2 rounded ${currentPage > 0 ? 'bg-blue-600 hover:bg-blue-500' : 'bg-gray-700 cursor-not-allowed'}`} 
            //         disabled={currentPage === 0} 
            //         onClick={() => setCurrentPage(prev => prev - 1)}
            //     >Previous</button>
            //     <button 
            //         className={`px-4 py-2 rounded ${(currentPage + 1) * applicationsPerPage < filteredApplications.length ? 'bg-blue-600 hover:bg-blue-500' : 'bg-gray-700 cursor-not-allowed'}`} 
            //         disabled={(currentPage + 1) * applicationsPerPage >= filteredApplications.length} 
            //         onClick={() => setCurrentPage(prev => prev + 1)}
            //     >Next</button>
            // </div>
            // {selectedApplication && (
            //     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            //         <div className="bg-gray-800 p-6 rounded-lg max-w-3xl w-full relative overflow-y-auto max-h-[80vh]">
            //             <button className="absolute top-4 right-4 text-red-600 text-xl" onClick={closeModal}><MdClose /></button>
            //             <h2 className="text-2xl font-bold flex items-center gap-2"><FaUsers /> {selectedApplication.teamName}</h2>
            //             <h3 className="mt-4 text-lg font-semibold">Team Leader:</h3>
            //             <p>{selectedApplication.teamLeader.name}</p>
            //             <p>{selectedApplication.teamLeader.email}</p>
            //             <p>{selectedApplication.teamLeader.mobile}</p>
            //             <p>{selectedApplication.teamLeader.universityName} ({selectedApplication.teamLeader.universityId})</p>
            //             <p>{selectedApplication.teamLeader.branch}, Sem {selectedApplication.teamLeader.currentSemester}, Passing {selectedApplication.teamLeader.passingYear}</p>
            //             <h3 className="mt-4 text-lg font-semibold">Team Members:</h3>
            //             <ul>
            //                 {selectedApplication.teamMembers.map((member, index) => (
            //                     <li key={index} className="border-b border-gray-600 py-2">
            //                         {member.name} | {member.email} | {member.mobile}
            //                         <br/> {member.universityName} ({member.universityId})
            //                         <br/> {member.branch}, Sem {member.currentSemester}, Passing {member.passingYear}
            //                     </li>
            //                 ))}
            //             </ul>
            //             <h3 className="mt-4 text-lg font-semibold">Problem Statement:</h3>
            //             <p>{selectedApplication.problemStatement}</p>
            //         </div>
            //     </div>
            // )}
//         </div>
//     );
// };

// export default HackathonDashboard;

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../services/firebase";
import { collection, getDocs, doc, getDoc, orderBy, query } from "firebase/firestore";
import { FaUserTie, FaUsers } from "react-icons/fa";
import { MdClose, MdLaptop } from "react-icons/md";

const HackathonDashboard = () => {
    const navigate = useNavigate();
    const [applications, setApplications] = useState([]);
    const [filteredApplications, setFilteredApplications] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [selectedApplication, setSelectedApplication] = useState(null);
    const applicationsPerPage = 10;
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Check authentication
        if (!localStorage.getItem("adminAuth")) {
            navigate("/admin-hackathon-dashboard");
        }

        if (window.innerWidth < 1024) {
            setIsMobile(true);
        }
    }, [navigate]);

    useEffect(() => {
        if (window.innerWidth < 1024) {
            setIsMobile(true);
        }
    }, []);

    useEffect(() => {
        const fetchApplications = async () => {
            const applicationsRef = collection(db, "hackathon_registrations");
            const q = query(applicationsRef, orderBy("timestamp", "desc"));
            const snapshot = await getDocs(q);
            
            const apps = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setApplications(apps);
            setFilteredApplications(apps);
        };
        fetchApplications();
    }, []);

    const displayApplications = filteredApplications.slice(currentPage * applicationsPerPage, (currentPage + 1) * applicationsPerPage);

    const viewDetails = async (id) => {
        const docRef = doc(db, "hackathon_registrations", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            setSelectedApplication(docSnap.data());
        }
    };

    useEffect(() => {
        const fetchApplications = async () => {
            const applicationsRef = collection(db, "hackathon_registrations");
            const q = query(applicationsRef, orderBy("timestamp", "desc"));
            const snapshot = await getDocs(q);
            
            const apps = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setApplications(apps);
            setFilteredApplications(apps);
        };
        fetchApplications();
    }, []);

    const logout = () => {
        localStorage.removeItem("adminAuth");
        navigate("/admin-hackathon-dashboard");
    };


    const searchApplications = (event) => {
        const searchTerm = event.target.value.toLowerCase();
        setFilteredApplications(applications.filter(app =>
            app.teamLeader.name.toLowerCase().includes(searchTerm) ||
            app.problemStatement.toLowerCase().includes(searchTerm)
        ));
        setCurrentPage(0);
    };

    if (isMobile) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-black text-white">
                <div className="text-center">
                    <MdLaptop className="text-6xl mx-auto text-gray-500" />
                    <p className="text-lg mt-4">This dashboard is best viewed on a laptop/PC.</p>
                </div>
            </div>
        );
    }

    const closeModal = () => {
        setSelectedApplication(null);
    };

    return (
        <div className="bg-black text-white min-h-screen p-6">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold">KRAF THINK 2025 HACKATHON APPLICATIONS</h1>
                <button onClick={logout} className="bg-red-600 px-4 py-2 rounded hover:bg-red-500">
                    Logout
                </button>
            </div>
            <div className="flex justify-between items-center my-4">
                <input 
                    type="text" 
                    placeholder="Search Applications..." 
                    className="p-3 bg-gray-800 rounded-md w-full max-w-xs" 
                    onChange={searchApplications}
                />
            </div>
            <div className="space-y-4">
                {displayApplications.length ? displayApplications.map(app => (
                    <div key={app.id} className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition">
                        <h2 className="text-xl font-semibold flex items-center gap-2"><FaUserTie /> {app.teamLeader.name}</h2>
                        <p className="text-gray-400">Problem: {app.problemStatement}</p>
                        <button onClick={() => viewDetails(app.id)} className="mt-3 bg-blue-600 px-4 py-2 rounded hover:bg-blue-500">
                            View Details
                        </button>
                    </div>
                )) : <p className="text-center text-gray-400">No applications found.</p>}
            </div>
            <div className="flex justify-center gap-4 mt-6">
                <button 
                    className={`px-4 py-2 rounded ${currentPage > 0 ? 'bg-blue-600 hover:bg-blue-500' : 'bg-gray-700 cursor-not-allowed'}`} 
                    disabled={currentPage === 0} 
                    onClick={() => setCurrentPage(prev => prev - 1)}
                >Previous</button>
                <button 
                    className={`px-4 py-2 rounded ${(currentPage + 1) * applicationsPerPage < filteredApplications.length ? 'bg-blue-600 hover:bg-blue-500' : 'bg-gray-700 cursor-not-allowed'}`} 
                    disabled={(currentPage + 1) * applicationsPerPage >= filteredApplications.length} 
                    onClick={() => setCurrentPage(prev => prev + 1)}
                >Next</button>
            </div>
            {selectedApplication && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-gray-800 p-6 rounded-lg max-w-3xl w-full relative overflow-y-auto max-h-[80vh]">
                        <button className="absolute top-4 right-4 text-red-600 text-xl" onClick={closeModal}><MdClose /></button>
                        <h2 className="text-2xl font-bold flex items-center gap-2"><FaUsers /> {selectedApplication.teamName}</h2>
                        <h3 className="mt-4 text-lg font-semibold">Team Leader:</h3>
                        <p>{selectedApplication.teamLeader.name}</p>
                        <p>{selectedApplication.teamLeader.email}</p>
                        <p>{selectedApplication.teamLeader.mobile}</p>
                        <p>{selectedApplication.teamLeader.universityName} ({selectedApplication.teamLeader.universityId})</p>
                        <p>{selectedApplication.teamLeader.branch}, Sem {selectedApplication.teamLeader.currentSemester}, Passing {selectedApplication.teamLeader.passingYear}</p>
                        <h3 className="mt-4 text-lg font-semibold">Team Members:</h3>
                        <ul>
                            {selectedApplication.teamMembers.map((member, index) => (
                                <li key={index} className="border-b border-gray-600 py-2">
                                    {member.name} | {member.email} | {member.mobile}
                                    <br/> {member.universityName} ({member.universityId})
                                    <br/> {member.branch}, Sem {member.currentSemester}, Passing {member.passingYear}
                                </li>
                            ))}
                        </ul>
                        <h3 className="mt-4 text-lg font-semibold">Problem Statement:</h3>
                        <p>{selectedApplication.problemStatement}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default HackathonDashboard;