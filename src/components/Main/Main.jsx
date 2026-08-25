// import { useContext } from "react";

import ItemCard from "../ItemCard/ItemCard";
// import { CurrentTemperatureUnitContext } from "../../hooks/contexts/CurrentTemperatureUnitContext";

import "./Main.css";

function Main({ questionList }) {
  return (
    <main>
      <h1 className="main__title">What should I eat?</h1>
      <h2 className="main__subtitle">
        Click on the cards to answer the questions
      </h2>
      <section className="cards">
        <ul className="cards__list">
          {questionList.map((q, index) => (
            <ItemCard key={index} question={q} />
          ))}
        </ul>
        <button className="cards__btn">Start cooking!</button>
      </section>
    </main>
  );
}

export default Main;
