function InventoryCard({ item }) {
    const isLowStock = item.quantity <= item.threshold;

    return (
        <div
            className="
                bg-white
                rounded-2xl
                shadow-md
                p-6
                hover:shadow-xl
                transition
                duration-300
                border
                border-slate-200
            "
        >

            <div className="flex justify-between items-start">

                <div>
                    <h2 className="text-2xl font-bold text-slate-800">
                        {item.name}
                    </h2>

                    <p className="text-slate-500 mt-1">
                        {item.category}
                    </p>
                </div>

                <span
                    className={`
                        px-3 py-1 rounded-full text-sm font-semibold
                        ${
                            isLowStock
                                ? "bg-red-100 text-red-700"
                                : "bg-green-100 text-green-700"
                        }
                    `}
                >
                    {
                        isLowStock
                            ? "Low Stock"
                            : "In Stock"
                    }
                </span>

            </div>

            <div className="mt-6 space-y-3">

                <div className="flex justify-between">
                    <span className="text-slate-500">
                        Quantity
                    </span>

                    <span className="font-bold text-slate-800">
                        {item.quantity}
                    </span>
                </div>

                <div className="flex justify-between">
                    <span className="text-slate-500">
                        Threshold
                    </span>

                    <span className="font-bold text-slate-800">
                        {item.threshold}
                    </span>
                </div>

            </div>

            <div className="mt-6 flex gap-3">

                <button
                    className="
                        flex-1
                        bg-blue-600
                        hover:bg-blue-700
                        text-white
                        py-2
                        rounded-xl
                        transition
                    "
                >
                    Edit
                </button>

                <button
                    className="
                        flex-1
                        bg-red-500
                        hover:bg-red-600
                        text-white
                        py-2
                        rounded-xl
                        transition
                    "
                >
                    Delete
                </button>

            </div>

        </div>
    );
}

export default InventoryCard;