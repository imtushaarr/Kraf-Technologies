import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        
        // Hardcoded admin credentials
        const adminUsername = "ktadmin";
        const adminPassword = "admin@2025";


        if (username === adminUsername && password === adminPassword) {
            localStorage.setItem("adminAuth", "true");
            navigate("/hackathon-dashboard");
        } else {
            setError("Invalid credentials!");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-black text-white">
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-96">
                <h2 className="text-2xl font-bold text-center mb-4">Admin Login</h2>
                {error && <p className="text-red-500 text-center">{error}</p>}
                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label className="block mb-2">Username</label>
                        <input 
                            type="text" 
                            value={username} 
                            onChange={(e) => setUsername(e.target.value)} 
                            className="w-full p-2 bg-gray-700 rounded"
                            required 
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2">Password</label>
                        <input 
                            type="password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            className="w-full p-2 bg-gray-700 rounded"
                            required 
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 p-2 rounded hover:bg-blue-500">
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AdminLogin;