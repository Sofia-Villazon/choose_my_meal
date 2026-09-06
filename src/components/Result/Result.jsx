import "./Result.css";

import { useContext } from "react";

import CurrentUserContex from "../../hooks/contexts/CurrentUserContext";

function Result() {
  const { userAnswers, resultRecipe } = useContext(CurrentUserContex);

  const time = () => {
    if (
      resultRecipe.cookingTime === null ||
      resultRecipe.cookingTime === undefined ||
      resultRecipe.cookingTime === "" ||
      resultRecipe.cookingTime === "0 minutes"
    ) {
      return `${userAnswers.time}`;
    } else {
      return resultRecipe.cookingTime;
    }
  };

  return (
    <div className="result">
      <h1 className="result__title">What should I eat?</h1>
      <div className="result__cards ">
        <div className="result__card result__card_title">
          <h2 className="result__card__title">
            {resultRecipe.name.toUpperCase()}
          </h2>
          <img
            src={resultRecipe.photo}
            alt={resultRecipe.name}
            className="result__card__image"
          />
        </div>
        <div className="result__card result__card_time">
          <h2 className="result__card__title">COOKING TIME:</h2>
          <p className="result__card__text">{time()}</p>
        </div>
        <div className="result__card result__card_categories">
          <h2 className="result__card__title">CATEGORIES</h2>
          <ul className="result__card__list_category">
            {resultRecipe.categories.map((category, index) => (
              <li
                className="result__card__text result__card__text_category"
                key={index}
              >
                {category[0].toUpperCase() +
                  category.replaceAll("_", " ").slice(1)}
              </li>
            ))}
          </ul>
        </div>
        <div className="result__card result__card_ingredients">
          <h2 className="result__card__title">INGREDIENTS</h2>

          {resultRecipe.ingredients.map((section, index) => (
            <ul key={index} className="result__card__list">
              {section.map((ingredient, index) => (
                <li
                  className="result__card__text result__card__text_ingedients"
                  key={index}
                >
                  {ingredient.replaceAll("-", " ").toLowerCase()}
                </li>
              ))}
            </ul>
          ))}
        </div>
        <div className="result__card result__card_recipe">
          <h2 className="result__card__title">RECIPE</h2>
          <ul className="result__card__list_recipe">
            {resultRecipe.recipe.map((step, index) => (
              <li
                className="result__card__text result__card__text_recipe"
                key={index}
              >
                {step}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Result;
