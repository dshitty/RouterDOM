import React from 'react'
import { useNavigate } from 'react-router-dom'

function Contact() {
  const navigate = useNavigate()
  return (
    <>
    Contact 
      <br />
      <button onClick={()=>{navigate("/")}}>Go to Home</button>
    </>
  )
}

export default Contact