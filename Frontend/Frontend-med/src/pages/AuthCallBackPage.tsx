import { useCreateMyUser } from "@/api/MyUserApi";
import { useAuth0 } from "@auth0/auth0-react"
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router"



const AuthCallbackPage=()=>{ 
    const navigate=useNavigate() 
    const {user}=useAuth0(); //get access to login user 

    const {createUser}=useCreateMyUser() 

    const hasCreatedUser=useRef(false); 


    useEffect(()=>{ 
        if(user?.sub && user?.email && !hasCreatedUser.current){ 
            createUser({ auth0Id:user.sub, email:user.email}); 
            hasCreatedUser.current=true //changes it to true 
        } navigate("/"); // navigate to the home screen  after the user is created

    },[createUser,navigate,user])
    return <>Loading...</>; 
}  
export default AuthCallbackPage; 