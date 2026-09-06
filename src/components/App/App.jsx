import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import CurrentUserContext from "../../hooks/contexts/CurrentUserContext.js";

import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import QuestionmModal from "../QuestionModal/QuestionModal";
import Result from "../Result/Result";
import About from "../About/About";
import Footer from "../Footer/Footer";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import CustomPreloader from "../Preloader/Preloader";
import ProtectedRoute from "../../ProtectedRoute/ProtectedRoute.jsx";

import {
  getRecipes,
  recipeNumber,
  recipeInput,
} from "../../utils/ThirdPartyApi";
import {
  questions,
  answers,
  apiKey,
  defaultRecipe,
} from "../../utils/constants";

function App() {
  const { currentTab, setCurrentTab } = useState("");
  const navigate = useNavigate();

  const [activeModal, setActiveModal] = useState("");
  const [index, setIndex] = useState();
  const [completed, setCompleted] = useState(answers);
  const [userAnswers, setUserAnswers] = useState(answers);
  const [isLoading, setIsLoading] = useState(false);
  const [resultRecipe, setResultRecipe] = useState(defaultRecipe);
  const [apiError, setApiError] = useState(false);
  const [startCooking, setStartCooking] = useState(false);

  const closeActiveModal = () => {
    setActiveModal("");
  };

  const handleOpenMobileMenu = () => {
    activeModal !== "mobile menu"
      ? setActiveModal("mobile menu")
      : setActiveModal("");
    console.log(activeModal);
  };

  const handleLoginClick = () => {
    setActiveModal("signin");
  };

  const handleRegisterClick = () => {
    setActiveModal("register");
  };

  const handleToggleRegisterLogin = () => {
    setActiveModal(activeModal === "register" ? "signin" : "register");
  };

  const handleSelectCard = (index) => {
    setIndex(index);
    setActiveModal("answer question");
  };

  const handleLogAnswer = (name, value, i) => {
    setUserAnswers({ ...userAnswers, [name]: value });
    setCompleted({ ...completed, [name]: true });
    setActiveModal("");
    const nextCard = document.getElementById(`card_${index + 1}`);
    const emptyCards = Object.values(userAnswers).map((value, index) =>
      value === "" ? index : null,
    );
    const button = document.querySelector(`.cards__btn`);
    Object.values(completed).every((value) => value === true)
      ? button.scrollIntoView({ behavior: "smooth", block: "center" })
      : i < Object.values(questions).length - 1
        ? nextCard.scrollIntoView({ behavior: "smooth", block: "center" })
        : document
            .getElementById(`card_${emptyCards.filter(Boolean)[0]}`)
            .scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const getTagList = Object.values(userAnswers).map((value, index) => {
    let tagList;
    if (value !== "" && index !== 4) {
      tagList =
        questions[index].tags[
          Object.values(questions[index].answers).indexOf(value)
        ];

      return tagList;
    }
  });

  const handleStartCooking = () => {
    setIsLoading(true);
    setStartCooking(true);
    navigate("/results");

    const tag = getTagList.filter(Boolean).join(" ");
    getRecipes({ tag, apiKey })
      .then((data) => {
        if (data.results.length > 0) {
          const number = recipeNumber({ userAnswers, questions, data });

          const input = recipeInput(data, number);
          setResultRecipe(input);
        } else {
          setResultRecipe(defaultRecipe);
        }
      })
      .then(() => {
        if (resultRecipe === defaultRecipe && apiError === false) {
          setIsLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
        setApiError(true);
      });
  };

  useEffect(() => {
    if (!activeModal) return;

    const handleEscClose = (evt) => {
      if (evt.key === "Escape") {
        closeActiveModal();
      }
    };

    const handleOverlay = (e) => {
      if (e.target.classList.contains("modal")) {
        closeActiveModal();
      }
    };

    document.addEventListener("keydown", handleEscClose);
    document.addEventListener("mousedown", handleOverlay);

    return () => {
      document.removeEventListener("keydown", handleEscClose);
      document.removeEventListener("mousedown", handleOverlay);
    };
  }, [activeModal]);

  return (
    <CurrentUserContext.Provider
      value={{
        userAnswers,
        isLoading,
        questions,
        startCooking,
        resultRecipe,
      }}
    >
      <div className="page">
        <Header
          handleClickMenu={handleOpenMobileMenu}
          handleLoginClick={handleLoginClick}
          handleRegisterClick={handleRegisterClick}
          activeModal={activeModal}
          closeActiveModal={closeActiveModal}
          currentTab={currentTab}
          setCurrentTab={setCurrentTab}
        />
        <div className="page__content">
          <Routes>
            <Route
              path="/"
              element={
                <Main
                  handleClick={handleSelectCard}
                  handleStartCooking={handleStartCooking}
                  completed={completed}
                />
              }
            />
            <Route path="/about" element={<About />} />
            <Route
              path="/results"
              element={
                <ProtectedRoute>
                  {isLoading ? (
                    <CustomPreloader
                      emptyError={resultRecipe === defaultRecipe}
                      apiError={apiError}
                    />
                  ) : (
                    <Result />
                  )}
                </ProtectedRoute>
              }
            />
          </Routes>

          <QuestionmModal
            questions={questions}
            number={index}
            closeActiveModal={closeActiveModal}
            isOpen={activeModal === "answer question" && index !== undefined}
            handleLogAnswer={handleLogAnswer}
          />
          <LoginModal
            closeActiveModal={closeActiveModal}
            isOpen={activeModal === "signin"}
            toggleModal={handleToggleRegisterLogin}
          />
          <RegisterModal
            closeActiveModal={closeActiveModal}
            isOpen={activeModal === "register"}
            toggleModal={handleToggleRegisterLogin}
          />
        </div>
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
