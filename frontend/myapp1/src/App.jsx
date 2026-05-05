import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Api from "./components/Api";
import Create from "./components/Create";
import Edit from "./components/Edit";

// Home component (you can also keep it in separate file)
function Home() {
  return (
    <>
      <Navbar />
      <Api />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </Router>
  );
}

export default App;