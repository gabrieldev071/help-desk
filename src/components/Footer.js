import React from "react";
import "../styles/Footer.css"; // Importa o arquivo de estilos

// Componente funcional para o footer
function Footer() {
  return (
    <footer className="footer baseContainer">
      <div className="footer-container">
        <div className="footer-left">
         <a href="#" target="_blank" rel="noopener noreferrer">
         <p>&copy; 2024 - GEX-CG - Gabriel Souza</p>
          </a> 
        </div>
        <div className="footer-right">
          <a href="#">Termos de Uso</a>
          <a href="#">Política de Privacidade</a>
          <a href="#">Contato</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
