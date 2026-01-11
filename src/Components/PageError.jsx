import React, { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

function PageError() {
    const Navigate = useNavigate();
    useEffect(() => {
        setTimeout(()=>{
            Navigate("/")
        },2000)
     },[])
  return (
    <div>PageError. Redirecting to Home Page</div>
  )
}

export default PageError