import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {Home, Aboutus, Contact, NavBar, Profile} from "./Components/"

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />

        {/* books/sell and books/buy */}
        <Route path="Books" >
          <Route index element={<>Books</>} />
          <Route path="Buy" element={<>Buy Books</>} />
          <Route path="Sell" element={<>Sell Books</>} />
        </Route>

         <Route path="Profile" >
          <Route index element={<>Profile</>} />
          <Route path=":id" element={<Profile />} />

        </Route>

        <Route path="/about" element={<Aboutus />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<>Page not Found</>} />
      </Routes>
    </Router>
  )
}

export default App