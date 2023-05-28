import React from 'react'
import NavBar from "../NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function Index() {
  return (
      <div>
          <BrowserRouter>
              <Routes>
                  <Route exact path='/' Component={NavBar} />
              </Routes>
          </BrowserRouter>
      </div>
      
  )
}
