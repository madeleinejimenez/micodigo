// src/pages/NotFound.jsx
import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.title}>404 - Página no encontrada</h1>
            <p style={styles.message}>Lo sentimos, la página que buscas no existe.</p>
            <Link to="/" style={styles.link}>Volver a la página principal</Link>
        </div>
    );
};
const styles = {
    container: {
        textAlign: "center",
        marginTop: "50px",
        padding: "20px",
    },
    title: {
        fontSize: "36px",
        color: "#FF6347",
    },
    message: {
        fontSize: "18px",
        marginTop: "20px",
    },
    link: {
        fontSize: "18px",
        color: "#007BFF",
        textDecoration: "none",
        marginTop: "20px",
        display: "inline-block",
    },
};

export default NotFound;
1