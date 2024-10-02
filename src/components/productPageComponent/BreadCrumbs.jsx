import React from "react";
import { Link } from "react-router-dom";

const BreadCrumbs = ({ title }) => {
  return (
    <div class="bread-crumbs">
      <div class="container bread-crumbs__flexbox">
        <Link class="bread-crumbs__item" to="/">
          На головну
        </Link>
        <Link class="bread-crumbs__item" to={'/gallery'}>
          Каталог
        </Link>
        <a class="bread-crumbs__item">{title}</a>
      </div>
    </div>
  );
};

export default BreadCrumbs;
