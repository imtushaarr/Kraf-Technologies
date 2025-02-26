import React from "react";

const teams = [
  { number: "01", name: "Code Busters", leader: "Ujjwal Mishra" },
  { number: "02", name: "SUDO", leader: "Purnendu Ghosh" },
  { number: "03", name: "StolenCoders", leader: "Aditya Sharma" },
  { number: "04", name: "MarkAish", leader: "Parth" },
  { number: "05", name: "Team Elite", leader: "Avin Mehla" },
  { number: "06", name: "Buckshot Bugger", leader: "Gurvir singh" },
  { number: "07", name: "Deadlines dominator", leader: "Deepika" },
  { number: "08", name: "SmartContractors", leader: "Kartikey Dubey" },
  { number: "09", name: "Hack4Change", leader: "Sanjay Kumar Thakur" },
  { number: "10", name: "RegenerationX", leader: "Pulkit Verma" },
  { number: "11", name: "Team 405 Found", leader: "Namita Munjal" },
  { number: "12", name: "Team Eagle", leader: "Kunal Singh" },
  { number: "13", name: "INFERNO", leader: "Mokshda Sharma" },
  { number: "14", name: "BuzzLenz", leader: "Umesh Bhatt" },
  { number: "15", name: "FOREVERTHINKERS", leader: "Abhishek Kumar" },
  { number: "16", name: "FUZION", leader: "Jasskaran Singh Shangari" },
  { number: "17", name: "Grampa", leader: "Aditya Kumar" },
  { number: "18", name: "SoRes", leader: "Anurag Kaushik" },
  { number: "19", name: "AURA", leader: "Deepak" },
  { number: "20", name: "Pink Panda", leader: "Komal" },
  // Add more teams here...
];

export default function HackathonResults() {
  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-8">
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-8">
        Kraf Think 2025 Results
      </h1>
      <div className="max-w-4xl mx-auto">
        <div className="overflow-x-auto bg-gray-900 rounded-lg shadow-lg">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-700 bg-gray-800">
                <th className="py-3 px-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  S.No
                </th>
                <th className="py-3 px-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Team
                </th>
                <th className="py-3 px-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Leader
                </th>
              </tr>
            </thead>
            <tbody>
              {teams.map((team, index) => (
                <tr
                  key={team.number}
                  className={`${
                    index % 2 === 0 ? "bg-gray-800" : "bg-gray-900"
                  } hover:bg-gray-700 transition-colors duration-300`}
                >
                  <td className="py-4 px-4 text-sm font-medium text-green-400">
                    #{team.number}
                  </td>
                  <td className="py-4 px-4 text-sm">{team.name}</td>
                  <td className="py-4 px-4 text-sm">{team.leader}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}