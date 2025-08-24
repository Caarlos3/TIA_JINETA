import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo">
          Tia Jineta
        </a>
        
          <ul className="navbar-menu">
            <li className="navbar-item">
              <a href="/" className="navbar-link">
              <i class="fa-regular fa-house"></i>
              </a>
            </li>
            <li className="navbar-item">
              <a href="/bag" className="navbar-link">
              <i class="fa-solid fa-cart-shopping"></i>
              </a>
            </li>
            <li className="navbar-item">
              <a href="/contact" className="navbar-link">
              <i class="fa-solid fa-at"></i>
              </a>
            </li>
          </ul>
        </div>
      
    </nav>
  );
}
