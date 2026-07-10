import InventoryCard from "../components/InventoryCard";
import { useEffect, useState } from "react";
import api from "../services/api";
import "../styles/inventory.css";

function Inventory() {

    const [items, setItems] = useState([]);

    const [formData, setFormData] = useState({
        name: "",
        quantity: "",
        threshold: "",
        category: ""
    });

    const token = localStorage.getItem("token");

    const fetchItems = async () => {
        try {
            const response = await api.get("/items", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            setItems(response.data);

        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchItems();
    }, []);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            await api.post(
                "/items",
                formData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            setFormData({
                name: "",
                quantity: "",
                threshold: "",
                category: ""
            });

            fetchItems();

        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="inventory-container">

            <h1>Inventory Management</h1>

            <form
                className="inventory-form"
                onSubmit={handleSubmit}
            >

                <input
                    name="name"
                    placeholder="Product Name"
                    value={formData.name}
                    onChange={handleChange}
                />

                <input
                    name="quantity"
                    type="number"
                    placeholder="Quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                />

                <input
                    name="threshold"
                    type="number"
                    placeholder="Low Stock Threshold"
                    value={formData.threshold}
                    onChange={handleChange}
                />

                <input
                    name="category"
                    placeholder="Category"
                    value={formData.category}
                    onChange={handleChange}
                />

                <button type="submit">
                    Add Item
                </button>

            </form>

            <div className="inventory-grid">

                {
                    items.map((item) => (
    <InventoryCard
        key={item._id}
        item={item}
    />
))
                }

            </div>

        </div>
    );
}

export default Inventory;
