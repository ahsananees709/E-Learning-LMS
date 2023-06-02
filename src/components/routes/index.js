import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "../landing_page/Index";
import SignIn from '../LoginPage/LogIn'
import SignUp from '../SignupPage/SignUp';
import AboutUsPage from '../aboutus/aboutus';
import UpdatePassword from '../UpdateUser/Update';
import AdminNavBar from "../Admin/NavBar";
import AllUser from '../Admin/AllUser';
import FindUser from '../Admin/FindUser';
import RemoveUser from "../Admin/RemoveUser"



export default function Routing() {
  return (
    <div>

      <Routes>
        <Route exact path='/' Component={LandingPage} />
        <Route path='/signinpage' Component={SignIn} />
        <Route path='/signuppage' Component={SignUp} />
        <Route path='/updateuser' Component={UpdatePassword} />
        <Route path='/aboutus' Component={AboutUsPage} />
        <Route path='/adminhome' Component={AdminNavBar} />
        <Route path='/alluser' Component={AllUser} />
        <Route path='/finduser' Component={FindUser}></Route>
        <Route path='/removeuser' Component={RemoveUser}/>
      </Routes>

    </div>

  )
}
