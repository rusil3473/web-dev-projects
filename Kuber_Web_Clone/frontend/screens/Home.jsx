import React from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
    return (
        <div style={{ fontFamily: "Arial, sans-serif", margin: "20px" }}>
            <header style={{ textAlign: "center", marginBottom: "30px" }}>
                <h1>Finance Tracker</h1>
                <p>Manage your finances effortlessly.</p>
            </header>
            <nav style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
                <Link to="/dashboard" style={linkStyle}>Dashboard</Link>
                <Link to="/add-expense" style={linkStyle}>Add Expense</Link>
                <Link to="/reports" style={linkStyle}>Reports</Link>
                <Link to="/settings" style={linkStyle}>Settings</Link>
            </nav>
            <main style={{ textAlign: "center", marginTop: "50px" }}>
                <h2>Welcome to Finance Tracker</h2>
                <p>Gain clarity over your finances and make informed choices</p>
                <Link to="/get-started" style={buttonStyle}>Get Started</Link>
            </main>
        </div>
    );
}

const linkStyle = {
    textDecoration: "none",
    color: "white",
    backgroundColor: "#007BFF",
    padding: "10px 15px",
    borderRadius: "5px",
    fontWeight: "bold",
};

const buttonStyle = {
    display: "inline-block",
    marginTop: "20px",
    textDecoration: "none",
    color: "white",
    backgroundColor: "#28A745",
    padding: "15px 30px",
    borderRadius: "5px",
    fontWeight: "bold",
};
