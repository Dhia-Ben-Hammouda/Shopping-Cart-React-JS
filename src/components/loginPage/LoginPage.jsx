import React from "react";
import Register from "./registerForm/Register.jsx";
import Login from "./loginForm/login.jsx";

const LoginPage = ()=>{

  function a()
  {
    document.getElementById("login-btn").classList.toggle("active",true);
    document.getElementById("register-btn").classList.toggle("active",false);
    document.getElementById("sign-up-form").classList.toggle("translated",true);
    document.getElementById("sign-in-form").classList.toggle("translated",false);
  }

  function b()
  {
    document.getElementById("login-btn").classList.toggle("active",false);
    document.getElementById("register-btn").classList.toggle("active",true);
    document.getElementById("sign-up-form").classList.toggle("translated",false);
    document.getElementById("sign-in-form").classList.toggle("translated",true);
  }

  return(
    <div id="loginPage">
      <div className="container">
        <div className="btn-container">
          <button className="active" onClick={a} id="login-btn">Login</button>
          <button onClick={b} id="register-btn">Register</button>
        </div>

        <div className="form-container">
          <Register/>
          <Login/>
          <h3 className="response" style={ { color:"green" , fontWeight:"400" , fontSize:"20px" , textAlign:"center" , position:"absolute" , bottom:"5px" , left:"50%" , transform:"translate(-50%)" } }></h3>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;