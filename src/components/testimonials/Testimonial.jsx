import "./testimonials.scss";
import StarIcon from "@material-ui/icons/Star";

export default function Testimonials({ openOption }) {
  const data = [
    {
      id: 1,
      name: "Tom Durden",
      title: "Senior Developer",
      img: "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/twitter.png",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.",
    },
    {
      id: 2,
      name: "Alex Kalinski",
      title: "Co-Founder of DELKA",
      img: "https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/youtube.png",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem recusandae perspiciatis ducimus vel hic temporibus. ",
      featured: true,
    },
    {
      id: 3,
      name: "Martin Harold",
      title: "CEO of ALBI",
      img: "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/linkedin.png",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
    },
  ];

  const skillsData = [
    {
      Heading: "Main Skills",
      skills: [
        "React",
        "Redux",
        "Flux",
        "Scss",
        "Material UI",
        "Git and GitHub",
      ],
    },
    {
      Heading: "Language",
      skills: ["HTML", "CSS", "JavaScrript", "ES6", "JSX", "JSS"],
      featured: true,
    },
  ];
  const educationData = [
    {
      heading: "Education",
      univercity: "RAJIV GANDHI PROUDYOGIKI VISHWAVIDYALAYA",
      branch: "Conputer Science And engineering",
      CGPA: "7.2",
    },
  ];
  return (
    <div
      className={"testimonials " + (openOption.testimonial && "active")}
      id="testimonials"
    >
      <h1>Skills</h1>
      <div className="container">
        {skillsData.map((item, key) => (
          <div key={key} className={item.featured ? "card featured" : " card"}>
            <h3>{item.Heading}</h3>
            <div className="center">
              {item.skills.map((skill) => {
                return (
                  <div className="items">
                    <StarIcon
                      style={{ display: "inline-block", color: "crimson" }}
                    />
                    <h5 style={{ display: "inline-block", color: "white" }}>
                      {skill}
                    </h5>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
        {educationData.map((item) => {
          return (
            <div className="card">
              <h3>{item.heading}</h3>
              <div className="center">
                <h5 style={{ color: "crimson" }}>Univercity:- </h5>
                <span style={{ color: "white" }}>{item.univercity}</span>

                <h5 style={{ color: "crimson" }}>Branch:- </h5>
                <span style={{ color: "white" }}>{item.branch}</span>

                <h5 style={{ color: "crimson" }}>CGPA:-</h5>
                <span style={{ color: "white" }}>{item.CGPA}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
