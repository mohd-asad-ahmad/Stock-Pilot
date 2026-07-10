import { useNavigate } from "react-router-dom";

function Navbar() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/");
    };

    return (
        <div className="navbar">

            <div className="navbar-left">
                <h2>StockPilot AI</h2>
            </div>

            <div className="navbar-center">
                <input
                    type="text"
                    placeholder="Search inventory..."
                    className="search-input"
                />
            </div>

            <div className="navbar-right">
                <span className="user-name">
                    Welcome, Asad
                </span>

                <button
                    className="logout-btn"
                    onClick={handleLogout}
                >
                    Logout
                </button>
            </div>

        </div>
    );
}

export default Navbar;