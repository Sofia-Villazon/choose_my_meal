import ItemCard from "../ItemCard/ItemCard";

import "./Main.css";

import { useContext } from "react";

import CurrentUserContex from "../../hooks/contexts/CurrentUserContext";

function Main({ handleClick, handleStartCooking, completed }) {
  const { questions, userAnswers, resultRecipe } =
    useContext(CurrentUserContex);

  const isEmpty = Object.values(userAnswers).some((v) => v === "");
  const handleSubmit = (e) => {
    e.preventDefault();
    handleStartCooking();
  };

  return (
    <main className="main">
      {" "}
      <h1 className="main__title">What should I eat?</h1>
      <h2 className="main__subtitle" id="main__subtitle">
        Click on the cards to answer the questions
      </h2>
      <form onSubmit={handleSubmit} className="main__form">
        {" "}
        <section className="cards">
          <ul className="cards__list">
            {Object.values(questions).map((q, index) => (
              <ItemCard
                number={index}
                key={index}
                question={q}
                onClick={() => handleClick(index)}
                completed={completed}
                userAnswers={userAnswers}
              />
            ))}
          </ul>

          <button className="cards__btn" type="submit">
            {" "}
            {/* disabled={isEmpty} */}
            Start cooking!
          </button>
        </section>
      </form>
    </main>
  );
}

export default Main;
