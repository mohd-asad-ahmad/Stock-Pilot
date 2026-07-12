import { Link, useLocation } from "react-router-dom";

function Sidebar() {
    const location = useLocation();

    const menuItems = [
        {
            name: "Dashboard",
            path: "/dashboard",
            icon: "📊"
        },
        {
            name: "Inventory",
            path: "/inventory",
            icon: "📦"
        }
    ];

    return (
        <div className="w-64 min-h-screen bg-slate-900 text-white flex flex-col">

            <div className="p-6 border-b border-slate-700">
                <h1 className="text-2xl font-bold">
                    StockPilot AI
                </h1>

                <p className="text-slate-400 text-sm mt-1">
                    Inventory Management
                </p>
            </div>

            <div className="flex-1 px-4 py-6">

                {menuItems.map((item) => (
                    <Link
                        key={item.path}
                        to={item.path}
                        className={`flex items-center gap-3 px-4 py-3 rounded-xl mb-3 transition duration-200
                        ${
                            location.pathname === item.path
                                ? "bg-blue-600 text-white"
                                : "text-slate-300 hover:bg-slate-800 hover:text-white"
                        }`}
                    >
                        <span className="text-lg">
                            {item.icon}
                        </span>

                        <span className="font-medium">
                            {item.name}
                        </span>
                    </Link>
                ))}

            </div>

            <div className="p-4 border-t border-slate-700">

                <button
                    onClick={() => {
                        localStorage.removeItem("token");
                        window.location.href = "/";
                    }}
                    className="w-full bg-red-500 hover:bg-red-600 py-3 rounded-xl font-semibold transition duration-200"
                >
                    Logout
                </button>

            </div>

        </div>
    );
}

export default Sidebar;