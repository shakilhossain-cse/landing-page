import React from "react";
import Faq from "../components/Faq";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Service from "../components/Service";
import Speach from "../components/Speach";

const Home = () => {
  return (
    <div>
      <Hero />
      <Service />
      <Features />
      <Speach />
      <Faq />
      <Footer/>
    </div>
  );
};

export default Home;
