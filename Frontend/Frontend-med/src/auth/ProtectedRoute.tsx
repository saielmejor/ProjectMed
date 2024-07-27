import { useAuth0 } from '@auth0/auth0-react'

import { Navigate, Outlet } from 'react-router'

export default function ProtectedRoute() {

    const {isAuthenticated, isLoading}=useAuth0() 
    if(isLoading){ 
        return <h1>isLoading</h1>
    } 

    if(isAuthenticated){ 
        return <Outlet/>// returns all the childs outlet 
    }
  return <Navigate to="/" replace/>
  
}
