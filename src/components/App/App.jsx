import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import AddItemModal from "../AddItemModal/AddItemModal";
import Result from "../Result/Result";
import About from "../About/About";
import Footer from "../Footer/Footer";
// import LoginModal from "../LoginModal/LoginModal";

import { questions, answers } from "../../utils/constants";

function App() {
  const { currentTab, setCurrentTab } = useState("");
  const navigate = useNavigate();

  const [activeModal, setActiveModal] = useState("");
  const [index, setIndex] = useState();
  const [completed, setCompleted] = useState(answers);
  const [userAnswers, setUserAnswers] = useState(answers);

  const closeActiveModal = () => {
    setActiveModal("");
  };

  const handleOpenMobileMenu = () => {
    activeModal !== "mobile menu"
      ? setActiveModal("mobile menu")
      : setActiveModal("");
    console.log(activeModal);
  };
  const handleSelectCard = (index) => {
    setIndex(index);
    setActiveModal("answer question");
  };
  const handleLogAnswer = (name, value) => {
    setUserAnswers({ ...userAnswers, [name]: value });
    setCompleted({ ...completed, [name]: true });
    setActiveModal("");
    const nextCard = document.getElementById(`card_${index + 1}`);
    nextCard.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const handleStartCooking = () => {
    navigate("/results");
    setCurrentTab("results");
    // Implementation for starting cooking
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
    <div className="page">
      <Header
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        handleClickMenu={handleOpenMobileMenu}
        activeModal={activeModal}
      />
      <div className="page__content">
        <Routes>
          <Route
            path="/"
            element={
              <Main
                userAnswers={userAnswers}
                questions={questions}
                answers={answers}
                handleClick={handleSelectCard}
                handleStartCooking={handleStartCooking}
                completed={completed}
              />
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/results" element={<Result />} />
        </Routes>

        <AddItemModal
          questions={questions}
          number={index}
          closeActiveModal={closeActiveModal}
          isOpen={activeModal === "answer question" && index !== undefined}
          handleLogAnswer={handleLogAnswer}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
