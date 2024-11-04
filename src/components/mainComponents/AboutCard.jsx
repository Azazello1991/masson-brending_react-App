import React from "react";
import { useTranslation } from 'react-i18next';
// redux
import { useSelector} from "react-redux";

const AboutCart = () => {
  const { t } = useTranslation();
  const cardsServices = useSelector((state) => state.servicesSlice.content);

  return (
    <ul className="about__services-list">
      {cardsServices.map((card, i) => {
        return (
          <li className="about__servic" key={i}>
            <a className="about__inner" href="#">
              <h3 className="about__subtitle tr">{t(card.title)}</h3>
              <p className="about__description tr">
                {t(card.subtitle)}
              </p>
              <a className="about__link tr" href="#">
                {t("about.cards.button")}
              </a>
              <div className="about__picture">
                <img className="about__img" src={card.url} width="133" height="133" alt="принтер" />
              </div>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default AboutCart;
