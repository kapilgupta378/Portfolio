import "./menu.scss";

function Menu({ menuOpen, openOption, setOpenOption }) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li
          className={!openOption.introHide && "active"}
          onClick={() => {
            setOpenOption({
              portfolio: false,
              work: false,
              testimonial: false,
              contact: false,
              introHide: false,
            });
          }}
        >
          <a href="#intro">Home</a>
        </li>
        <li
          className={openOption.portfolio && "active"}
          onClick={() => {
            setOpenOption({
              portfolio: true,
              work: false,
              testimonial: false,
              contact: false,
              introHide: true,
            });
          }}
        >
          <a href="#portfolio">Portfolio</a>
        </li>
        <li
          className={openOption.work && "active"}
          onClick={() => {
            setOpenOption({
              portfolio: false,
              work: true,
              testimonial: false,
              contact: false,
              introHide: true,
            });
          }}
        >
          <a href="#works">Works</a>
        </li>
        <li
          className={openOption.testimonial && "active"}
          onClick={() => {
            setOpenOption({
              portfolio: false,
              work: false,
              testimonial: true,
              contact: false,
              introHide: true,
            });
          }}
        >
          <a href="#testimonials">Testimonials</a>
        </li>
        <li
          className={openOption.contact && "active"}
          onClick={() => {
            setOpenOption({
              portfolio: false,
              work: false,
              testimonial: false,
              contact: true,
              introHide: true,
            });
          }}
        >
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
