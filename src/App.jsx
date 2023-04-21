import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import '../src/sass/style.css'

// Imports
import Navbar from '../src/html/layout/navbar'
// import Footer from '../src/html/layout/footer'

// import Dash from '../src/html/dashboard/dashboard'
import Home from '../src/html/home/home'


function App() {

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
