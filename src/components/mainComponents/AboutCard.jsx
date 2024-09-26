import React from "react";
// redux
import { useSelector, useDispatch } from "react-redux";

const AboutCart = () => {
  const cardsServices = useSelector((state) => state.servicesSlice.content);

  return (
    <ul class="about__services-list">
      {cardsServices.map((card, i) => {
        return (
          <li className="about__servic">
            <a className="about__inner" href="#">
              <h3 className="about__subtitle tr">{card.title}</h3>
              <p className="about__description tr">
                {card.subtitle}
              </p>
              <a className="about__link tr" href="#">
                Детальніше
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
