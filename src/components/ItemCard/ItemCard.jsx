import questions from "../../utils/constants";
import "./ItemCard.css";

function ItemCard({ question }) {
  return (
    <>
      <li className="card">
        <h2 className="card__title">{question.name}</h2>
      </li>
      {console.log(questions)}
    </>
  );
}

export default ItemCard;
