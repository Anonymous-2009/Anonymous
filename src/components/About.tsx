import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const About = () => {
  return (
    <>
    <Navbar/>
    <div className="bg-blue-100">
      <main className="container mx-auto mt-6">
        <h2 className="text-2xl font-bold text-blue-900 mb-4">About Us</h2>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <p className="text-blue-800 mb-4">Maxx Website Builder is a leading platform for creating stunning websites with ease. Our intuitive drag-and-drop interface allows users to design and customize their websites without any coding knowledge.</p>
            <p className="text-blue-800">We are dedicated to providing the best tools and resources to help individuals and businesses establish their online presence quickly and efficiently.</p>
          </div>
          <div className="md:w-1/2 mt-4 md:mt-0">
            <img src="https://via.placeholder.com/400" alt="Maxx Website Builder" className="w-full rounded-lg" />
          </div>
        </div>
      </main>
    </div>
    <Footer/>
    </>
  );
};

export default About;