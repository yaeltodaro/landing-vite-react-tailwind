import React from "react";
import Clients from "./Clients";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import Reviews from "./Reviews";
import Services from "./Services";
import Works from "./Works";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Clients />
      <Works />
      <Reviews />
      <Services />
      <Footer />
    </>
  );
};

export default Home;
