import "./Header.css";
import logo from "../../assets/Logo.svg";
import { NavLink } from "react-router-dom";
// import { useContext } from "react";

function Header({ currentTab, setCurrentTab, handleClickMenu, activeModal }) {
  window.location.pathname === "/"
    ? (currentTab = "Quizz")
    : window.location.pathname === "/About"
      ? (currentTab = "About")
      : (currentTab = "Result");
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
              className={`header__menu-tab ${currentTab === "About" ? "header__menu-tab_active" : ""}`}
              to="/About"
            >
              About
            </NavLink>
            <NavLink
              className={`header__menu-tab ${currentTab === "Quizz" ? "header__menu-tab_active" : ""}`}
              to="/"
              onClick={() => setCurrentTab("Quizz")}
            >
              Quizz
            </NavLink>
            <div className="header__reg-btns">
              <button className="header__reg-btn" type="button">
                Login
              </button>
              <button className="header__reg-btn" type="button">
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
