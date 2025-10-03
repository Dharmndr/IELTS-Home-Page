import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";   // <-- added
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans bg-gray-50 text-gray-800">
      <Navbar />
      <Hero />
      <Features />
      <Testimonials />
      <Contact /> 
      <Footer />
    </div>
  );
}

export default App;
