import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Footer from "./components/Footer";

// const Home = () => <h1>Home Page</h1>;
// const About = () => <h1>About Page</h1>;
// const Services = () => <h1>Services Page</h1>;
// const Contact = () => <h1>Contact Page</h1>;

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
