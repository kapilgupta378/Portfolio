import { useState } from "react";
import "./menu.scss";

function Menu({ menuOpen, openOption, setOpenOption }) {
  const [humSlider, setHumSlider] = useState({
    home: true,
    testimonial: false,
    work: false,
    contact: false,
    portfolio: false,
  });
  console.log(humSlider);
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <input type="radio" name="ss" id="Hum_home" checked={humSlider.home} />
      <input
        type="radio"
        name="ss"
        id="Hum_portfolio"
        checked={humSlider.portfolio}
      />
      <input type="radio" name="ss" id="Hum_work" checked={humSlider.work} />
      <input
        type="radio"
        name="ss"
        id="Hum_testimonial"
        checked={humSlider.testimonial}
      />
      <input
        type="radio"
        name="ss"
        id="Hum_contact"
        checked={humSlider.contact}
      />
      <ul>
        <div className="hum_slider"></div>
        <li
          onClick={() => {
            setOpenOption({
              portfolio: false,
              work: false,
              testimonial: false,
              contact: false,
              introHide: false,
            });
            setHumSlider({ home: true });
          }}
        >
          <a href="#intro">Home</a>
        </li>
        <li
          onClick={() => {
            setOpenOption({
              portfolio: true,
              work: false,
              testimonial: false,
              contact: false,
              introHide: true,
            });
            setHumSlider({ portfolio: true });
          }}
        >
          <a href="#portfolio">Portfolio</a>
        </li>
        <li
          onClick={() => {
            setOpenOption({
              portfolio: false,
              work: true,
              testimonial: false,
              contact: false,
              introHide: true,
            });
            setHumSlider({ work: true });
          }}
        >
          <a href="#works">Works</a>
        </li>
        <li
          onClick={() => {
            setOpenOption({
              portfolio: false,
              work: false,
              testimonial: true,
              contact: false,
              introHide: true,
            });
            setHumSlider({ testimonial: true });
          }}
        >
          <a href="#testimonials">Testimonials</a>
        </li>
        <li
          onClick={() => {
            setOpenOption({
              portfolio: false,
              work: false,
              testimonial: false,
              contact: true,
              introHide: true,
            });
            setHumSlider({ contact: true });
          }}
        >
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
