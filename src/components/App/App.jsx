import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import AddItemModal from "../AddItemModal/AddItemModal";

import questions from "../../utils/constants";

function App() {
  const { currentTab, setCurrentTab } = useState("");
  const navigate = useNavigate();
  const questionList = Object.values(questions.questions);

  return (
    <div className="page">
      <Header currentTab={currentTab} setCurrentTab={setCurrentTab} />
      <div className="page__content">
        <Routes>
          <Route path="/" element={<Main questionList={questionList} />} />
        </Routes>
        <AddItemModal
          questionList={questionList}
          number={1}
          // closeActiveModal={closeActiveModal}
          isOpen={true}
          // onAddItem={onAddItem}
        />
      </div>
    </div>
  );
}

export default App;
