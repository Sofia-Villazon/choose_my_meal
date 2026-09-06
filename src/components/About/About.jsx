import "./About.css";
import logo from "../../assets/images/Logo.svg";

function About() {
  return (
    <div className="about">
      <h1 className="about__title">About Us</h1>
      <div className="about__cards ">
        <div className="about__card about__card_q1">
          <h2 className="about__card__title">
            Deciding your meal shouldn't be so hard but...
          </h2>
        </div>
        <div className="about__card about__card_q2">
          <h2 className="about__card__title">
            You have LIMITED TIME to prepare a meal
          </h2>
          <p className="about__card__text"></p>
        </div>
        <div className="about__card about__card_q3">
          <h2 className="about__card__title">
            You are hosting a SPECIAL EVENT
          </h2>
        </div>

        <div className="about__card about__card_q5">
          <h2 className="about__card__title">You have FOOD RESTRICTIONS</h2>
        </div>
        <div className="about__card about__card_q4">
          <h2 className="about__card__title">We will guide you through it</h2>
          <p className="about__card__text">
            Don't worry, we can help you.We’re here to help! Answer 7 simple
            questions about how much time you have, your energy level, who
            you’re eating with, the occasion, how adventurous you feel, your
            cooking skills, and any food restrictions you have.
          </p>
          <p className="about__card__text">
            Based on your answers, we’ll find a recipe that matches your mood
            and your needs. Whether you want something quick and easy, a
            comforting meal, or something new to try, we’ll help you find the
            perfect dish for you.
          </p>
          <p className="about__card__text">
            Just answer the questions, and we’ll take care of the rest!
          </p>
        </div>
        <div className="about__card about__card_logo">
          <img src={logo} alt="French Toast" className="about__card__image" />
        </div>
      </div>
    </div>
  );
}

export default About;
