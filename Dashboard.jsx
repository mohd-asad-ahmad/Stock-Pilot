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
        <div className="dashboard">

            <Sidebar />

            <div className="main-content">
                <Navbar />

                <h1>Inventory Dashboard</h1>

                <br />

                <div className="stats">

                    <StatCard
                        title="Total Products"
                        value={items.length}
                    />

                    <StatCard
                        title="Low Stock Items"
                        value={
                            items.filter(
                                item => item.quantity <= item.threshold
                            ).length
                        }
                    />

                    <StatCard
                        title="Total Units"
                        value={
                            items.reduce(
                                (sum, item) => sum + item.quantity,
                                0
                            )
                        }
                    />

                </div>

                <br /><br />

                {
                    items.map((item) => (
                        <div className="card" key={item._id}>

                            <h3>{item.name}</h3>

                            <p>
                                Quantity: {item.quantity}
                            </p>

                            <p>
                                Category: {item.category}
                            </p>

                        </div>
                    ))
                }

            </div>

        </div>
    );
}

export default Dashboard;