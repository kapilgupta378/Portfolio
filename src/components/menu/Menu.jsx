import "./menu.scss";

function Menu({ menuOpen, setMenuOpen, setOpenOption }) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li
          onClick={() => {
            setOpenOption({
              portfolio: false,
              work: false,
              testimonial: false,
              contact: false,
              introHide: true,
            });
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
          }}
        >
          <a href="#portfolio">Portfolio</a>
        </li>
        <li
          onClick={() => {
            setOpenOption({
              portfolio: false,
              work: false,
              testimonial: false,
              contact: false,
              introHide: true,
            });
          }}
        >
          <a href="#works">Works</a>
        </li>
        <li
          onClick={() => {
            setOpenOption({
              portfolio: false,
              work: false,
              testimonial: false,
              contact: false,
              introHide: true,
            });
          }}
        >
          <a href="#testimonials">Testimonials</a>
        </li>
        <li
          onClick={() => {
            setOpenOption({});
          }}
        >
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
