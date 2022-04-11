import React from "react";
import { useState } from "react";
import { FaUser, FaLock, FaSignature, FaPhoneAlt } from "react-icons/fa";
import { IconContext } from "react-icons";

const Form = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/auth/register", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        name,
        phone,
        email,
        password
      })
    })
    const data = await response.json();

    if (data.status === "ok") 
    {
      document.querySelector(".response").innerHTML = "User created succesfully";
    }
    else if (data.status === "exists") 
    {
      document.querySelector(".response").innerHTML = "User already exists";
    }
  }

  return (
    <form id="sign-up-form" className="translated" onSubmit={submitHandler}>
      <IconContext.Provider value={{ color: "#c4c4c4" }}>
        <div>
          <FaSignature />
          <input
            placeholder="Enter name..."
            type="text"
            required
            onChange={(e) => { setName(e.target.value) }}
            value={name}
          />
        </div>

        <div>
          <FaPhoneAlt />
          <input
            placeholder="Enter phone..."
            type="text"
            required
            onChange={(e) => { setPhone(e.target.value) }}
            value={phone}
          />
        </div>

        <div>
          <FaUser />
          <input
            placeholder="Enter email..."
            type="email"
            required
            onChange={(e) => { setEmail(e.target.value) }}
            value={email}
          />
        </div>

        <div>
          <FaLock />
          <input
            placeholder="Enter password..."
            type="password"
            required
            onChange={(e) => { setPassword(e.target.value) }}
            value={password}
          />
        </div>

        
        <button type="submit">Sign up</button>
      </IconContext.Provider>
    </form>
  );
}

export default Form;