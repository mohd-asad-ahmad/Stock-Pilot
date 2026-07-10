import "../styles/auth.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function Login() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            console.log("Email:", email);
            console.log("Password:", password);

            const response = await api.post("/auth/login", {
             email,
             password
              });

            localStorage.setItem(
                "token",
                response.data.token
            );

            navigate("/dashboard");

        } catch (error) {
            alert("Login Failed");
        }
    };

    return(
<div className="auth-container">

    <div className="auth-card">

        <h1 className="auth-title">
            StockPilot AI
        </h1>

        <form onSubmit={handleLogin}>

            <input
                className="auth-input"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
            />

            <input
                className="auth-input"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
            />

            <button
                className="auth-button"
                type="submit"
            >
                Login
            </button>

        </form>

    </div>

</div>
);
}

export default Login;