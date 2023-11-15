import React, { useEffect } from 'react'
import {Navigate} from "react-router-dom";

const ProtectedRoute = ({children}) => {
    //const navigate = useNavigate();
   
 if(localStorage.getItem("Token")){
    console.log(localStorage.getItem("Token") );
    return children
 }
 return(
    Navigate("/")
 )
 

}

export default ProtectedRoute
