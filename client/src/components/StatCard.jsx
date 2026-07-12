function StatCard({ title, value, color = "blue" }) {
    const colorClasses = {
        blue: "bg-blue-100 text-blue-700",
        red: "bg-red-100 text-red-700",
        green: "bg-green-100 text-green-700",
        yellow: "bg-yellow-100 text-yellow-700",
    };

    return (
        <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition duration-300">

            <div className="flex justify-between items-center">

                <div>
                    <p className="text-slate-500 text-sm font-medium">
                        {title}
                    </p>

                    <h2 className="text-4xl font-bold text-slate-800 mt-2">
                        {value}
                    </h2>
                </div>

                <div
                    className={`w-14 h-14 rounded-xl flex items-center justify-center text-xl font-bold ${colorClasses[color]}`}
                >
                    {title === "Total Products" && "📦"}
                    {title === "Low Stock Items" && "⚠️"}
                    {title === "Total Units" && "📊"}
                </div>

            </div>

        </div>
    );
}

export default StatCard;