import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {Home, Aboutus, Contact} from "./Components/index"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/contact" element={< Contact />} />
        <Route path="*" element={<>Page not Found</>} />
      </Routes>
    </Router>
  )
}

export default App