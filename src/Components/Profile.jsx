import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

function Profile() {
    const param = useParams();

    // This is to get data from backend based on id
    // useEffect(() => {
    //     axios.get(param.id) ...............
    // },[])

  return (
    <div>Profile {param.id}</div>
  )
}

export default Profile