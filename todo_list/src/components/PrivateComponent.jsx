import React from 'react'
import {useNavigate,Outlet} from 'react-router'

const PrivateComponent = () => {
    const navigate = useNavigate();
    const auth = localStorage.getItem('user')
    
  return auth?<Outlet/>:navigate('/');
}

export default PrivateComponent