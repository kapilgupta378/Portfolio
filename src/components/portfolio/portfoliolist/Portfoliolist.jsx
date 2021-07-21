import "./portfoliolist.scss";

function Portfoliolist({ id, title, active, setSelected }) {
  return (
    <li
      className={active ? "portfoliolist active" : "portfoliolist"}
      onClick={() => setSelected(id)}
    >
      {title}
    </li>
  );
}

export default Portfoliolist;
