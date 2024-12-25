// src/pages/index.js
import React from "react"
import Header from "../pages/components/header"
import Footer from "../pages/components/footer"

const IndexPage = () => {
  const pageStyles = {
    color: "#000",
    padding: "20px",
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
  }

  const headingStyles = {
    marginTop: 0,
    marginBottom: "20px",
    color: "#000",
  }

  const paragraphStyles = {
    marginBottom: "20px",
    fontSize: "18px",
    lineHeight: "1.6",
  }

  const sectionStyle = {
    marginBottom: "40px",
  }

  const productStyle = {
    border: "1px solid #ddd",
    borderRadius: "5px",
    padding: "10px",
    margin: "10px 0",
    backgroundColor: "#f9f9f9",
  }

  const buttonStyle = {
    backgroundColor: "#000",
    color: "white",
    padding: "10px 15px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  }

  return (
    <main style={pageStyles}>
      <Header />
      <h1 style={headingStyles}></h1>
      <p>..</p>
      <p style={paragraphStyles}>
        Descubre las últimas tendencias en moda femenina. Nuestra colección está diseñada para realzar tu estilo y confianza.
      </p>

      <section style={sectionStyle}>
        <h2 style={headingStyles}>Nuestras Colecciones</h2>
        <div style={productStyle}>
          <h3>Vestidos de Verano</h3>
          <p>Explora nuestra hermosa colección de vestidos ligeros y coloridos, perfectos para cualquier ocasión.</p>
          <button style={buttonStyle}>Ver Más</button>
        </div>
        <div style={productStyle}>
          <h3>Accesorios Elegantes</h3>
          <p>Complementa tu look con nuestros exclusivos accesorios que añaden un toque especial a tu outfit.</p>
          <button style={buttonStyle}>Ver Más</button>
        </div>
        <div style={productStyle}>
          <h3>Calzado Chic</h3>
          <p>Encuentra el calzado perfecto que combina comodidad y estilo, ideal para cualquier actividad.</p>
          <button style={buttonStyle}>Ver Más</button>
        </div>
      </section>

      <section style={sectionStyle}>
        <h2 style={headingStyles}>Ofertas Especiales</h2>
        <p style={paragraphStyles}>
          ¡No te pierdas nuestras ofertas exclusivas! Regístrate para recibir descuentos y novedades directamente en tu bandeja de entrada.
        </p>
      </section>
      <Footer />
    </main>
  )
}

export default IndexPage
