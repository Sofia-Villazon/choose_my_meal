import "./QuestionModal.css";

import { useEffect, useContext } from "react";

import CurrentUserContex from "../../hooks/contexts/CurrentUserContext";

import ModalWithForm from "../ModalWithForm/ModalWithForm";
import useForm from "../../hooks/useForm";
import { answers } from "../../utils/constants";

function QuestionModal({ number, isOpen, closeActiveModal, handleLogAnswer }) {
  const { questions } = useContext(CurrentUserContex);
  let index;
  number === undefined ? (index = 0) : (index = number);
  const questionInfo = Object.values(questions)[index];
  const { error, values, handleChange } = useForm(answers);

  const isEmpty = values[questionInfo.type] === "";

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const hasErrors = Object.values(error).some((e) => e !== "");

    if (!hasErrors) {
      handleLogAnswer(questionInfo.type, values[questionInfo.type], number);
    }
  };

  useEffect(() => {
    if (!isOpen) {
    }
  });
  return (
    <ModalWithForm
      hiddenButton={false}
      buttonText="Log answer"
      titleText={questionInfo.question}
      closeActiveModal={closeActiveModal}
      isOpen={isOpen}
      onSubmit={handleSubmit}
      isDisabled={isEmpty}
    >
      <fieldset className="modal__fieldset">
        <legend className="modal__legend">Select one answer</legend>

        <ul className="modal__radio-btns">
          {Object.values(questionInfo.answers).map((answer, index) => (
            <li className="modal__radio-btn" key={index}>
              <input
                type="radio"
                id={`type-${answer}-input`}
                className="modal__radio-input"
                name={`${questionInfo.type}`}
                required
                value={answer}
                onChange={handleChange}
                checked={values[questionInfo.type] === answer}
              />
              <label
                htmlFor={`type-${answer}-input`}
                className="modal__label_radio"
              >
                {answer}
              </label>
            </li>
          ))}
        </ul>
      </fieldset>
    </ModalWithForm>
  );
}
export default QuestionModal;
