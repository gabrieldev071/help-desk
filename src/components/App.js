import React from 'react'
import "../styles/App.css";
import Navbar from "../components/Navbar.js";
import Login from "../components/Login.js";
import Footer from "../components/Footer.js"
function App() {
  return (
    <div>
    <Navbar />
    <Login />
    <Footer/>
    </div>
  );
}

export default App;
