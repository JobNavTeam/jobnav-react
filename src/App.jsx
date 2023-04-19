import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Imports
import Dash from '../src/html/dashboard/dashboard'
import Home from '../src/html/home/home'

// import Dash from "./dashboard/home";

function App() {

  return (
    <Routes>
      <Route element={<HomeLayout />}>
        <Route path="/" element={<Home />}/>
      </Route>

      <Route path="/dashboard" element={<Dash />} />
    </Routes>
  )
}

export default App
