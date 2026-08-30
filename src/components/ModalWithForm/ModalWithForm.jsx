import "./ModalWithForm.css";
// import useForm from "../../hooks/useForm";
import { useEffect } from "react";

function ModalWithForm({
  children,
  buttonText,
  titleText,
  onSubmit,
  closeActiveModal,
  isOpen,
  isDisabled,
  hiddenButton,
  // formHandleChange,
  // changeName,
  // toggleModal,
}) {
  // const { setIsChecked } = useForm();
  console.log(isDisabled);
  return (
    <section className={`modal ${isOpen ? "modal_is-opened" : ""}`}>
      <div className="modal__container">
        <button
          type="button"
          className="modal__close-btn"
          onClick={closeActiveModal}
        />
        <h2 className="modal__title">{titleText}</h2>
        <form className="modal__form" onSubmit={onSubmit}>
          {children}
          <div className="modal__btns">
            <button
              type="submit"
              className={`modal__submit-btn ${hiddenButton ? "modal__submit-btn_hidden" : ""}`}
              disabled={isDisabled}
            >
              {buttonText}
            </button>
            <button
              className="modal__change-btn"
              type="button"
              // onClick={toggleModal}
            >
              {/* {changeName} */}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ModalWithForm;
