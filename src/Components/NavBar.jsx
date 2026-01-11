import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">            
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
  <Link to="/">Home</Link> <span className="sr-only"></span>
      </li>

      <li className="nav-item active">
<Link to="/Books">Books</Link> <span className="sr-only"></span>
      </li>
      <li className="nav-item active">
        <Link to="/Profile">Profile</Link> <span className="sr-only"></span>
      </li>

      <li className="nav-item">
        <Link to="/about">About</Link>
      </li>
      <li className="nav-item">
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  </div>
</nav>
    </>
  )
}

export default NavBar