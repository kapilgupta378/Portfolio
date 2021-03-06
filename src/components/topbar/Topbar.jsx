import "./topbar.scss";
import { Person, Mail } from "@material-ui/icons";
function Topbar({ menuOpen, setMenuOpen, setOpenOption, setHumSlider }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Kapil.
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>+91 8305259636</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>kapil0506gupta@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div
            className="hamburger"
            onClick={() => {
              setMenuOpen(!menuOpen);
              setOpenOption({
                portfolio: false,
                work: false,
                testimonial: false,
                contact: false,
                introHide: false,
              });
              setHumSlider({
                home: true,
                testimonial: false,
                work: false,
                contact: false,
                portfolio: false,
              });
            }}
          >
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
