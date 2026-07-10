function StatCard({ title, value }) {
    return (
        <div className="card">
            <h2>{value}</h2>
            <p>{title}</p>
        </div>
    );
}

export default StatCard;