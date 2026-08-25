import "./Header.css";
import logo from "../../assets/Logo.svg";
import { NavLink } from "react-router-dom";
// import { useContext } from "react";

function Header({ currentTab, setCurrentTab }) {
  window.location.pathname === "/"
    ? (currentTab = "Quizz")
    : (currentTab = "About");
  return (
    <header className="header">
      <img src={logo} alt="wtwr logo" className="header__logo" />
      <div className="header__menu">
        <div className="header__menu-tabs">
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
        </div>
        <div className="header__reg_btns">
          <button className="header__reg_btn" type="button">
            Login
          </button>
          <button className="header__reg_btn" type="button">
            Signin
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
