import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import img from "./kapilgupta.png";
import video from "./videos/video3.mp4";
function Intro() {
  const textRef = useRef();

  useEffect(() => {
    console.log(textRef);

    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Developer", "React dev.", "Front End Dev."],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <video className="video" src={video} autoPlay loop muted />
      <div className="bannerWrap">
        <div className="left">
          <div className="imgContainer">
            <img src={img} alt="" />
          </div>
        </div>
        <div className="right">
          <div className="wrapper">
            <h2>Hi there, I'm</h2>
            <h1>Kapil Gupta</h1>
            <h3>
              Full Time <span ref={textRef}></span>
            </h3>
          </div>
          <a href="#portfolio">
            <img src="assets/down.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Intro;
