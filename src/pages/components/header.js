import React from "react"
import { Link } from "gatsby"

const Header = () => {
    const headerStyle = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px",
        backgroundColor: "#f8f8f8",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
    }

    const logoStyle = {
        fontSize: "24px",
        fontWeight: "bold",
        color: "#000",
    }

    const navStyle = {
        display: "flex",
        gap: "20px",
    }

    const linkStyle = {
        textDecoration: "none",
        color: "#333",
        fontWeight: "500",
        transition: "color 0.3s",
    }

    const hoverStyle = {
        color: "#663399",
    }

    return (
        <header style={headerStyle}>
            <div style={logoStyle}>Bazar Andrea</div>
            <nav style={navStyle}>
                {/* <Link to="/signup" style={linkStyle} onMouseOver={(e) => e.target.style.color = hoverStyle.color} onMouseOut={(e) => e.target.style.color = "#333"}>Sign up</Link>
                <Link to="/login" style={linkStyle} onMouseOver={(e) => e.target.style.color = hoverStyle.color} onMouseOut={(e) => e.target.style.color = "#333"}>Login</Link> */}
            </nav>
        </header>
    )
}

export default Header