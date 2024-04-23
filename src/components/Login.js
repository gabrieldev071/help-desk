import { useState } from "react";
import "../styles/Login.css";
// import inssIMG from '../img/'
// Define o componente Navbar

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <main className="baseContainer">
      <div className="container-login">
        <h1 className="">HELP DESK GEX-CG</h1>
        <div className="wrap-login">
          <form className="login-form">
            <spam className="login-form-title">Bem vindo!</spam>
            <spam className="login-form-img">
              <img src="" alt="" srcset="" />
            </spam>

            <div className="wrap-input">
              <input 
              className={email !== "" ? "has-val input" : "input"}type="text" name="" 
              id="" 
              value={email}
              onChange={e => setEmail(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Email"></span>
            </div>

            <div className="wrap-input">
              <input 
              className={password !== "" ? "has-val input" : "input"}type="password" 
              name="" id="" 
              value={password}
              onChange={e => setPassword(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Password"></span>
            </div>

            <div className="container-login-form-btn">
              <button className="login-form-btn">Login</button>
            </div>

            <div className="text-center">
              <span className="txt1">Não possui conta?</span>

              <a href="#" className="txt2">
                Cadastre-se
              </a>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

export default Login;
