function InventoryCard({ item }) {
    const isLowStock = item.quantity <= item.threshold;

    return (
        <div className={`inventory-card ${isLowStock ? "low-stock" : ""}`}>
            <h2>{item.name}</h2>

            <p>
                <strong>Quantity:</strong> {item.quantity}
            </p>

            <p>
                <strong>Threshold:</strong> {item.threshold}
            </p>

            <p>
                <strong>Category:</strong> {item.category}
            </p>

            {isLowStock && (
                <span className="warning">
                    Low Stock
                </span>
            )}
        </div>
    );
}

export default InventoryCard;