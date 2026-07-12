import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import api from "../services/api";

import Sidebar from "../components/Sidebar";
import StatCard from "../components/StatCard";

import "../styles/dashboard.css";

function Dashboard() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const token = localStorage.getItem("token");

                const response = await api.get("/items", {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                setItems(response.data);

            } catch (error) {
                console.error(error);
            }
        };

        fetchItems();
    }, []);

    return (
    <div className="flex bg-slate-100 min-h-screen">

        <Sidebar />

        <div className="flex-1 p-8">

            <Navbar />

            <div className="mt-6">

                <h1 className="text-4xl font-bold text-slate-800">
                    Inventory Dashboard
                </h1>

                <p className="text-slate-500 mt-2">
                    Track stock levels and monitor inventory performance.
                </p>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">

                <StatCard
                    title="Total Products"
                    value={items.length}
                    color="blue"
                />

                <StatCard
                    title="Low Stock Items"
                    value={
                        items.filter(
                            item => item.quantity <= item.threshold
                        ).length
                    }
                    color="red"
                />

                <StatCard
                    title="Total Units"
                    value={
                        items.reduce(
                            (sum, item) => sum + item.quantity,
                            0
                        )
                    }
                    color="green"
                />

            </div>

            <div className="mt-10">

                <h2 className="text-2xl font-bold text-slate-800 mb-6">
                    Recent Inventory
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

                    {
                        items.map(item => (
                            <div
                                key={item._id}
                                className="
                                    bg-white
                                    rounded-2xl
                                    shadow-md
                                    p-6
                                    hover:shadow-xl
                                    transition
                                    duration-300
                                "
                            >

                                <div className="flex justify-between items-center mb-4">

                                    <h3 className="text-xl font-bold text-slate-800">
                                        {item.name}
                                    </h3>

                                    <span className="
                                        bg-blue-100
                                        text-blue-700
                                        px-3
                                        py-1
                                        rounded-full
                                        text-sm
                                        font-semibold
                                    ">
                                        {item.category}
                                    </span>

                                </div>

                                <div className="space-y-2">

                                    <p className="text-slate-600">
                                        Quantity:
                                        <span className="font-bold text-slate-800 ml-2">
                                            {item.quantity}
                                        </span>
                                    </p>

                                    <p className="text-slate-600">
                                        Threshold:
                                        <span className="font-bold text-slate-800 ml-2">
                                            {item.threshold}
                                        </span>
                                    </p>

                                </div>

                            </div>
                        ))
                    }

                </div>

            </div>

        </div>

    </div>
);
}

export default Dashboard;