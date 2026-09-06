import "./ItemCard.css";

function ItemCard({ question, onClick, completed, number, userAnswers }) {
  return (
    <>
      <li
        className={`card
        ${completed[question.type] === true ? "card_completed" : ""}`}
        onClick={onClick}
        id={`card_${number}`}
      >
        <h2
          className={`card__title  ${completed[question.type] === true ? "card__title_completed" : ""}`}
        >
          {question.name}
        </h2>
        <p
          className={`card__answer ${completed[question.type] === true ? "" : "card__answer_hide"}`}
        >
          {userAnswers[question.type]}
        </p>
      </li>
    </>
  );
}

export default ItemCard;
