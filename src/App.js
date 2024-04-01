import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./component/Screen/HomeScreen";
import Footer from "./component/Screen/Footer";
import Navbar from "./component/Navbar";
import AddAccount from "./Sub/Addacount";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="Add_Account" element={<AddAccount />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
