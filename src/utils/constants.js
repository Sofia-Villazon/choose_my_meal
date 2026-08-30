const questions = {
  1: {
    type: "vibe",
    name: "Energy",
    question: "How are you feeling right now?",
    answers: {
      1: "Relaxed",
      2: "Energetic",
      3: "Tired",
      4: "Happy & playful",
      5: "Stressed",
      //What it determines: the overall recipe style. For example, relaxed/stressed → comforting and easy recipes; energetic → something more adventurous.
    },
  },
  2: {
    type: "difficulty",
    name: "Motivation",
    question: "How much effort do you want to put into cooking?",
    answers: {
      1: "Almost none",
      2: "A little",
      3: "I'm willing to cook",
      4: "I want a challenge",
      //What it determines: recipe difficulty and preparation time.
    },
  },
  3: {
    type: "time",
    name: "Time",
    question: "How much time do you have?",
    answers: {
      1: "Under 15 minutes",
      2: "15–30 minutes",
      3: "30–60 minutes",
      4: "More than an hour",
      //What it determines: the maximum preparation/cooking time.
    },
  },
  4: {
    type: "who",
    name: "Who?",
    question: "Who are you cooking for?",
    answers: {
      1: "Full of energy",
      2: "Just me",
      3: "My partner/date",
      4: "Family",
      5: "A big group",
      // What it determines: Tasty categories such as date night, kid-friendly, family-oriented recipes, etc.
    },
  },
  5: {
    type: "category",
    name: "Good for the Mood",
    question: "What kind of food would make you happiest right now?",
    answers: {
      1: "Something comforting",
      2: "Something fresh & light",
      3: "Something indulgent",
      4: "Something exciting/spicy",
      5: "Something sweet",
      // What it determines: the type/category of recipe you should prioritize.
    },
  },
  6: {
    type: "rating",
    name: "Adventurous",
    question: "How adventurous are you feeling?",
    answers: {
      1: "Keep it familiar",
      2: "A little different",
      3: "I want something new",
      4: "Surprise me!",
      // What it determines: whether you should recommend a familiar highly-rated recipe or something more unusual.
    },
  },
  7: {
    type: "filter",
    name: "Food Restrictions",
    question: "Is there anything you want to avoid?",
    answers: {
      1: "Meat",
      2: "Dairy",
      3: "Gluten",
      4: "Nuts",
      5: "Seafood",
      6: "Nothing",
      // What it determines: dietary/ingredient filtering.
    },
  },
};

const answers = {
  vibe: "",
  difficulty: "",
  time: "",
  who: "",
  category: "",
  rating: "",
  filter: "",
};

export { questions, answers };
