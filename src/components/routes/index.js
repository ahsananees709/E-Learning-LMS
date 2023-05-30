import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "../landing_page/Index";
import SignIn from '../LoginPage/LogIn'
import SignUp from '../SignupPage/SignUp';
import AboutUsPage from '../aboutus/aboutus';



export default function Routing() {
  return (
    <div>

      <Routes>
        <Route exact path='/' Component={LandingPage} />
        <Route path='/signinpage' Component={SignIn} />
        <Route path='/signuppage' Component={SignUp} />
        <Route path='/aboutus' Component={AboutUsPage} />
      </Routes>

    </div>

  )
}
