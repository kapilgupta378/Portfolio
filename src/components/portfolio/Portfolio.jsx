import "./portfolio.scss";

function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        <li className='active'>Featured</li>
        <li>Web App</li>
        <li>Mobile App</li>
        <li>Desing</li>
        <li>Branding</li>
      </ul>
      <div className="container">
        <div className="item">
          <img src="assets/port3.jpeg" alt="" />
          <h3>banking App</h3>
        </div>
        <div className="item">
          <img src="assets/port3.jpeg" alt="" />
          <h3>banking App</h3>
        </div>
        <div className="item">
          <img src="assets/port3.jpeg" alt="" />
          <h3>banking App</h3>
        </div>
        <div className="item">
          <img src="assets/port3.jpeg" alt="" />
          <h3>banking App</h3>
        </div>
        <div className="item">
          <img src="assets/port3.jpeg" alt="" />
          <h3>banking App</h3>
        </div>
        <div className="item">
          <img src="assets/port3.jpeg" alt="" />
          <h3>banking App</h3>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
