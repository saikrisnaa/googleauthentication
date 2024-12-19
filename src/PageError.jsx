import React from 'react'
import { useNavigate } from 'react-router-dom'

const PageError = () => {
    const navigate=useNavigate();
  return (
    <div>
     <h1>404 Error Occured! Page could not be found.</h1> 
     <button onClick={()=>navigate('/login')}>go back to login</button>
    </div>
  )
}

export default PageError
