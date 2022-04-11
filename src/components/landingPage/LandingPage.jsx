import React from "react";
import { useState, useEffect } from "react";
import {FaSignOutAlt} from "react-icons/fa";

const LandingPage = () => {

  const [items, setitems] = useState([]);
  const [cart, setcart] = useState([]);

  useEffect(async () => {

    const token = localStorage.getItem("token");

    if(!token)
    {
      window.location.href = "/";
    }

    const response = await fetch("http://localhost:5000/item");
    const data = await response.json();
    setitems(data);
  }, []);

  function clickHandler()
  {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    localStorage.removeItem("email");
    window.location.href = "/";
  }


  return (
    <div id="landingPage">
      <div className="wrapper">
        <div className="filter-container">
          <h3>Filter By :</h3>
          <br />
          <label><input type="checkbox" defaultChecked />PC</label>
          <br />
          <label><input type="checkbox" defaultChecked />Keyboard</label>
          <br />
          <label><input type="checkbox" defaultChecked />Headphone</label>
        </div>
        <div className="item-container">
          {
            items.map((item, index, arr) => {
              return (
                <div className="item" key={index}>
                  <img src={item.image} />
                  <p style={{ fontSize: "12px" }}>
                    {
                      item.description
                    }
                  </p>
                  <button onClick={() => {
                    setcart([...cart, { img: item.image, name: item.name }]);
                  }}>
                    ADD TO CART
                  </button>
                </div>
              )
            })
          }
        </div>
      </div>

      <div className="cart-container">
        {
          cart.map((item, index, arr) => {
            return (
              <div key={index} className="cart-item">
                <img src={item.img} />
                <h5>
                  {
                    item.name
                  }
                </h5>
                <div className="remove-btn" onClick={()=>{
                  const filtredArray = cart.filter( (sale,i)=>{
                    if(i !== index)
                    {
                      return sale
                    }
                  })
                  setcart(filtredArray);

                }}>
                  <div className="bar"></div>
                  <div className="bar"></div>
                </div>
              </div>
            )
          })
        }
        <button>PAY CART</button>
      </div>

      <div style={ { cursor:"pointer" , position:"absolute" , top:"25px" , right:"25px"} }><FaSignOutAlt onClick={ clickHandler } size={30} /></div>
    </div>
  );
}

export default LandingPage;