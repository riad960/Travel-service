import React from "react";
import { MDBBtn, MDBContainer } from "mdb-react-ui-kit";
import "./index.css";
import Navbar from "./Component/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Component/Home/Home";
import Footer from "./Component/Footer/Footer";
import NotFound from "./Component/NotFound/NotFound";
import Login from "./Component/Login/Login";
function App() {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
