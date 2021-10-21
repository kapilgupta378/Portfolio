import { useState } from "react";
import "./portfolio.scss";
import Portfoliolist from "./portfoliolist/Portfoliolist";
import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio,
} from "./data";
import { useEffect } from "react";

function Portfolio({ openOption }) {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);

  const list = [
    {
      id: "featured",
      title: "Feature",
    },
    {
      id: "web",
      title: "Web App",
    },
    // {
    //   id: "mobile",
    //   title: "Mobile App",
    // },
    {
      id: "design",
      title: "Design",
    },
    // {
    //   id: "content",
    //   title: "Content",
    // },
  ];

  useEffect(() => {
    switch (selected) {
      case "feature":
        setData(featuredPortfolio);
        break;
      case "web":
        setData(webPortfolio);
        break;
      case "mobile":
        setData(mobilePortfolio);
        break;
      case "design":
        setData(designPortfolio);
        break;
      case "content":
        setData(contentPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);

  return (
    <div
      className={"portfolio " + (openOption.portfolio && "active")}
      id="portfolio"
    >
      <h1>Portfolio</h1>
      <ul>
        {list.map((item, key) => (
          <Portfoliolist
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => {
          return (
            <div className="item">
              <img src={d.img} alt="" />
              <h3>{d.title}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Portfolio;
