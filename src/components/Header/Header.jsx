import "./Header.css";
import logo from "../../assets/images/Logo.svg";
import { NavLink } from "react-router-dom";

function Header({
  handleClickMenu,
  handleLoginClick,
  handleRegisterClick,
  currentTab,
  activeModal,
  closeActiveModal,
}) {
  window.location.pathname === "/"
    ? (currentTab = "Quizz")
    : window.location.pathname === "/About"
      ? (currentTab = "About")
      : (currentTab = "");

  return (
    <header className="header">
      <div className="header__section">
        <img src={logo} alt="wtwr logo" className="header__logo" />
        <button
          className="header__mobile-menu"
          onClick={handleClickMenu}
        ></button>
        <div className="header__menu">
          <div
            className={`header__menu-tabs ${activeModal === "mobile menu" ? "" : "header__menu-tabs_inactive"}`}
          >
            <NavLink
              className={`header__menu-tab ${currentTab === "Quizz" ? "header__menu-tab_active" : ""}`}
              to="/"
              onClick={closeActiveModal}
            >
              Quizz
            </NavLink>
            <NavLink
              className={`header__menu-tab ${currentTab === "About" ? "header__menu-tab_active" : ""}`}
              to="/About"
              onClick={closeActiveModal}
            >
              About
            </NavLink>

            <div className="header__reg-btns">
              <button
                className="header__reg-btn"
                type="button"
                onClick={handleLoginClick}
              >
                Login
              </button>
              <button
                className="header__reg-btn"
                type="button"
                onClick={handleRegisterClick}
              >
                Signin
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
