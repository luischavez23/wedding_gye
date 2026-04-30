import { useEffect } from "react";

import Hero from "./components/home/Hero";
import Parents from "./components/home/Parents";
import About from "./components/home/About";
import Gallery from "./components/home/Gallery";
import Ceremony from "./components/home/Ceremony";
import DressCode from "./components/home/DressCode";
import Gift from "./components/home/Gift";
import RSVP from "./components/home/RSVP";
import Footer from "./components/home/Footer";

import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      offset: 100,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <>
      <Hero />
      <Parents />
      <About />
      <Gallery />
      <Ceremony />
      <DressCode />
      <Gift />
      <RSVP />
      <Footer />
    </>
  );
}

export default Home;