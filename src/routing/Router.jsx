import {
  BrowserRouter,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";
import MiniDrawer from "../pages/dashBoard/MiniDrawer";

import React from 'react'
import SignIn from "../pages/signIn/SignIn";
import SignUp from "../pages/singUp/SignUp";

function Router() {
  return (
   
    <Routes>
    
    <Route path="/" element={<SignIn/>}/>
    <Route path="/MiniDrawer" 
      element={<MiniDrawer/>}
    />
    <Route path="/SignUp"
      element={<SignUp/>}
    />
  
  </Routes>
 

  )
}

export default Router



