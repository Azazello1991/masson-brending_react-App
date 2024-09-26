import React from "react";

const PaginationGallery = () => {
  return (
    <div class="pagination catalog-page__pagination">
      <ul class="pagination__list">
        <li class="pagination__item">
          <a class="pagination__link pagination__link--prev pagination__link--dasabled">
            <span class="sr-only">Повернутись на попередню сторінку</span>
          </a>
        </li>
        <li class="pagination__item">
          <a href="#" class="pagination__link">
            1
          </a>
        </li>
        <li class="pagination__item">
          <a href="#" class="pagination__link pagination__link--current">
            2
          </a>
        </li>
        <li class="pagination__item">
          <a href="#" class="pagination__link">
            3
          </a>
        </li>
        <li class="pagination__item">
          <a class="pagination__link pagination__link--next">
            <span class="sr-only">Перейти на наступну сторінку</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default PaginationGallery;
