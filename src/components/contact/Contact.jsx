import { useState } from "react";
import "./contact.scss";
import shake from "../../assets/shake.svg";
function Contact({ openOption }) {
  const [message, setMessage] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setMessage(true);
  };

  return (
    <div className={"contact " + (openOption.contact && "active")} id="contact">
      <div className="left">
        <img src={shake} alt="shake_logo" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form onSubmit={handleSubmit}>
          <input type="Email" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
          {message && <span> Thanks, I'll reply ASAP :)</span>}
        </form>
      </div>
    </div>
  );
}

export default Contact;
