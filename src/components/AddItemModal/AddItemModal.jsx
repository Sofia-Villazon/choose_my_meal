import "./AddItemModal.css";

import { useState, useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import useForm from "../../hooks/useForm";
import { answers } from "../../utils/constants";

function AddItemModal({
  questions,
  number,
  isOpen,
  closeActiveModal,
  handleLogAnswer,
  setCompleted,
  completed,
}) {
  let index;
  number === undefined ? (index = 0) : (index = number);
  const questionInfo = Object.values(questions)[index];
  const {
    //   handleImage,
    error,
    values,
    setValues,
    handleChange,
    formHandleChange,
  } = useForm(answers);
  // const test = values.time;

  const isEmpty = values[questionInfo.type] === "";

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const hasErrors = Object.values(error).some((e) => e !== "");

    if (!hasErrors) {
      handleLogAnswer(questionInfo.type, values[questionInfo.type]);
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
      error={error}
      isDisabled={isEmpty}
    >
      <fieldset className="modal__fieldset">
        <legend className="modal__legend">Select one answer</legend>

        <ul className="modal__radio-btns">
          {Object.values(questionInfo.answers).map((answer, index) => (
            <li className="modal__radio-btn" key={index}>
              <input
                type="radio"
                id={`type-${answer.toLowerCase()}-input`}
                className="modal__radio-input"
                name={`${questionInfo.type}`}
                required
                value={answer.toLowerCase()}
                onChange={handleChange}
                checked={values[questionInfo.type] === answer.toLowerCase()}
              />
              <label
                htmlFor={`type-${answer.toLowerCase()}-input`}
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
export default AddItemModal;
