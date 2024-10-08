import React from 'react'

const Contacts = () => {
  return (
    <section class="section contacts" id="contacts">
        <div class="container">
          <h2 class="sr-only">Графік та контакти</h2>
          <ul class="contacts__wrapper">
            <li class="contacts__card">
              <div class="contacts__picture contacts__picture--days"></div>
              <h3 class="contacts__subtitle">Графік</h3>
              <time class="contacts__time">
                <span class="contacts__days">ПН-ПТ:</span>
                <span>9:00</span> - <span>18:00</span>
              </time>
            </li>

            <li class="contacts__card">
              <div class="contacts__picture contacts__picture--address"></div>
              <h3 class="contacts__subtitle">Адрес</h3>
              <address class="contacts__address">
                <span class="contacts__sity">м. Харків</span>
                <span>вул. Сумська 1</span>
              </address>
            </li>

            <li class="contacts__card">
              <div class="contacts__picture contacts__picture--contacts"></div>
              <h3 class="contacts__subtitle">Контакти</h3>
              <a class="contacts__data" href="tel:+380999999999">
                +38(099)-999-99-99
              </a>
              <a class="contacts__data" href="mailto:gmailexamp@gmail.com">
                gmailexamp@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </section>
  )
}

export default Contacts