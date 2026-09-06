// import apiKey from "../constants";
import { handleServerResponse } from "./constants";

const API_BASE_URL = "https://tasty.p.rapidapi.com";

const getRecipes = ({ tag, apiKey }) => {
  return fetch(`${API_BASE_URL}/recipes/list?from=0&size=3&tags=${tag}`, {
    method: "GET",
    headers: {
      "x-rapidapi-key": apiKey,
      "x-rapidapi-host": "tasty.p.rapidapi.com",
      "Content-Type": "application/json",
    },
  }).then(handleServerResponse);
};

const recipeNumber = ({ userAnswers, questions, data }) => {
  if (userAnswers.rating === "") {
    return 0;
  }
  if (userAnswers.rating !== "Surprise me!") {
    return Object.values(questions[4].answers).indexOf(userAnswers.rating);
  } else {
    return Math.floor(Math.random() * data.results.length);
  }
};

function findKeyDeep(obj, targetKey) {
  if (!obj || typeof obj !== "object") return null;
  if (targetKey in obj) {
    return obj[targetKey];
  }

  for (let key in obj) {
    if (typeof obj[key] === "object") {
      const found = findKeyDeep(obj[key], targetKey);
      if (found !== null) return found;
    }
  }

  return null;
}

const recipeInput = (data, number) => {
  const result = {};
  result.name = findKeyDeep(data.results[number], "name");
  result.photo =
    data.results[number].renditions.length === 0
      ? data.results[number].thumbnail_url
      : data.results[number].renditions[0].poster_url;
  result.recipe = data.results[number].instructions.map(
    (step) => step.display_text,
  );

  result.ingredients = data.results[number].sections.map((s) =>
    s.components.map((i) => i.raw_text),
  );
  result.cookingTime =
    data.results[number].cook_time_minutes > 60
      ? `${Math.floor(data.results[number].cook_time_minutes / 60)} hours ${data.results[number].cook_time_minutes % 60} minutes`
      : `${data.results[number].cook_time_minutes} minutes`;
  result.categories = data.results[number].tags
    .map((t) => {
      if (
        t.type !== "appliance" &&
        t.type !== "equipment" &&
        t.type !== "difficulty"
      ) {
        return t.name;
      }
    })
    .filter(Boolean);

  return result;
};

export { getRecipes, recipeNumber, recipeInput };
