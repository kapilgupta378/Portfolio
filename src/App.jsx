import React from "react";
import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Works from "./components/work/Works";
import Testimonials from "./components/testimonials/Testimonial";
import Contact from "./components/contact/Contact";
import "./app.scss";
import { useState } from "react";
import Menu from "./components/menu/Menu";
import SocialBar from "./socialBar/SocialBar";
function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openOption, setOpenOption] = useState({
    portfolio: false,
    work: false,
    testimonial: false,
    contact: false,
    introHide: false,
  });

  const [humSlider, setHumSlider] = useState({
    home: true,
    testimonial: false,
    work: false,
    contact: false,
    portfolio: false,
  });
  return (
    <div className="app">
      <Topbar
        setOpenOption={setOpenOption}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        setHumSlider={setHumSlider}
      />
      <Menu
        openOption={openOption}
        menuOpen={menuOpen}
        setOpenOption={setOpenOption}
        setMenuOpen={setMenuOpen}
        humSlider={humSlider}
        setHumSlider={setHumSlider}
      />
      <div className="sections">
        <Intro menuOpen={menuOpen} openOption={openOption} />
        <Portfolio openOption={openOption} setOpenOption={setOpenOption} />
        <Works openOption={openOption} setOpenOption={setOpenOption} />
        <Testimonials openOption={openOption} setOpenOption={setOpenOption} />
        <Contact openOption={openOption} setOpenOption={setOpenOption} />
        <SocialBar menuOpen={menuOpen} />
      </div>
    </div>
  );
}

export default App;
