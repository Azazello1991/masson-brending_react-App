import React from 'react'
import { useTranslation } from 'react-i18next';

const Contacts = () => {
  const { t } = useTranslation();
  
  return (
    <section className="section contacts" id="contacts">
        <div className="container">
          <h2 className="sr-only">Контакти</h2>
          <ul className="contacts__wrapper">
            <li className="contacts__card">
              <div className="contacts__picture contacts__picture--days"></div>
              <h3 className="contacts__subtitle">{t("contacts.cardOne.title")}</h3>
              <time className="contacts__time">
                <span className="contacts__days">{t("contacts.cardOne.days")}</span>
                <span>9:00</span> - <span>18:00</span>
              </time>
            </li>

            <li className="contacts__card">
              <div className="contacts__picture contacts__picture--address"></div>
              <h3 className="contacts__subtitle">{t("contacts.cardTwo.title")}</h3>
              <address className="contacts__address">
                <span className="contacts__sity">{t("contacts.cardTwo.city")}</span>
                <span>{t("contacts.cardTwo.strit")}</span>
              </address>
            </li>

            <li className="contacts__card">
              <div className="contacts__picture contacts__picture--contacts"></div>
              <h3 className="contacts__subtitle">{t("contacts.cardThree.title")}</h3>
              <a className="contacts__data" href="tel:+380999999999">
                +38(099)-999-99-99
              </a>
              <a className="contacts__data" href="mailto:gmailexamp@gmail.com">
                gmailexamp@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </section>
  )
}

export default Contacts