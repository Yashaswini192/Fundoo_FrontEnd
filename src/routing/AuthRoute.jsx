
import {Navigate} from "react-router-dom";

const AuthRoute =({children}) =>{
    //const navigate = useNavigate();
  if(localStorage.getItem("Token") === undefined || localStorage.getItem("Token") === null){
    console.log(localStorage.getItem("Token") );
    return children
  }
  return(
    Navigate("/DashBoard")
  )
  
}

export default AuthRoute
