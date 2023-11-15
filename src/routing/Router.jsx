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
import AuthRoute from "./AuthRoute";
import ProtectedRoute from "./ProtectedRoute";
import DashBoard from "../pages/dashBoard/DashBoard";

function Router() {
  return (

    <Routes>  //define multiple routes in the application

      <Route exact path="/" element={<AuthRoute>
        <SignIn />
      </AuthRoute>} />
      <Route exact path="/SignUp" element={<AuthRoute>
        <SignUp />
      </AuthRoute>} /> //render component based on the specific path
      <Route exact path="/DashBoard"
        element={<ProtectedRoute>
          <DashBoard />
        </ProtectedRoute>}
      />
    

    </Routes>


  )
}

export default Router



