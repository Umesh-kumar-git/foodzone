import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
    <div className="Navbar_section" style={{width:'100%',display:"flex",justifyContent:'space-between',height:"80px",lineHeight:'80px',listStyle:"none",textDecoration:'none'}}>
    <section className="Logo_section">
      <li className="logo">
        <NavLink to="/">Logo</NavLink>
      </li>
      </section>
      <section className="Right_Navbar_section" style={{display:'flex',justifyContent:'space-around'}} >
      <li>
        <NavLink to="/signin"> SignIn</NavLink>
      </li>
      <li>
        <NavLink to="/help">Help</NavLink>
      </li>
      <li className="cart">
        <NavLink to="/cartsection">Cart</NavLink>
      </li>
      </section>
      </div>
    </>
  );
};

export default Navbar;
