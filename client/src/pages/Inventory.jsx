import { useEffect, useState } from "react";
import api from "../services/api";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import InventoryCard from "../components/InventoryCard";

function Inventory() {
    const [items, setItems] = useState([]);
    const [search, setSearch] = useState("");

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
        <div className="flex min-h-screen bg-slate-100">

            <Sidebar />

            <div className="flex-1 p-8">

                <Navbar />

                <div className="mt-6">

                    <div className="flex justify-between items-center">

                        <div>
                            <h1 className="text-4xl font-bold text-slate-800">
                                Inventory
                            </h1>

                            <p className="text-slate-500 mt-2">
                                Manage all products and stock levels.
                            </p>
                        </div>

                        <button
                            className="
                                bg-blue-600
                                hover:bg-blue-700
                                text-white
                                px-5
                                py-3
                                rounded-xl
                                shadow-md
                                transition
                            "
                        >
                            + Add Product
                        </button>

                    </div>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10">

                    {
                        items.map(item => (
                            <InventoryCard
                                key={item._id}
                                item={item}
                            />
                        ))
                    }

                </div>

            </div>

        </div>
    );
}

export default Inventory;
