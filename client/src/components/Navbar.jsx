import { useNavigate } from "react-router-dom";

function Navbar() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("userName");
        navigate("/");
    };

    return (
        <div className="bg-white rounded-2xl shadow-md px-6 py-4 mb-6 flex items-center justify-between">

            <div>
                <h2 className="text-2xl font-bold text-slate-800">
                    Dashboard
                </h2>

                <p className="text-slate-500 text-sm">
                    Manage your inventory efficiently
                </p>
            </div>

            <div className="flex items-center gap-4">

                <input
                    type="text"
                    placeholder="Search products..."
                    className="
                        border border-slate-300
                        rounded-xl
                        px-4 py-2
                        outline-none
                        focus:ring-2
                        focus:ring-blue-500
                    "
                />

                <div className="hidden md:flex items-center gap-3">

                    <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                        {localStorage.getItem("userName")
                            ?.charAt(0)
                            .toUpperCase()}
                    </div>

                    <span className="font-medium text-slate-700">
                        {localStorage.getItem("userName")}
                    </span>

                </div>

                <button
                    onClick={handleLogout}
                    className="
                        bg-red-500
                        hover:bg-red-600
                        text-white
                        px-4 py-2
                        rounded-xl
                        transition
                    "
                >
                    Logout
                </button>

            </div>

        </div>
    );
}

export default Navbar;