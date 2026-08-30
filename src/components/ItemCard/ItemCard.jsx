import "./ItemCard.css";

import useForm from "../../hooks/useForm";

function ItemCard({ question, onClick, completed, number, userAnswers }) {
  const { values } = useForm();
  // console.log(values);
  // if (values[question.type] !== undefined) {
  //   setCompleted({ ...completed, [question.type]: true });
  // }
  // values[question.type] !== undefined
  //   ? setCompleted(true)
  //   : setCompleted(false); // Replace with actual completion logic
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
