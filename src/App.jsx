import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ChatBot from "./components/ChatBot";
import Footer from "./components/Footer";

const App = () => {
  return (
    <main>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <ChatBot />
      <Footer />
    </main>
  );
};

export default App;
