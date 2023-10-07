import "./App.css";
// import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import Homepage from "./pages/Homepage";
import About from "./pages/About";

function App() {
  // return <>{/* <NavBar /> */}</>;
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
