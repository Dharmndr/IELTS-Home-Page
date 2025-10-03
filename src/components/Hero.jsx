import React from "react";
import heroImg from '../assets/image1.jpg';
function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-24 bg-gradient-to-r from-indigo-600 to-indigo-400 text-white">
      <div className="md:w-1/2 space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Achieve Your Dream IELTS Score
        </h1>
        <p className="text-lg">
          Learn from expert trainers, practice with AI, and track your progress with
          real-time mock tests.
        </p>
        <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg shadow-lg hover:bg-gray-100">
          Get Started
        </button>
      </div>
      <div className="md:w-1/2 mt-10 md:mt-0">
        <img
          src={heroImg}
          
          alt="IELTS Preparation"
          className="rounded-xl shadow-lg"
        />
      </div>
    </section>
  );
}

export default Hero;
