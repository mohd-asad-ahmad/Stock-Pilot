import { Link } from "react-router-dom";

function Sidebar() {
    return (
        <div className="sidebar">

            <h2>StockPilot AI</h2>

            <ul>
                <li>
                    <Link to="/dashboard">Dashboard</Link>
                </li>

                <li>
                    <Link to="/inventory">Inventory</Link>
                </li>
            </ul>

        </div>
    );
}

export default Sidebar;