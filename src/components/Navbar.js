import React, { useState, useEffect, useRef } from "react"; // Aqui combinamos as importações
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/Header.css";

function Navbar() {
  // Define um estado para controlar a visibilidade do botão do menu
  const [showMenuButton, setShowMenuButton] = useState(false);
  
  // Referência para o elemento de navegação
  const navRef = useRef();

  const updateMenuButtonVisibility = () => {
    if (window.innerWidth <= 1024) {
      
      setShowMenuButton(true);
    } else {
      setShowMenuButton(false);
    }
  };

// Efeito que é executado quando o componente é montado ou quando a largura da tela é alterada
  useEffect(() => {
    // Chama a função para configurar inicialmente a visibilidade do botão do menu

    updateMenuButtonVisibility();
  
    window.addEventListener("resize", updateMenuButtonVisibility);

    return () => {
      window.removeEventListener("resize", updateMenuButtonVisibility);
    };
  }, []);

   // Função para mostrar/ocultar o menu de navegação
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header className="baseContainer">
      <h3>Logo Help Desk</h3>
      <nav ref={navRef}>
        <a href="http://" target="_blank" rel="noopener noreferrer">
          Home
        </a>
        <a href="http://" target="_blank" rel="noopener noreferrer">
          Equipe
        </a>
        <a href="http://" target="_blank" rel="noopener noreferrer">
          Contato
        </a>
        <a href="http://" target="_blank" rel="noopener noreferrer">
          Sobre
        </a>

        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      {showMenuButton && (
        <button className="nav-btn " id="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      )}
    </header>
  );
}

export default Navbar;
