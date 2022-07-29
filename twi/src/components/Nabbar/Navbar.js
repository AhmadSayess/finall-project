import React from 'react'
import "../Nabbar/Navbar.css"
 
export const Navbar = () => {
  return (
  <>
   <nav className="navbar">
  <div className="navbar-container container">
    <input type="checkbox"   />
    <div className="hamburger-lines">
      <span className="line line1" />
      <span className="line line2" />
      <span className="line line3" />
    </div>
    <ul className="menu-items">
      <li><a href="/" >Home</a></li>
      <li><a href="/">About Us</a></li>
      <li><a href="/activities">Activities</a></li>
      <li><a href="/contactus">Contact Us</a></li>
    </ul>
    <h1 className="logo">  T W I</h1>
  </div>
</nav>

  </>
  )
}
