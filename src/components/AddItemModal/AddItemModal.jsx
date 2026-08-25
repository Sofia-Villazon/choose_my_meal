import "./AddItemModal.css";

import { useState, useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import useForm from "../../hooks/useForm";

function AddItemModal({ questionList, number }) {
  const isOpen = true;

  const questionInfo = questionList[number];

  // const {
  //   handleImage,
  //   error,
  //   handleInput,
  //   // handleRadioBtn,
  //   setIsChecked,
  //   isChecked,
  //   setIsDisabled,
  //   isDisabled,
  //   setValues,
  //   values,
  //   handleChange,
  // } = useForm();

  // const handleSubmit = (evt) => {
  //   evt.preventDefault();
  //   const hasErrors = Object.values(error).some((e) => e !== "");
  //   if (!hasErrors) {
  //     onAddItem(values);
  //   }
  // };

  // useEffect(() => {
  //   if (!isOpen) {
  //     setValues(defaultClothValues);
  //   }
  // });

  return (
    <ModalWithForm
      buttonText="Add garment"
      titleText={questionInfo.question}
      // closeActiveModal={closeActiveModal}
      isOpen={isOpen}
      // onSubmit={handleSubmit}
      // error={error}
      // isDisabled={isDisabled}
    >
      <fieldset className="modal__fieldset">
        <legend className="modal__legend">Select one answer</legend>
        <span className="modal__error" id="garment-name-input-error">
          {/* {error.weather} */}
        </span>

        <div className="modal__radio-btn"></div>
        <ul className="cards__list">
          {Object.values(questionInfo.answers).map((answer, index) => (
            <li className="modal__radio-btn" key={index}>
              <input
                type="radio"
                id={`type-${answer.toLowerCase()}-input`}
                className="modal__radio-input"
                name="weather"
                required
                value={answer.toLowerCase()}
                // onChange={handleChange}
                // checked={values.weather === "cold"}
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
