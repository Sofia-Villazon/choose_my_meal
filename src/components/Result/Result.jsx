import "./Result.css";
import foodImage from "../../assets/FrenchToast.png";

function Result() {
  return (
    <div className="result">
      <h1 className="result__title">What should I eat?</h1>
      <div className="result__cards ">
        <div className="result__card result__card_title">
          <h2 className="result__card__title">FRENCH TOAST</h2>
          <img
            src={foodImage}
            alt="French Toast"
            className="result__card__image"
          />
        </div>
        <div className="result__card result__card_time">
          <h2 className="result__card__title">COOKING TIME:</h2>
          <p className="result__card__text"></p>
        </div>
        <div className="result__card result__card_categories">
          <h2 className="result__card__title">CATEGORIES</h2>
          <p className="result__card__text"></p>
        </div>
        <div className="result__card result__card_ingredients">
          <h2 className="result__card__title">INGREDIENTS</h2>
          <p className="result__card__text"></p>
        </div>
        <div className="result__card result__card_recipe">
          <h2 className="result__card__title">RECIPE</h2>
          <p className="result__card__text">
            {" "}
            Ce n’est pas une blague David, ton programme a réellement fonctionné
            et je suis là. » Dit Prélude. Et suivit une longue explication de
            Prélude quant à son existence. Comment avait-il fait pour sortir de
            l’ordinateur de David pour s’installer sur Internet, et de ce fait
            sur tous les ordinateurs reliés à Internet. Les explications
            continuèrent pendant une bonne heure. David laissait parler Prélude.
            Personne n’intervenait. Tout le monde présent, généraux,
            informaticiens, simples gardes, tous étaient stupéfiaient. Une
            voiture venait d’arriver de l’autre côté de la barrière. Une
            personne sortit. Un militaire. Il était comme dans les films de
            guerre pensa David. Les décorations remplissaient l’avant de sa
            veste. Il s’approcha de la voiture où se trouvait David. Le
            chauffeur ouvrit la fenêtre. Ne t’inquiète pas, elle n’a rien pour
            l’instant. Par contre, dès que je serais relié au réseau, Florence
            ne sera plus. Tu comprends, je ne peux pas laisser Florence me gêner
            dans ma tâche. Et puis, elle en sait beaucoup trop sur moi. Oui et
            non. Ce n'est pas une blague, mais David y est pour quelque chose.
            Il a créé un programme sans le savoir. Ce programme se nomme
            Prélude. Il vit sur Internet à travers tout le réseau. Chaque
            ordinateur connecté connait Prélude. Chaque ordinateur est une
            partie de Prélude. Le réseau est Prélude. David avait dû s’asseoir
            lorsqu’il avait entendu le prénom Florence. Il était devenu blanc un
            instant. Il allait peut-être perdre Florence avant même de lui avoir
            avoué son amour. Il devait empêcher Prélude de continuer dans son
            délire. Mais comment pouvait-il stopper ce parasite créé par lui
            quelques années auparavant ? Ce n’était pas un adversaire ordinaire.
            David avait déjà détruit plus d’un virus, mais
          </p>
        </div>
      </div>
    </div>
  );
}

export default Result;
