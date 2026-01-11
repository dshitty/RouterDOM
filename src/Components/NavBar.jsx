import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">            
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#"><Link to="/">Home</Link> <span class="sr-only"></span></a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="#"><Link to="/Books">Books</Link> <span class="sr-only"></span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"><Link to="/about">About</Link></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"><Link to="/contact">Contact</Link></a>
      </li>
    </ul>
  </div>
</nav>
    </>
  )
}

export default NavBar