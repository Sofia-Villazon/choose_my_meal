const questions = {
  0: {
    type: "difficulty",
    name: "Motivation",
    question: "How much effort do you want to put into cooking?",
    answers: {
      0: "Almost none",
      1: "I'm willing to cook",
      2: "I want a challenge",
      //What it determines: recipe difficulty and preparation time.
    },
    tags: {
      0: "easy",
      1: "",
      2: "difficulty",
    },
  },
  1: {
    type: "time",
    name: "Time",
    question: "How much time do you have?",
    answers: {
      0: "under 15 minutes",
      1: "15–30 minutes",
      2: "30–60 minutes",
      3: "More than an hour",
      //What it determines: the maximum preparation/cooking time.
    },
    tags: {
      0: "under_15_minutes",
      1: "under_30_minutes",
      2: "under_1_hour",
      3: "",
    },
  },
  2: {
    type: "who",
    name: "Who?",
    question: "Who are you cooking for?",
    answers: {
      0: "Just me",
      2: "My partner/date",
      3: "Family",
      4: "A big group",
      // What it determines: Tasty categories such as date night, kid-friendly, family-oriented recipes, etc.
    },
    tags: {
      0: "",
      1: "date_night_dishes_uk date_night",
      2: "tasty_ewd_family shoppable_recipes_family_dinner",
      3: "party",
    },
  },
  3: {
    type: "category",
    name: "Good for the Mood",
    question: "What kind of food would make you happiest right now?",
    answers: {
      0: "Something comforting",
      1: "Something fresh & light",
      2: "Something exciting/spicy",
      3: "Something sweet",
      // What it determines: the type/category of recipe you should prioritize.
    },

    tags: {
      0: "comfort_food",
      1: "healthy",
      2: "franks_spicy_bites",
      3: "indulgent_sweets",
    },
  },
  4: {
    type: "rating",
    name: "Adventurous",
    question: "How adventurous are you feeling?",
    answers: {
      0: "Keep it familiar",
      1: "A little different",
      2: "I want something new",
      3: "Surprise me!",
      // What it determines: whether you should recommend a familiar highly-rated recipe or something more unusual.
    },
  },
  5: {
    type: "filter",
    name: "Food Restrictions",
    question: "Is there anything you want to avoid?",
    answers: {
      0: "Meat",
      1: "Dairy",
      2: "Gluten",
      3: "Nuts",
      4: "Seafood",
      5: "Nothing",
      // What it determines: dietary/ingredient filtering.
    },
    tags: {
      0: "vegan",
      1: "dairy-free",
      2: "gluten-free",
      3: "nuts-free",
      4: "seafood-free",
      5: "",
    },
  },
};

const defaultRecipe = {
  name: "",
  photo: "",
  recipe: [],
  ingredients: [],
  cookTime: "",
  category: [],
};

const answers = {
  difficulty: "",
  time: "",
  who: "",
  category: "",
  rating: "",
  filter: "",
};

const defaultLogData = {
  email: "",
  password: "",
};

const defaultRegData = {
  name: "",
  avatar: "",
  email: "",
  password: "",
};

const baseURL = "http://localhost:3000/";
const apiKey = "42485cc9b0mshc3b8da3e1114a1ap16e20djsn3b551454cf44";

const handleServerResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
};

export {
  questions,
  answers,
  defaultLogData,
  defaultRegData,
  apiKey,
  handleServerResponse,
  defaultRecipe,
  someRecipes,
};
